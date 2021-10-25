const connection = require('../../config/connection');

const getUsers = () => {
  const sql = {
    text: 'SELECT username,mobile,country,user_permission,task_permission,visit_permission,payment_permission,setting_permission,comment_permission,attach,avatar,job_title FROM users',
  };
  return connection.query(sql);
};
module.exports = getUsers;
