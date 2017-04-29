/* Created by markellis on 4/28/17. */
// https://www.testdome.com/questions/javascript/ensure/8649?testId=14&testDifficulty=Easy
// Implement the ensure function so that it throws an error if called without arguments or an argument is undefined. Otherwise it should return the given value.

// This was a simple exercise to validate input
var error = "You did something wrong!"

function ensure(value) {
    if (value || typeof(value) !== 'undefined') {
        return value;
    }
    //I'm not sure why the following won't work, but the above does
    /* else if (typeof(value) === "undefined") {
        throw(error);
    } */
    else {
        throw(error);
    }
}

ensure();