// We can extend multiple interfaces

interface iA{
    property1: number
}
interface iB{
    property2: number
}
interface iC extends iA, iB{
    property3: number
}

const c: iC = {
    property1: 1,
    property2: 2,
    property3: 3
}