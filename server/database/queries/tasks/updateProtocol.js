const connection = require('../../config/connection');

const updateProtocol = ({ urls, id }) => {
  const sql = {
    text: 'UPDATE tasks SET protocol=COALESCE($1,protocol) WHERE id=$2',
    values: [urls, id],
  };
  return connection.query(sql);
};
module.exports = updateProtocol;
