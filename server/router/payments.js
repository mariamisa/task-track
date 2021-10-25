const router = require('express').Router();

const {
  getPayments, addPayment, updatePayment, deletePayment, updateAttachmentsPayment,
} = require('../controller');
const {
  paymentPermission,
} = require('../middleware/permission');

router.get('/payments', paymentPermission, getPayments);
router.post('/payments/:userId', paymentPermission, addPayment);
router.patch('/payments/:id', paymentPermission, updatePayment);
router.patch('/payments/:id/attachments', paymentPermission, updateAttachmentsPayment);
router.delete('/payments/:id', paymentPermission, deletePayment);

module.exports = router;
