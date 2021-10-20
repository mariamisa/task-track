const connection = require('../../config/connection');

const getAllPayments = () => {
  const sql = {
    text: 'SELECT * FROM payments',
  };
  return connection.query(sql);
};

module.exports = getAllPayments;
