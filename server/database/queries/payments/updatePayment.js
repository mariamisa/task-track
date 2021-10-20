const connection = require('../../config/connection');

const updatePayment = ({
  amount, attachments, month, id,
}) => {
  const sql = {
    text: 'UPDATE payments SET amount = COALESCE($1,amount),attachments = COALESCE($2,attachments),month= COALESCE($3,month) WHERE id=$4;',
    values: [amount, attachments, month, id],
  };
  return connection.query(sql);
};

module.exports = updatePayment;
