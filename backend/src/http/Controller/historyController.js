import historyService from '../Services/historyService';
import checkedValidationUtil from '../../utils/checkedValidationUtil';
import formatResponseUtil from '../../utils/formatResponseUtil';

class historyController {
  getHistory = async (req, res) => {
    const bodeKey = ['start_time', 'end_time', 'highway'];

    if (!checkedValidationUtil.keyChecked(bodeKey, req.body))
      return formatResponseUtil.keyErrorResponse(res, '欄位格式有誤，請檢查');

    const { start_time, end_time, highway } = req.body;
    const response = await historyService.getHistory(start_time, end_time, highway);

    return formatResponseUtil.formatResponse(res, response);
  };
}

export default new historyController();
