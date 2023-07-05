var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0);
    var formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return firstLetter + ". " + formattedLastName;
};
console.log(printTeacher("John", "Doe"));
