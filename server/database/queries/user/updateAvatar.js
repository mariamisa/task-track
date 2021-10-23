const connection = require('../../config/connection');

const updateAvatar = ({ url, id }) => {
  const sql = {
    text: 'UPDATE users SET avatar=$1 WHERE id=$2',
    values: [url, id],
  };
  return connection.query(sql);
};
module.exports = updateAvatar;
