from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

# 讀取訓練模型檔
model_data = pd.read_csv(r'D:\研究鎖\28屆全國大賽\論文實驗\exp1\0626wekaJ48_data.csv')
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


app = Flask(__name__)
@app.route('/predict/svm', methods=['POST'])
def predict():
    # 取得特徵數據
    print(request.get_json())
    input_data =pd.DataFrame(request.get_json(), index=[0])
    print(input_data)

    svm_input = [
        input_data.lanenu,
        input_data.incident_type,
        input_data.incident_type_note,
        input_data.machine,
        input_data.special_incident,
        input_data.weekend,
        input_data.time_state,
    ]
    print(svm_input)

    # 使用模型對新數據進行預測
    prediction = svm_classifier.predict(input_data)
    print(f'process_time_type：{prediction[0]}')

    time_data = pd.read_csv(r'D:\研究鎖\28屆全國大賽\論文實驗\exp1\data_kmean_分群.csv')
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

    return jsonify(data={'process_time': process_time})

if __name__ == '__main__':
    app.run()
