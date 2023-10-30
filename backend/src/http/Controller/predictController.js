import predictService from '../Services/predictService';
import checkedValidationUtil from '../../utils/checkedValidationUtil';
import formatResponseUtil from '../../utils/formatResponseUtil';

class predictController {
  getIncident = async (req, res) => {
    const response = await predictService.getIncident();

    return formatResponseUtil.formatResponse(res, response);
  };

  postIncident = async (req, res) => {
    const bodeKey = ['lanenu', 'incident_type', 'incident_type_note', 'machine', 'special_incident', 'weekend', 'time_state', 'real_arrival_km', 'arrival_time', 'speed'];

    if (!checkedValidationUtil.keyChecked(bodeKey, req.body))
      return formatResponseUtil.keyErrorResponse(res, '欄位格式有誤，請檢查');

    const { lanenu, incident_type, incident_type_note, machine, special_incident, weekend, time_state, real_arrival_km, arrival_time, speed } = req.body;
    const response = await predictService.postIncident(lanenu, incident_type, incident_type_note, machine, special_incident, weekend, time_state, real_arrival_km, arrival_time, speed);

    return formatResponseUtil.formatResponse(res, response);
  }
}

export default new predictController();
