import dbWrapper from '../../wrappers/dbWrapper';
import _ from 'lodash';

class dropdownRepository {
  getDay = async () => {
    try {
      const sql = `
      SELECT
       *
      FROM "incident"."day" 
      ORDER BY id
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  };

  getTime = async () => {
    try {
      const sql = `
      SELECT
       *
      FROM "incident"."time" 
      ORDER BY id
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  };

  getIncidentType = async () => {
    try {
      const sql = `
      SELECT
       *
      FROM "incident"."incident_type" 
      ORDER BY id
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  };

  getIncidentTypeNote = async () => {
    try {
      const sql = `
      SELECT
       *
      FROM "incident"."incident_type_note" 
      ORDER BY id
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  };

  getLanenu = async () => {
    try {
      const sql = `
      SELECT
       *
      FROM "incident"."lanenu" 
      ORDER BY id
      `;

      return await dbWrapper.queryResult(sql, null);
    } catch (err) {
      return err.message;
    }
  };
}

export default new dropdownRepository();
