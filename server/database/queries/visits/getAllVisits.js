const connection = require('../../config/connection');

const getAllVisits = () => {
  const sql = {
    text: 'SELECT * FROM visits',
  };
  return connection.query(sql);
};

module.exports = getAllVisits;
