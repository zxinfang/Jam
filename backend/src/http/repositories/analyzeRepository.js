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
      			"時間",
      			substring("時間",1,4) AS year,
      			substring("時間",6,2) AS month,
      			COUNT("任務編號")
      		FROM "incident"."incident_processing"
      		WHERE "時間" BETWEEN $1 AND $2
      			AND "國道"  = $3
      		GROUP BY "任務編號","時間"
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
      	"性質" AS incident_type,
      	COUNT("性質")
      FROM "incident"."incident_processing"
      WHERE "性質" IN ('散落物','事故','故障車','誤闖','車輛停等','翻牌面','道路施工','煙霧','火災','巡邏查看','支援','其他')
      	AND "時間" BETWEEN $1 AND $2
        AND "國道"  = $3
      GROUP BY "性質"
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };
}

export default new analyzeRepository();
