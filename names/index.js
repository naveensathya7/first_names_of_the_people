const lists = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index.js");
const getPeopleInCity = (lists) => {
  return getFirstNames(lists);
};
module.exports = getPeopleInCity;
