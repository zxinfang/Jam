from flask import Flask, request, jsonify
import pandas as pd
import matplotlib.pyplot as plt  # 視覺化繪製
from sklearn.cluster import KMeans
import numpy as np
import os
import psycopg2
from dotenv import load_dotenv
from datetime import datetime
from sklearn import cluster, datasets, metrics

data = pd.read_csv(r'D:\研究鎖\28屆全國大賽\predict\pre_data_0601.csv')
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

#visualize results
# plt.plot(range(1, 11), sse)
# plt.xticks(range(1, 11))
# plt.xlabel("Number of Clusters")
# plt.ylabel("SSE")
# plt.show()
# print(sse)


kmeans = KMeans(init="random", n_clusters=5, n_init=10, random_state=1)
#fit k-means algorithm to data
kmeans.fit(x)


#view cluster assignments for each observation
print(kmeans.labels_)

# centers = list(kmeans_model.cluster_centers_)
# print(centers)

# cluster_labels = kmeans_model.labels_

# # 印出績效
# silhouette_avg = metrics.silhouette_score(x, cluster_labels)
# print(silhouette_avg)
data['cluster'] = kmeans.labels_
y = np.array(range(0,15246))
plt.scatter(x['arrival_time'],x['real_arrival_km'], c=kmeans.labels_)
# plt.show()
# # 根據重新分成的 5 組來畫出資料
# plt.subplot(122)
# plt.title('KMeans=5 groups')
# plt.scatter(x[:,0],x[:,0], cmap=plt.cm.Set1)
# # 顯示圖表
# plt.tight_layout()
# plt.show()

# data.to_csv('pre_data_kmean-new.csv')

app = Flask(__name__)
@app.route('/kmeans/gbrt', methods=['POST'])
def kmeans_prediction():

    print(request.get_json())
    input_data = pd.DataFrame(request.get_json(), index=[0])
    new_data_pred = kmeans.predict(input_data)
    cluster_label = new_data_pred[0].tolist()
    print(cluster_label)

    return jsonify(data={'type': cluster_label})

if __name__ == '__main__':
    app.run()
