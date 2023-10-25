import exampleService from '../Services/exampleService';
import checkedValidationUtil from '../../utils/checkedValidationUtil';
import formatResponseUtil from '../../utils/formatResponseUtil';

class exampleController {
  Get = async (req, res) => {
    const response = await exampleService.Get();

    return formatResponseUtil.formatResponse(res, response);
  };

  GetQuery = async (req, res) => {
    const queryKey = ['num', 'str'];

    if (!checkedValidationUtil.keyChecked(queryKey, req.query))
      return formatResponseUtil.keyErrorResponse(res, '欄位格式有誤，請檢查');

    const { num, str } = req.query;
    const response = await exampleService.GetQuery(num, str);

    return formatResponseUtil.formatResponse(res, response);
  };
}

export default new exampleController();
