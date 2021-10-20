const router = require('express').Router();

const {
  getVisits, getUserVisits, addVisit, updateVisit, deleteVisit,
} = require('../controller');
const {
  visitPermission,
} = require('../middleware/permission');

router.get('/user/visits', getUserVisits);

router.get('/visits', visitPermission, getVisits);
router.post('/visits', visitPermission, addVisit);
router.patch('/visits/:id', visitPermission, updateVisit);
router.delete('/visits/:id', visitPermission, deleteVisit);

module.exports = router;
