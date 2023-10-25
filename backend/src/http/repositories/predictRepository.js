import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';
import axios from 'axios';

class predictRepository {
  getSVMPredict = async (lanenu, incident_type, incident_type_note, machine, special_incident, weekend, time_state) => {
    try {
      const inputData = {
        lanenu: lanenu,
        incident_type: incident_type,
        incident_type_note: incident_type_note,
        machine: machine,
        special_incident: special_incident,
        weekend: weekend,
        time_state: time_state
      }

      const { data: result } = await axios.post('http://localhost:5000/predict/svm', inputData);
      return result;
    } catch (err) {
      return err.message;
    }
  };

  getGBRTPredict = async (real_arrival_km, arrival_time, speed) => {
    try {
      let inputData = {
        real_arrival_km: real_arrival_km,
        arrival_time: arrival_time,
      };
      console.log(inputData)
      const { data } = await axios.post('http://localhost:5000/kmeans/gbrt', inputData);

      const predict_data = {
        real_arrival_km: real_arrival_km,
        speed: speed,
        type: data.type
      }
      const { data: result } = await axios.post('http://localhost:5000/predict/gbrt', predict_data);

      return result;
    } catch (err) {
      return err.message;
    }
  }


}

export default new predictRepository();
