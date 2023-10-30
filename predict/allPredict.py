from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn import datasets
from sklearn.cluster import KMeans
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import KFold

# SVM模型訓練
# 讀取訓練模型檔
model_data = pd.read_csv(r'D:\研究鎖\28屆全國大賽\Jam\Jam\predict\0626wekaJ48_data.csv')
print(model_data.head())

X = model_data[['lanenu', 'incident_type', 'incident_type_note', 'machine', 'special_incident', 'weekend', 'time_state']]
y = model_data['process_time_type']

# 將數據拆分為訓練集、測試集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 創建SVM模型
svm_classifier = SVC(kernel='linear')
# 使用訓練集進行模型訓練
svm_classifier.fit(X_train, y_train)
# 測試模型
y_pred = svm_classifier.predict(X_test)

# 計算模型準確度
accuracy = accuracy_score(y_test, y_pred)
print(f'模型的準確性：{accuracy:.2f}')


# 分類模型訓練
data = pd.read_csv(r'D:\研究鎖\28屆全國大賽\Jam\Jam\predict\pre_data_0601.csv')
data = data[data['real_arrival_km']<=90]
data = data[data['arrival_time']<=70]
x = data[['real_arrival_km','arrival_time']]

kmeans_kwargs = {
"init": "random",
"n_init": 10,
"random_state": 1,
}

sse = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, **kmeans_kwargs)
    kmeans.fit(x)
    sse.append(kmeans.inertia_)

kmeans = KMeans(init="random", n_clusters=5, n_init=10, random_state=1)
# fit k-means algorithm to data
kmeans.fit(x)

print(kmeans.labels_)

# svm 預測
app = Flask(__name__)
@app.route('/predict/svm', methods=['POST'])
def svm_predict():
    # 取得特徵數據
    print(request.get_json())
    input_data =pd.DataFrame(request.get_json(), index=[0])
    print(input_data)

    # 使用模型對新數據進行預測
    prediction = svm_classifier.predict(input_data.values)
    print(f'process_time_type：{prediction[0]}')

    time_data = pd.read_csv(r'D:\研究鎖\28屆全國大賽\Jam\Jam\predict\data_kmean_分群.csv')
    # 取得與預測類別相符的資料
    time_data = time_data[time_data['process_time_type'] == prediction[0]]
    # 加總預測時間
    total_time = time_data.loc[:, 'process_time'].sum()
    # 資料筆數
    count = time_data.loc[:, 'process_time'].shape[0]
    # 計算確切時間
    process_time = total_time/count
    print(total_time)
    print(count)
    print(f'process_time：{process_time}')

    return jsonify({'process_time': process_time})


# 分類
@app.route('/kmeans/gbrt', methods=['POST'])
def kmeans_predict():
    print(request.get_json())
    input_data = pd.DataFrame(request.get_json(), index=[0])
    new_data_pred = kmeans.predict(input_data.values)
    cluster_label = new_data_pred[0].tolist()
    print(cluster_label)

    return jsonify({'type': cluster_label})


# gbrt 預測
@app.route('/predict/gbrt', methods=['POST'])
def gbrt_predict():
    print(request.get_json())
    input_data = pd.DataFrame(request.get_json(), index=[0])
    label = input_data['type'].values[0]

    # gbrt 預測模型訓練
    data = pd.read_csv(fr'D:\研究鎖\28屆全國大賽\Jam\Jam\predict\pre_data_kmean_5群-{label+1}.csv')
    # data = data[data['cluster']==3]
    X = data[['real_arrival_km', 'speed']]
    y = data[['arrival_time']]

    # 設置K-fold交叉驗證的參數
    n_splits = 10
    random_state = 42

    # 初始化K-fold交叉驗證
    kf = KFold(n_splits=n_splits, random_state=random_state, shuffle=True)

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

    # print(request.get_json())
    # input_data = pd.DataFrame(request.get_json(), index=[0])
    predict_data = {'real_arrival_km':input_data['real_arrival_km'][0], 'speed':input_data['speed'][0]}
    print(predict_data)
    predictions = model.predict([list(predict_data.values())])
    print(predictions[0])

    return jsonify({'process_time': predictions[0]})

if __name__ == '__main__':
    app.run()