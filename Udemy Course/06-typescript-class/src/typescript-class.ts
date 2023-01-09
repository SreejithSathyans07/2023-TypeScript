/*
1. TypeScript classes are similar to C# classes.
2. readonly field values can not be modified outside the class
3. public fields are accessible anywhere in the program.
4. Unlike JavaScript, the fields can not be created directly from the constructor. Fields should be initialized first and then we can assign values inside the constructor.
5. For private fields, we can still use #<field-name> in TS target versions above es5. But using private is the best practice.
*/

class Person{
    firstName: string;
    lastName: string;
    private score = 0;
    private readonly numLives = 3;
    constructor(first: string, last: string){
        this.firstName = first;
        this.lastName = last;
    }
    private calculateScore(){
        this.score += 1;
    }
}

const person = new Person('Johnny', 'Depp');
// person.score = 1; // Accessible only with in the class 
// person.calculateScore() // Accessible only with in the class 

//------------------------------------------------------------------------------------------------------

// There is a short hand method to initialize the class fields
class Student{
    constructor(public firstName: string, public lastName: string, private address: string){}
}

const student = new Student('Sreejith', 'Sathyan', 'Kottekkad House');
console.log(student);

//------------------------------------------------------------------------------------------------------

// The protected fields are accessible within the class as well as in the child class.

class Teacher {
    protected experience: number;
    public fullName : string;
    constructor(exp: number, name: string){
        this.experience = exp;
        this.fullName = name;
    }
}

class Principal extends Teacher{
    private printExperience(){
        console.log(this.experience) //Error - if experience is private
    }
}

//------------------------------------------------------------------------------------------------------
/*
Abstract classes
1. Abstract classes are kind of similar to interfaces. They provide a structure for a class.
2. The key difference is that Interfaces can not have any method definition while abstract classes can have method normal methods with definitions inside them.
3. Abstract methods can not have a definition. They can just be declared.
*/

abstract class Vehicle{
    private chaseNumber: string = '';
    abstract runPollutionTest(): boolean;
    printSalesLocations(){
        console.log('India', 'Pakistan')
    }
}

class Toyota extends Vehicle{
    runPollutionTest(): boolean {
        return true;
    }
}

const toyotaIndia = new Toyota();
console.log(toyotaIndia.runPollutionTest());
console.log(toyotaIndia.printSalesLocations());