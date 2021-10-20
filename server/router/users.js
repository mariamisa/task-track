const router = require('express').Router();

const { isAuthController, updatePermissionController } = require('../controller');
const {
  userPermission,
} = require('../middleware/permission');

router.get('/is-auth', isAuthController);
router.patch('/users/:id/permission/:permissionType', userPermission, updatePermissionController);

module.exports = router;
