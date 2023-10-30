import dropdownRepository from '../repositories/dropdownRepository';
import moment from 'moment';
import _ from 'lodash';

class dropdownService {
  getDay = async () => {
    try {
      const result = await dropdownRepository.getDay();

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

  getTime = async () => {
    try {
      const result = await dropdownRepository.getTime();

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

  getIncidentType = async () => {
    try {
      const result = await dropdownRepository.getIncidentType();

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

  getIncidentTypeNote = async () => {
    try {
      const result = await dropdownRepository.getIncidentTypeNote();

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

  getLanenu = async () => {
    try {
      const result = await dropdownRepository.getLanenu();

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

export default new dropdownService();
