import analyzeService from '../Services/analyzeService';
import checkedValidationUtil from '../../utils/checkedValidationUtil';
import formatResponseUtil from '../../utils/formatResponseUtil';

class analyzeController {
  getHighwayAnalyze = async (req, res) => {
    const bodeKey = ['start_time', 'end_time', 'highway'];

    if (!checkedValidationUtil.keyChecked(bodeKey, req.body))
      return formatResponseUtil.keyErrorResponse(res, '欄位格式有誤，請檢查');

    const { start_time, end_time, highway } = req.body;
    const response = await analyzeService.getHighwayAnalyze(start_time, end_time, highway);

    return formatResponseUtil.formatResponse(res, response);
  };

  getIncidentAnalyze = async (req, res) => {
    const bodeKey = ['start_time', 'end_time', 'highway'];

    if (!checkedValidationUtil.keyChecked(bodeKey, req.body))
      return formatResponseUtil.keyErrorResponse(res, '欄位格式有誤，請檢查');

    const { start_time, end_time, highway } = req.body;
    const response = await analyzeService.getIncidentAnalyze(start_time, end_time, highway);

    return formatResponseUtil.formatResponse(res, response);
  };
}

export default new analyzeController();
