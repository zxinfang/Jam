
import dropdownController from '../http/Controller/dropdownController';

const api = {
  namespace: 'dropdown',
  routes: [
    {
      RestFulMethod: 'get',
      path: '/day',
      method: dropdownController.getDay,
    },
    {
      RestFulMethod: 'get',
      path: '/time',
      method: dropdownController.getTime,
    },
    {
      RestFulMethod: 'get',
      path: '/incident/type',
      method: dropdownController.getIncidentType,
    },
    {
      RestFulMethod: 'get',
      path: '/incident/type/note',
      method: dropdownController.getIncidentTypeNote,
    },
    {
      RestFulMethod: 'get',
      path: '/lanenu',
      method: dropdownController.getLanenu,
    },
  ],
};

export default api;
