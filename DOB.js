// User's date of birth (input as a string in 'YYYY-MM-DD' format)
var dobString = "1990-05-15";

// Parse the date of birth string into a Date object
var dob = new Date(dobString);

// Get the current date
var currentDate = new Date();

// Calculate the time difference in milliseconds between the current date and date of birth
var timeDifference = currentDate - dob;

// Convert the time difference to years
var age = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));

// Display the age
console.log("Age: " + age + " years");
