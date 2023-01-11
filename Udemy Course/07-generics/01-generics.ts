/*
1. Generics can be used to create reusable code that will work with multiple data types
2. Generic functions are very helpful in code reusability
*/

class Student {
    mark1: number;
    mark2: number;
    mark3: number;
    totalMark: number;
    constructor(m1: number, m2:number, m3: number){
        this.mark1 = m1;
        this.mark2 = m2;
        this.mark3 = m3;
    }
}

class RegularStudent extends Student{

}

class PartTimeStudent extends Student{

}

const regStud = new RegularStudent(12, 15, 16);
const partStud = new PartTimeStudent(11, 25, 9);

function getStudent<T>(student: T): T{
    return student;
}

function calculateTotalMarks<T extends Student>(student: T): number{
    return student.mark1 + student.mark2 + student.mark3;
}

console.log(getStudent<RegularStudent>(regStud));
console.log(getStudent<PartTimeStudent>(partStud));
console.log(calculateTotalMarks<PartTimeStudent>(partStud));
