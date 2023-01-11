/*
1. Generics can be used to create reusable code that will work with multiple data types
2. Generic functions are very helpful in code reusability
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(m1, m2, m3) {
        this.mark1 = m1;
        this.mark2 = m2;
        this.mark3 = m3;
    }
    return Student;
}());
var RegularStudent = /** @class */ (function (_super) {
    __extends(RegularStudent, _super);
    function RegularStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegularStudent;
}(Student));
var PartTimeStudent = /** @class */ (function (_super) {
    __extends(PartTimeStudent, _super);
    function PartTimeStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PartTimeStudent;
}(Student));
var regStud = new RegularStudent(12, 15, 16);
var partStud = new PartTimeStudent(11, 25, 9);
function getStudent(student) {
    return student;
}
function calculateTotalMarks(student) {
    return student.mark1 + student.mark2 + student.mark3;
}
console.log(getStudent(regStud));
console.log(getStudent(partStud));
console.log(calculateTotalMarks(partStud));
