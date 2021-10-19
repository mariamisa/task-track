const connection = require('../../config/connection');

const deleteVisit = ({ visitId, userId }) => {
  const sql = {
    text: 'DELETE FROM visits WHERE id=$1 AND user_id=$2 RETURNING user_id ',
    values: [visitId, userId],
  };
  return connection.query(sql);
};

module.exports = deleteVisit;
