import exampleRepository from '../repositories/exampleRepository';
import moment from 'moment';
import _ from 'lodash';

class exampleService {
    Get = async () => {
        try {
            const result = await exampleRepository.Get();

            if (!result) {
                return {
                    status: 404,
                    data: null,
                };
            } else if (typeof result === 'string') {
                return {
                    status: 500,
                    message: result,
                };
            } else if (typeof result === 'object') {
                return {
                    status: 200,
                    data: result,
                };
            }
        } catch (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
    };

    GetQuery = async (num, str) => {
        try {
            const result = await exampleRepository.GetQuery(num, str);

            if (!result) {
                return {
                    status: 404,
                    data: null,
                };
            } else if (typeof result === 'string') {
                return {
                    status: 500,
                    message: result,
                };
            } else if (typeof result === 'object') {
                return {
                    status: 200,
                    data: result,
                };
            }
        } catch (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
    };
}

export default new exampleService();
