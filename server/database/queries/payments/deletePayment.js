const connection = require('../../config/connection');

const deletePayment = (id) => {
  const sql = {
    text: 'DELETE FROM payments WHERE id=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deletePayment;
