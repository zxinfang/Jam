import predictRepository from '../repositories/predictRepository';
import moment from 'moment';
// import axios from 'axios';
import _, { concat, stubString } from 'lodash';
import { request } from 'chai';

class predictService {
  getNewId = async () => {
    try {
      const result = await predictRepository.getNewId();

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

  getIncident = async () => {
    try {
      const result = await predictRepository.getIncident();

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
  }

  postIncident = async (incident_type, incident_type_note, lanenu, special_incident, work_section,
    highway, direction, section, keep_dispatch, status, remark, weekend, time_state,
    real_arrival_km, arrival_time, speed, machine) => {
    try {
      let missionid = await predictRepository.getNewId();
      let newId;

      if (missionid.length == 0) {
        newId = `${moment().format('YYYYMM')}0001`
      }
      else {
        const oldId = parseInt(Object.values(missionid[0])[0].substr(6));
        newId = `${moment().format('YYYYMM')}${(oldId + 1).toString().padStart(4, '0')}`
      }

      const svm_result = await predictRepository.getSVMPredict(lanenu, incident_type, incident_type_note, machine, special_incident, weekend, time_state);
      const gbrt_result = await predictRepository.getGBRTPredict(real_arrival_km, arrival_time, speed);
      const { process_time: svm_time } = svm_result;
      const { process_time: gbrt_time } = gbrt_result;
      const predict_time = svm_time + gbrt_time;

      const result = await predictRepository.postIncident(newId, incident_type, incident_type_note, lanenu, special_incident, predict_time, work_section,
        highway, direction, section, keep_dispatch, status, remark);

      const process_time = {
        process_time: svm_time + gbrt_time
      }
      result.push(process_time);

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

  updateIncident = async (mission_id, status, remark, real_clean_time, real_respond_time) => {
    try {
      const result = await predictRepository.updateIncident(mission_id, status, remark, real_clean_time, real_respond_time);

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
  }
}

export default new predictService();
