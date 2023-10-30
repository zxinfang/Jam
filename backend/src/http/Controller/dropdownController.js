import dropdownService from '../Services/dropdownService';
import checkedValidationUtil from '../../utils/checkedValidationUtil';
import formatResponseUtil from '../../utils/formatResponseUtil';

class dropdownController {
  getDay = async (req, res) => {
    const response = await dropdownService.getDay();

    return formatResponseUtil.formatResponse(res, response);
  };

  getTime = async (req, res) => {
    const response = await dropdownService.getTime();

    return formatResponseUtil.formatResponse(res, response);
  };

  getIncidentType = async (req, res) => {
    const response = await dropdownService.getIncidentType();

    return formatResponseUtil.formatResponse(res, response);
  };

  getIncidentTypeNote = async (req, res) => {
    const response = await dropdownService.getIncidentTypeNote();

    return formatResponseUtil.formatResponse(res, response);
  };

  getLanenu = async (req, res) => {
    const response = await dropdownService.getLanenu();

    return formatResponseUtil.formatResponse(res, response);
  };
}

export default new dropdownController();
