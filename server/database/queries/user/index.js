const createNewUser = require('./createNewUser');
const getUserByMobile = require('./getUserByMobile');
const getUserById = require('./getUserById');
const updateUserPermission = require('./updateUserPermission');
const updateTaskPermission = require('./updateTaskPermission');
const updateVisitPermission = require('./updateVisitPermission');
const updateSettingPermission = require('./updateSettingPermission');
const updatePaymentPermission = require('./updatePaymentPermission');
const updateCommentPermission = require('./updateCommentPermission');
const getUserPermission = require('./getUserPermission');
const updateAvatarImage = require('./updateAvatar');
const updateUserInfo = require('./updateUserInfo');

module.exports = {
  createNewUser,
  getUserByMobile,
  getUserById,
  updateUserPermission,
  getUserPermission,
  updateTaskPermission,
  updateVisitPermission,
  updateSettingPermission,
  updatePaymentPermission,
  updateAvatarImage,
  updateUserInfo,
  updateCommentPermission,
};
