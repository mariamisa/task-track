const connection = require('../../config/connection');

const createNewUser = ({
  username,
  mobile,
  password,
  country,
  avatar,
  jobTitle,
}) => {
  const sql = {
    text: 'INSERT INTO users (username,mobile, password, country,avatar,job_title) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;',
    values: [username,
      mobile,
      password,
      country,
      avatar,
      jobTitle],
  };
  return connection.query(sql);
};

module.exports = createNewUser;
