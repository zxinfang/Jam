import _ from 'lodash';
import pool from './../Services/dbService';

class dbWrapper {
  queryResult = async (sql, value) => {
    try {
      return await new Promise((resolve) => {
        pool.connect()
          .then((client) => {
            client
              .query(sql, value)
              .then((data) => {
                client.release();
                resolve(data.rows);
              })
              .catch((error) => {
                client.release();
                console.log(error.message);
                resolve(false);
              });
          })
          .catch((error) => {
            console.log(error.message);
            resolve(false);
          });
      }).catch((error) => {
        console.log(error.message);
        return false;
      });
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
  query = (sql, value) => {
    try {
      return new Promise((resolve) => {
        pool.connect()
          .then((client) => {
            client
              .query(sql, value)
              .then((data) => {
                client.release();
                resolve(true);
              })
              .catch((error) => {
                client.release();
                console.log(error.message);
                resolve(false);
              });
          })
          .catch((error) => {
            console.log(error.message);
            return false;
          });
      }).catch((error) => {
        console.log(error.message);
        return false;
      });
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
}

export default new dbWrapper();