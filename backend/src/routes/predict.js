
import predictController from '../http/Controller/predictController';

const api = {
  namespace: 'predict',
  routes: [
    {
      RestFulMethod: 'get',
      path: '/',
      method: predictController.getPredictData,
    }
  ],
};

export default api;
