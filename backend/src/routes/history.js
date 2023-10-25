
import historyController from '../http/Controller/historyController';

const api = {
  namespace: 'history',
  routes: [
    {
      RestFulMethod: 'post',
      path: '/',
      method: historyController.getHistory,
    }
  ],
};

export default api;
