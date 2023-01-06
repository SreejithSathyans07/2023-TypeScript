/*
1. Inheritance can be achieved using extends keyword
2. The constructor of the base class is also inherited
3. If we have multiple constructor functions, then we should use invoke the parent constructor from the child constructor using the super keyword.
*/
class Employee {
    firstName;
    lastName;
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }
}

const employee = new Employee('John', 'Johnny');
console.log(employee)

class PermanentEmployee extends Employee{
    baseSalary = 0;
    constructor(firstName, lastName, baseSalary){
        super(firstName, lastName);
        this.baseSalary = baseSalary;
    }
}

const permanentEmployee = new PermanentEmployee('Wayne','Rooney', 1000);
console.log(permanentEmployee); 