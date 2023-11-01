import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';

class historyRepository {
  getHistory = async (start_time, end_time, highway) => {
    try {
      const data = [start_time, end_time, highway];
      const sql = `
      SELECT
        *
      FROM "incident"."incident_processing" 
      WHERE time BETWEEN $1 AND $2
        AND highway  = $3
      ORDER BY mission_id,time
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };

  getSpecialIncident = async () => {
    try {
      const sql = `
      SELECT 
        * 
      FROM "incident"."incident_processing"
      WHERE process_time >= 200.0
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  };
}

export default new historyRepository();
