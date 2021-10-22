const connection = require('../../config/connection');

const deleteSetting = (id) => {
  const sql = {
    text: 'DELETE FROM settings WHERE user_id=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteSetting;
