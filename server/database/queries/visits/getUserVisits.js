const connection = require('../../config/connection');

const getUserVisits = (id) => {
  const sql = {
    text: 'SELECT * FROM visits WHERE user_id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getUserVisits;
