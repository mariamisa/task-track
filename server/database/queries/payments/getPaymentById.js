const connection = require('../../config/connection');

const getPaymentById = (id) => {
  const sql = {
    text: 'SELECT payments.amount,payments.attachments,payments.month, users.username FROM payments INNER JOIN users ON payments.user_id= users.id WHERE payments.id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getPaymentById;
