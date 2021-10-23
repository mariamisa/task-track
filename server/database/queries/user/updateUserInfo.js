const connection = require('../../config/connection');

const updateUserInfo = ({ username, job_title: jobTitle, id }) => {
  const sql = {
    text: 'UPDATE users SET username=COALESCE($1,username),job_title=COALESCE($2,job_title) WHERE id=$3',
    values: [username, jobTitle, id],
  };
  return connection.query(sql);
};
module.exports = updateUserInfo;
