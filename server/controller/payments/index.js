const getPayments = require('./getPayments');
const addPayment = require('./addPayment');
const updatePayment = require('./updatePayment');
const deletePayment = require('./deletePayment');
const updateAttachmentsPayment = require('./updateAttachments');

module.exports = {
  getPayments, addPayment, updatePayment, deletePayment, updateAttachmentsPayment,
};
