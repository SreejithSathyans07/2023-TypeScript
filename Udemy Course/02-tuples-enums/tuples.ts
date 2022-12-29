//Tuples are arrays with fixed length and ordered with specific types
//Tuples can be used to specify the types and number of values in an array.
//If one array is expecting an RGB array, we can make use of tuples to make it reliable and correct.
//The array must be initialized along with the declaration

const rgbColor: [number, number, number] = [0, 0, 0]

//Problems with tuples
//We will be able to push(or pop) items to a tuple after its creation. Which is very weird. It is a flow from TypeScript.

type httpResponse = [number, string];
let goodResponse: httpResponse = [200, "OK"];
goodResponse.push("This is push operation is wrong");