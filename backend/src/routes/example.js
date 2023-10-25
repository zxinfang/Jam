import { exampleMiddleware } from '../middlewares/exampleMiddleware';
import exampleController from '../http/Controller/exampleController';

const api = {
    namespace: 'example',
    routes: [
        {
            RestFulMethod: 'get',
            path: '/',
            method: exampleController.Get,
            middlewareMethod: [exampleMiddleware],
        },
        {
            RestFulMethod: 'get',
            path: '/query',
            method: exampleController.GetQuery,
            middlewareMethod: [exampleMiddleware],
        },
    ],
};

export default api;
