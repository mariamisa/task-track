const router = require('express').Router();

const {
  getVisits, getUserVisits, addVisit, updateVisit, deleteVisit,
} = require('../controller');
const {
  visitPermission,
} = require('../middleware/permission');

router.get('/user/visits', getUserVisits);
router.post('/visits', addVisit);
router.patch('/visits/:id', updateVisit);

router.get('/visits', visitPermission, getVisits);
router.delete('/visits/:id', visitPermission, deleteVisit);

module.exports = router;
