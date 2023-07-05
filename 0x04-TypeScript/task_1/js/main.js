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
console.log(printTeacher('John', 'Doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('Alice', 'Smith');
console.log(student.displayName()); // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working
