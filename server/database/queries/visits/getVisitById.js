const connection = require('../../config/connection');

const getVisitById = (id) => {
  const sql = {
    text: 'SELECT * FROM visits WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getVisitById;
