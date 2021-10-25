const connection = require('../../config/connection');

const addNewPayment = ({
  userId, amount, attachments = '', month,
}) => {
  const sql = {
    text: 'INSERT INTO payments (user_id,amount, attachments, month) VALUES ($1, $2, $3,$4)',
    values: [userId, amount, attachments, month,
    ],
  };
  return connection.query(sql);
};

module.exports = addNewPayment;
