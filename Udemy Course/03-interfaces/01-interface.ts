// We can use interfaces to describe the shape of an object.
// Interfaces are similar to type alias with a small syntax change.
// We can make properties of an interface optional by putting a ? along with the property name.
// We can make the property read only by which, the value can be provided for that property during the object creation time only.

interface Person{
    readonly id: number;
    firstName: string;
    age: number;
    lastName?: string;
}

const teacher: Person = {
    id: 101,
    firstName: "John",
    age: 27
}

// teacher.id = 102; // Invalid operation.

//We can specify methods inside an interface as well. It can be done in two different ways
interface Student{
    rollNumber: number,
    calculateMarks(): number, // declaring with a normal function syntax
    checkEligibility: () => boolean // declaring with an arrow function syntax
}