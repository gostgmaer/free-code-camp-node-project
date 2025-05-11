const moment = require('moment');

function isValidDateStrict(dateString) {
   if (!dateString) {
    dateString = Date.now();
  }
  if (typeof dateString === 'string' && /^\d+$/.test(dateString)) {
    dateString = Number(dateString);
  }
  return moment(new Date(dateString));
}


module.exports = {
  isValidDateStrict,
};
