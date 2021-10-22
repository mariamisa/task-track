const connection = require('../../config/connection');

const updateSetting = ({
  kmCost, notificationToSend, userID,
}) => {
  const sql = {
    text: 'UPDATE settings SET km_cost = COALESCE($1,km_cost),notification_to_send = COALESCE($2,notification_to_send) WHERE user_id=$3;',
    values: [kmCost, notificationToSend, userID],
  };
  return connection.query(sql);
};

module.exports = updateSetting;
