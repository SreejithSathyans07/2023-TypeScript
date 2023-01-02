// We can add additional properties to an interface as we want during the program.
// Let's suppose that the below interface is coming from some other files or package.
interface Computer{
    manufacture: string;
    model: string;
}

//We can extend it by simply adding new properties to it

interface Computer{
    ramCapacity: number;
    processor: string;
    getWarrantyPeriod(): number
}

//Now we should provide all the properties to the object in order to make it a valid computer object.

const lenovo: Computer = {
    manufacture: "Lenovo",
    model: "L340",
    processor: "i5",
    ramCapacity: 8,
    getWarrantyPeriod(){
        return 2;
    }
}
//---------------------------------------------------------------------------------------------------

//The above extension is not possible in case of types

type Computers = {
    manufacture: string;
    model: string;
}

// type Computers = { 
    //Invalid operation 
// }

//--------------------------OTHER MAJOR DIFFERENCES-------------------------------------------------
// 1. Interfaces can only describe an object while types can have literal values as well.

type shape = 'Circle'|'Square';
const foodShape: shape = 'Circle'

//2. We can not add additional properties to a type once it is declared.
//3. Both of them can be extended

type Type1 = {
    property1: number;
}
type Type2 = {
    property2: number;
}

type Type3 = Type1 & Type2;

const typeExample : Type3 = {
    property1: 1,
    property2: 2
}