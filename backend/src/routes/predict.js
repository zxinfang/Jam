
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
    }
  ],
};

export default api;
