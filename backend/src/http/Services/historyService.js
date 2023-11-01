import historyRepository from '../repositories/historyRepository';
import moment from 'moment';
import _ from 'lodash';

class historyService {
  getHistory = async (start_time, end_time, highway) => {
    try {
      const result = await historyRepository.getHistory(start_time, end_time, highway);

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

  getSpecialIncident = async () => {
    try {
      const result = await historyRepository.getSpecialIncident();

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

export default new historyService();
