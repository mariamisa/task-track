const createNewUser = require('./createNewUser');
const getUserByMobile = require('./getUserByMobile');
const getUserById = require('./getUserById');
const updateUserPermission = require('./updateUserPermission');
const updateTaskPermission = require('./updateTaskPermission');
const updateVisitPermission = require('./updateVisitPermission');
const updateSittingPermission = require('./updateSittingPermission');
const updatePaymentPermission = require('./updateSittingPermission');

const getUserPermission = require('./getUserPermission');

module.exports = {
  createNewUser,
  getUserByMobile,
  getUserById,
  updateUserPermission,
  getUserPermission,
  updateTaskPermission,
  updateVisitPermission,
  updateSittingPermission,
  updatePaymentPermission,
};
