const router = require('express').Router();

const protectMiddleware = require('../middleware/auth/checkToken');
const publicRoutes = require('./publicRoutes');
const users = require('./users');
const tasks = require('./tasks');

// public endpoints
router.use(publicRoutes);
// protect endpoints
router.use(protectMiddleware);
// rest routes
router.use(users);
router.use(tasks);

module.exports = router;
