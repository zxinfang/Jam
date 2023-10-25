import predictRepository from '../repositories/predictRepository';
import moment from 'moment';
// import axios from 'axios';
import _ from 'lodash';
import { request } from 'chai';

class predictService {
  getPredictResult = async (lanenu, incident_type, incident_type_note, machine, special_incident, weekend, time_state, real_arrival_km, arrival_time, speed) => {
    try {
      const svm_result = await predictRepository.getSVMPredict(lanenu, incident_type, incident_type_note, machine, special_incident, weekend, time_state);
      const gbrt_result = await predictRepository.getGBRTPredict(real_arrival_km, arrival_time, speed);

      const { process_time: svm_time } = svm_result;
      const { process_time: gbrt_time } = gbrt_result;

      const result = {
        process_time: svm_time + gbrt_time
      };

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

export default new predictService();
