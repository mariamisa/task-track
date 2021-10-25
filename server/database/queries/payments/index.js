const getAllPayment = require('./getAllPayment');
const addNewPayment = require('./addNewPayment');
const deletePaymentQuery = require('./deletePayment');
const updatePaymentQuery = require('./updatePayment');
const updateAttachmentsPaymentQ = require('./updatePaymentAttach');

module.exports = {
  getAllPayment,
  addNewPayment,
  deletePaymentQuery,
  updatePaymentQuery,
  updateAttachmentsPaymentQ,
};
