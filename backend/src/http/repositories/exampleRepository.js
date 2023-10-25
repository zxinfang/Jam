import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';

class exampleRepository {
    Get = async () => {
        try {
            const sql = `
            SELECT *
            FROM "test"."users"
            `;

            return await dbWrapper.queryResult(sql, null);
        } catch (err) {
            return err.message;
        }
    };

    GetQuery = async (num, str) => {
        try {
            const data = [num, str];
            const sql = `
            SELECT *
            FROM "test"."users"
            WHERE "id" = $1
              AND "name" =  $2`;

            return await dbWrapper.queryResult(sql, data);
        } catch (err) {
            return err.message;
        }
    };
}

export default new exampleRepository();
