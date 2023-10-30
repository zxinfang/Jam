import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';

class historyRepository {
  getHistory = async (start_time, end_time, highway) => {
    try {
      const data = [start_time, end_time, highway];
      const sql = `
      SELECT
        mission_id,
        work_section,
        time,
        highway,
        milage,
        section,
        process_time,
        incident_type
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
}

export default new historyRepository();
