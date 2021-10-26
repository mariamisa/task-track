const connection = require('../../config/connection');

const addNewVisit = ({
  userId, date = new Date().toISOString(), fromCountry, toCountry, location, kmNumber = 10, status = 'pending',
}) => {
  const sql = {
    text: 'INSERT INTO visits (user_id, date, from_country, to_country,location,km_number,status) VALUES ($1, $2, $3,$4,$5,$6,$7)',
    values: [userId, date, fromCountry, toCountry, location, kmNumber, status],
  };
  return connection.query(sql);
};

module.exports = addNewVisit;
