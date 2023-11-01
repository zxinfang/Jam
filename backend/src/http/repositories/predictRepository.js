import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';

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
      const { data } = await axios.post('http://localhost:5000/kmeans/gbrt', inputData);

      const predict_data = {
        real_arrival_km: real_arrival_km,
        speed: speed,
        type: data.type
      }
      const { data: result } = await axios.post('http://localhost:5000/predict/gbrt', predict_data);

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
      	a.special_incident,
        a.process_time,
      	a.work_section,
      	a.highway,
      	a.direction,
      	a.section,
      	a.keep_dispatch,
      	a.status,
      	a.remark,
      	a.real_clean_time,
      	a.real_respond_time,
        a.create_time
      FROM "incident"."incident_predict" a
      JOIN "incident"."incident_type" b
      	ON a.incident_type = b.id
      JOIN "incident"."incident_type_note" c
      	ON a.incident_type_note = c.id
      JOIN "incident"."lanenu" d
        ON a.lanenu = d.id	
      ORDER BY mission_id 
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  }

  postIncident = async (newId, incident_type, incident_type_note, lanenu, special_incident, predict_time, work_section,
    highway, direction, section, keep_dispatch, status, remark) => {
    try {
      const data = [newId, incident_type, incident_type_note, lanenu, special_incident, predict_time, work_section,
        highway, direction, section, keep_dispatch, status, remark, moment().format('YYYY/MM/DD HH:mm')];

      const sql = `
      INSERT INTO "incident"."incident_predict"(mission_id,incident_type, incident_type_note, lanenu, special_incident, process_time, work_section,
        highway, direction, section, keep_dispatch, status, remark,create_time)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };

  updateIncident = async (mission_id, status, remark, real_clean_time, real_respond_time) => {
    try {
      const data = [mission_id, status, remark, real_clean_time, real_respond_time];

      const sql = `
      UPDATE "incident"."incident_predict"
      SET status=$2, remark=$3, real_clean_time=$4, real_respond_time=$5
      WHERE mission_id =$1
      `;

      return await dbWrapper.queryResult(sql, data);
    } catch (err) {
      return err.message;
    }
  };

}

export default new predictRepository();
