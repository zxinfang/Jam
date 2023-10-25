import numpy as np
from flask import Flask, request, jsonify
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
import math
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import KFold

data = pd.read_csv(r'D:\研究鎖\28屆全國大賽\論文實驗\exp2\kmean\pre_data_kmean_5群-4.csv')
# data = data[data['cluster']==3]
X = data[['real_arrival_km', 'speed']]
y = data[['arrival_time']]

# 設置K-fold交叉驗證的參數
n_splits = 10
random_state = 42

# 初始化K-fold交叉驗證
kf = KFold(n_splits=n_splits, random_state=random_state, shuffle=True)

# 創建空列表來保存每個fold的MSE
# mae_scores = []
# mape_scores = []
# mse_scores = []
# rmse_scores = []
# TADT5_scores =[]
# TADT10_scores =[]
# TADT15_scores =[]
# TADT30_scores =[]
# r2yavg_scores =[]


# 遍歷每個fold
for train_index, test_index in kf.split(X):
    # 將數據劃分為訓練集和測試集
    X_train, X_test = X.iloc[train_index], X.iloc[test_index]
    y_train, y_test = y.iloc[train_index], y.iloc[test_index]

    model = GradientBoostingRegressor(loss='squared_error', min_samples_leaf=15, max_depth=10, learning_rate=0.1,
                                      n_estimators=100)

    model = model.fit(X_train, y_train.values.ravel())

    # 在測試集上進行預測
    y_pred = model.predict(X_test)

#     mae = 0
#     mape = 0
#     mse = 0
#     TADT5 =0
#     TADT10 =0
#     TADT15 =0
#     TADT30 =0
#     sstot = 0
#     ssres = 0
#     r2yavg = 0
#     # 計算均方誤差（MaE）
#     for z in range(len(y_test)):
#         yy = float(y_test._values[z:z+1][0][0])
#         yh = y_pred[z]
#         mae += np.abs(yy-yh)
#         mape += np.abs((yh-yy)/yy)
#         mse += math.pow((yh-yy),2)
#         r2yavg += yh
#         if (yy-5)<=yh and yh<=(yy+5):
#             TADT5=TADT5+1
#         if (yy-10)<=yh and yh<=(yy+10):
#             TADT10=TADT10+1
#         if (yy-15)<=yh and yh<=(yy+15):
#             TADT15=TADT15+1
#         if (yy-30)<=yh and yh<=(yy+30):
#             TADT30=TADT30+1
#
#     r2yavg = r2yavg / len(y_test)
#     for g in range(len(y_test)):
#         yy = float(y_test._values[g:g+1][0][0])
#         yh = y_pred[g]
#         sstot += math.pow((r2yavg - yy),2)
#         ssres += math.pow((yh-yy),2)
#     mse = mse / len(y_test)
#     # 將MSE添加到列表中
#     mae_scores.append((mae)/len(y_test))
#     mape_scores.append((mape)/len(y_test))
#     rmse_scores.append(np.sqrt(mse))
#     TADT5_scores.append((TADT5)/len(y_test))
#     TADT10_scores.append((TADT10)/len(y_test))
#     TADT15_scores.append((TADT15)/len(y_test))
#     TADT30_scores.append((TADT30)/len(y_test))
#     TADT30_scores.append((TADT30)/len(y_test))
#     r2yavg_scores.append(1-(ssres/sstot))
#
#
# # 計算平均mae
# average_mae = np.mean(mae_scores)
# average_mape = np.mean(mape_scores)
# average_rmse = np.mean(rmse_scores)
# average_TADT5 = np.mean(TADT5_scores)
# average_TADT10 = np.mean(TADT10_scores)
# average_TADT15 = np.mean(TADT15_scores)
# average_TADT30 = np.mean(TADT30_scores)
# average_r2 = np.mean(r2yavg_scores)
# # 打印平均mae
# print("Average mae: ", average_mae)
# print("Average mape: ", average_mape)
# print("Average rmse: ", average_rmse)
# print("Average TADT5: ", round(average_TADT5,2)*100,"%")
# print("Average TADT10: ", round(average_TADT10,2)*100,"%")
# print("Average TADT15: ", round(average_TADT15,2)*100,"%")
# print("Average TADT30: ", round(average_TADT30,2)*100,"%")
# print("Average r2: ", average_r2)
#

app = Flask(__name__)
@app.route('/predict/gbrt', methods=['POST'])
def predict():

    print(request.get_json())
    input_data =pd.DataFrame(request.get_json(), index=[0])
    predictions = model.predict(input_data)
    print(predictions[0])

    return jsonify(data={'process_time': predictions[0]})

if __name__ == '__main__':
    app.run()
