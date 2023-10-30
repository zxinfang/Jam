import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';

class analyzeRepository {
  getHighwayAnalyze = async (start_time, end_time, highway) => {
    try {
      const data = [start_time, end_time, highway];
      const sql = `
      SELECT
      	a.year,
      	a.month,
      	COUNT(a.count)
      	FROM (
      		SELECT 
      			time,
      			substring(time,1,4) AS year,
      			substring(time,6,2) AS month,
      			COUNT(mission_id)
      		FROM "incident"."incident_processing"
      		WHERE time BETWEEN $1 AND $2
      			AND highway  = $3
      		GROUP BY mission_id,time
      	) a
      GROUP BY a.year,a.month,a.count
      ORDER BY a.year,a.month
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };

  getIncidentAnalyze = async (start_time, end_time, highway) => {
    try {
      const data = [start_time, end_time, highway];
      const sql = `
      SELECT 
      	incident_type AS incident_type,
      	COUNT(incident_type)
      FROM "incident"."incident_processing"
      WHERE incident_type IN ('散落物','事故','故障車','誤闖','車輛停等','翻牌面','道路施工','煙霧','火災','巡邏查看','支援','其他')
      	AND time BETWEEN $1 AND $2
        AND highway  = $3
      GROUP BY incident_type
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };
}

export default new analyzeRepository();
