const connection = require('../../config/connection');

const updatePayment = ({
  amount, month, id,
}) => {
  const sql = {
    text: 'UPDATE payments SET amount = COALESCE($1,amount),month= COALESCE($2,month) WHERE id=$3;',
    values: [amount, month, id],
  };
  return connection.query(sql);
};

module.exports = updatePayment;
