/*
1. We can use the # symbol to make field private to the class. i.e. It can not be accessed outside the class.
2. We can use getters and setters to read and modify the values of these private fields.
3. Using setters we can implement some guard logic to the fields
4. Static fields and methods are only accessible for class. They are created once and objects of the class won't have a copy of them.
*/

class Person{
    #age;
    static organism = 'Homo Sapiens';
    firstName;
    lastName;
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set age(age){
        if(age>0 && age < 99){
            this.#age = age;
        }else{
            console.log('Invalid age');
        }
    }
}

var person = new Person('Sreejith' , 'Sathyan');
person.age = 120;
console.log(person.organism); // undefined
console.log(Person.organism); // Homo Sapiens
