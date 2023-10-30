import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';
import axios from 'axios';

class predictRepository {
  getSVMPredict = async (lanenu, incident_type, incident_type_note, machine, special_incident, weekend, time_state) => {
    try {
      const inputData = {
        lanenu: lanenu,
        incident_type: incident_type,
        incident_type_note: incident_type_note,
        machine: machine,
        special_incident: special_incident,
        weekend: weekend,
        time_state: time_state
      }

      const { data: result } = await axios.post('http://localhost:5000/predict/svm', inputData);
      console.log(result);
      return result;
    } catch (err) {
      return err.message;
    }
  };

  getGBRTPredict = async (real_arrival_km, arrival_time, speed) => {
    try {
      let inputData = {
        real_arrival_km: real_arrival_km,
        arrival_time: arrival_time,
      };
      console.log(inputData)
      const { data } = await axios.post('http://localhost:5000/kmeans/gbrt', inputData);

      const predict_data = {
        real_arrival_km: real_arrival_km,
        speed: speed,
        type: data.type
      }
      const { data: result } = await axios.post('http://localhost:5000/predict/gbrt', predict_data);
      console.log(result);

      return result;
    } catch (err) {
      return err.message;
    }
  }

  getNewId = async () => {
    try {
      const sql = `
        SELECT
          mission_id
        FROM "incident"."incident_predict"
        ORDER BY mission_id DESC
        LIMIT 1
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  };

  getIncident = async () => {
    try {
      const sql = `
      SELECT
      	a.mission_id,
      	b.describe AS incident_type,
      	c.describe AS incident_type_note,
      	d.describe AS lanenu,
      	CASE WHEN a.special_incident = 0 THEN '否'
      			 WHEN a.special_incident = 1 THEN '是'
      	END AS special_incident,
      	a."process_time(min)"
      FROM "incident"."incident_predict" a
      LEFT JOIN "incident"."incident_type" b 
      	ON a.incident_type = b.id
      LEFT JOIN "incident"."incident_type_note" c
      	ON a.incident_type_note =c.id
      LEFT JOIN "incident"."lanenu" d
      	ON a.lanenu = d.id	
      ORDER BY mission_id DESC
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  }

  postIncident = async (newId, incident_type, incident_type_note, lanenu, special_incident, predict_time) => {
    try {
      const data = [newId, incident_type, incident_type_note, lanenu, special_incident, predict_time];
      const sql = `
      INSERT INTO "incident"."incident_predict"(mission_id,incident_type,incident_type_note,lanenu,special_incident,"process_time(min)")
      VALUES($1,$2,$3,$4,$5,$6)
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };

}

export default new predictRepository();
