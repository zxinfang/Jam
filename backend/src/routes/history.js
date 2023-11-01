
import historyController from '../http/Controller/historyController';

const api = {
  namespace: 'history',
  routes: [
    {
      RestFulMethod: 'post',
      path: '/',
      method: historyController.getHistory,
    },
    {
      RestFulMethod: 'get',
      path: '/special',
      method: historyController.getSpecialIncident,
    }
  ],
};

export default api;
