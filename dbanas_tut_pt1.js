/**
 * Created by markellis on 5/7/17.
 */
// Minimum and Max Values
document.write(Number.MAX_VALUE+"<br />");
document.write(Number.MIN_VALUE+"<br />" +"<br />");

// Common escaped characters
var samp_str = "Here are some escaped characters \" \' \\ \t \n";
document.write(samp_str + "<br />" + "<br />");

//Adding strings together
var first_str = "First String ";
var second_str = "Second String";
var combined = first_str + second_str;
document.write(combined + "<br />");

//Print a substring
document.write("Substring " + combined.substring(6,12) + "<br />");

//Where is the last character
document.write("Last character " + combined.charAt(combined.length-1) + "<br />");

//Where is the letter t
document.write("Index of T is: " + combined.indexOf('t') + "<br />");

//Differences between numbers and strings
var str_var = "5";
var num_var = 10;

var total = str_var + num_var;
var mult_total = num_var * str_var; //Here string will be understood as number

document.write("5 + 10 = " + total + "<br />");
document.write("5 * 10 = " + mult_total + "<br />");

total = num_var + Number(str_var); // Number converts string values
document.write("5 + 10 = " + total + "<br />");

var num_var2 = String(num_var); //String converts number to string
document.write(num_var + num_var  + "<br />");
document.write(num_var + num_var2  + "<br />");

