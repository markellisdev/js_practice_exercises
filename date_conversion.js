// From here https://www.testdome.com/questions/javascript/date/8521?testId=14&testDifficulty=Easy

// <------------------ INSTRUCTIONS ---------------------->
// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
//
// Must pass the following test cases
// Example case: Wrong answer
// Two-digit month and day: Wrong answer
// One-digit day: Wrong answer
// One-digit month: Wrong answer

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    // Solution - cut the month and day out, then add all back together
    var howLong = userDate.length;
    var year = userDate.slice (howLong - 4);
    var month = userDate.substring(0, userDate.indexOf("/"));
    var day = userDate.substring((userDate.indexOf("/") + 1), userDate.lastIndexOf("/"));

    //If either month or day are shorter than two characters, convert by adding a leading 0
    if (month.length < 2) {
        month = 0 + month;
    }
    if (day.length < 2) {
        day = 0 + day;
    }
    console.log("The year is", year);
    console.log("The month is", month);
    console.log("The day is", day);

    return API_suitable = year + month + day;
}

console.log(formatDate("12/31/2014"));
console.log(formatDate("1/1/2016"));