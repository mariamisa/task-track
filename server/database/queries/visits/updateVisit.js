const connection = require('../../config/connection');

const updateVisit = ({
  date, fromCountry, toCountry, location, kmNumber, status, userId, visitId,
}) => {
  const sql = {
    text: 'UPDATE visits SET date = COALESCE($1,date),from_country= COALESCE($2,from_country),to_country= COALESCE($3,to_country),location= COALESCE($4,location),km_number= COALESCE($5,km_number),status= COALESCE($6,status) WHERE user_id=$7 AND id=$8',
    values: [date, fromCountry, toCountry, location, kmNumber, status, userId, visitId,
    ],
  };
  return connection.query(sql);
};

module.exports = updateVisit;
