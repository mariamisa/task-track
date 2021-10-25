const connection = require('../../config/connection');

const updateAttach = ({ urls, id }) => {
  const sql = {
    text: 'UPDATE payments SET attachments=COALESCE($1,attachments) WHERE id=$2',
    values: [urls, id],
  };
  return connection.query(sql);
};
module.exports = updateAttach;
