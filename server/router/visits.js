const router = require('express').Router();

const {
  getVisits, getUserVisits, addVisit, updateVisit, deleteVisit,
} = require('../controller');
const {
  visitPermission,
} = require('../middleware/permission');

router.get('/user/visits', getUserVisits);
router.use(visitPermission);
router.get('/visits', getVisits);
router.post('/visits', addVisit);
router.patch('/visits/:id', updateVisit);
router.delete('/visits/:id', deleteVisit);

module.exports = router;
