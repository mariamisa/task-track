const connection = require('../../config/connection');

const updateAttach = ({ urls, id }) => {
  const sql = {
    text: 'UPDATE tasks SET attach=COALESCE($1,attach) WHERE id=$2',
    values: [urls, id],
  };
  return connection.query(sql);
};
module.exports = updateAttach;
