import _ from 'lodash';

const exampleMiddleware = async (req, res, next) => {
    console.log('test => middleware');
    next();
};

export { exampleMiddleware };
