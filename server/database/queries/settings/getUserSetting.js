const connection = require('../../config/connection');

const getUserSetting = (userId) => {
  const sql = {
    text: 'SELECT * FROM settings WHERE user_id=$1',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserSetting;
