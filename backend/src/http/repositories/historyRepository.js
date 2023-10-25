import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';

class historyRepository {
  getHistory = async (start_time, end_time, highway) => {
    try {
      const data = [start_time, end_time, highway];
      const sql = `
      SELECT
        "任務編號" AS missionid,
        "工務段" AS work_section,
        "時間" AS time,
        "國道" AS highway,
        "里程數" AS km,
        "路段" section,
        "清除時間(分)" AS process_time,
        "性質" AS incident_type
      FROM "incident"."incident_processing" 
      WHERE "時間" BETWEEN $1 AND $2
        AND "國道"  = $3
      ORDER BY "任務編號","時間"
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };
}

export default new historyRepository();
