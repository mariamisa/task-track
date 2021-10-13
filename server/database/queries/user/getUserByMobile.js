const connection = require('../../config/connection');

const getUserByMobile = ({ mobile }) => {
  const sql = {
    text: 'SELECT * FROM users WHERE mobile= $1',
    values: [mobile],
  };
  return connection.query(sql);
};

module.exports = getUserByMobile;
