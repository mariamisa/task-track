const connection = require('../../config/connection');

const addSetting = (id) => {
  const sql = {
    text: 'INSERT INTO settings (user_id) VALUES ($1)',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = addSetting;
