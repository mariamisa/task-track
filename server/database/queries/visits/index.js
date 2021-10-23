const getAllVisits = require('./getAllVisits');
const getUserVisits = require('./getUserVisits');
const addNewVisit = require('./addVisit');
const updateVisitQuery = require('./updateVisit');
const deleteVisit = require('./deleteVisit');
const getVisitById = require('./getVisitById');

module.exports = {
  getAllVisits, getUserVisits, addNewVisit, updateVisitQuery, deleteVisit, getVisitById,
};
