const connection = require('../../config/connection');

const getUserPermission = (query) => {
  const sql = {
    text: query,
  };
  return connection.query(sql);
};

module.exports = getUserPermission;
