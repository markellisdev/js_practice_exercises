"use-strict";
// From here https://www.testdome.com/questions/javascript/date/8521?testId=14&testDifficulty=Easy

// <------------------ INSTRUCTIONS ---------------------->
// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var howLong = userDate.length;
  var year = userDate.slice (howLong - 4);
  // cut the month and day out, then add all back together
  debug("The year is", year);
}

debug(formatDate("12/31/2014"));