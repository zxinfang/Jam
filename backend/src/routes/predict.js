
import predictController from '../http/Controller/predictController';

const api = {
  namespace: 'predict',
  routes: [
    {
      RestFulMethod: 'post',
      path: '/',
      method: predictController.postIncident,
    },
    {
      RestFulMethod: 'get',
      path: '/incident',
      method: predictController.getIncident,
    },
    {
      RestFulMethod: 'post',
      path: '/incident/update',
      method: predictController.updateIncident,
    }
  ],
};

export default api;
