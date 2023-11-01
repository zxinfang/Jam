import predictService from '../Services/predictService';
import checkedValidationUtil from '../../utils/checkedValidationUtil';
import formatResponseUtil from '../../utils/formatResponseUtil';

class predictController {
  getIncident = async (req, res) => {
    const response = await predictService.getIncident();

    return formatResponseUtil.formatResponse(res, response);
  };

  postIncident = async (req, res) => {
    const bodeKey = ['incident_type', 'incident_type_note', 'lanenu', 'special_incident', 'work_section',
      'highway', 'direction', 'section', 'keep_dispatch', 'status', 'remark', 'weekend', 'time_state',
      'real_arrival_km', 'arrival_time', 'speed', 'machine',
    ];

    if (!checkedValidationUtil.keyChecked(bodeKey, req.body))
      return formatResponseUtil.keyErrorResponse(res, '欄位格式有誤，請檢查');

    const { incident_type, incident_type_note, lanenu, special_incident, work_section,
      highway, direction, section, keep_dispatch, status, remark, weekend, time_state,
      real_arrival_km, arrival_time, speed, machine } = req.body;

    const response = await predictService.postIncident(incident_type, incident_type_note, lanenu, special_incident, work_section,
      highway, direction, section, keep_dispatch, status, remark, weekend, time_state,
      real_arrival_km, arrival_time, speed, machine);

    return formatResponseUtil.formatResponse(res, response);
  };

  updateIncident = async (req, res) => {
    const bodeKey = ['mission_id', 'status', 'remark', 'real_clean_time', 'real_respond_time'];

    if (!checkedValidationUtil.keyChecked(bodeKey, req.body))
      return formatResponseUtil.keyErrorResponse(res, '欄位格式有誤，請檢查');

    const { mission_id, status, remark, real_clean_time, real_respond_time } = req.body;

    const response = await predictService.updateIncident(mission_id, status, remark, real_clean_time, real_respond_time);

    return formatResponseUtil.formatResponse(res, response);
  };
}

export default new predictController();
