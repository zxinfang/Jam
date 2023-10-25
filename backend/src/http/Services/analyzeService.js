import analyzeRepository from '../repositories/analyzeRepository';
import moment from 'moment';
import _ from 'lodash';

class analyzeService {
  getHighwayAnalyze = async (start_time, end_time, highway) => {
    try {
      const result = await analyzeRepository.getHighwayAnalyze(start_time, end_time, highway);

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

  getIncidentAnalyze = async (start_time, end_time, highway) => {
    try {
      const result = await analyzeRepository.getIncidentAnalyze(start_time, end_time, highway);

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

export default new analyzeService();
