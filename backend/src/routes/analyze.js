
import analyzeController from '../http/Controller/analyzeController';

const api = {
  namespace: 'analyze',
  routes: [
    {
      RestFulMethod: 'post',
      path: '/highway',
      method: analyzeController.getHighwayAnalyze,
    },
    {
      RestFulMethod: 'post',
      path: '/incident',
      method: analyzeController.getIncidentAnalyze,
    }
  ],
};

export default api;
