/*
-> When we are accessing an HTML item from the DOM using the getElementById method, it can have two possible output types (union type).
1. HTMLElement
2. null (if the element is not found in the DOM)

-> So we are should put optional chaining operator (?) while we use refer the element further in our code.
-> We can use another operator called 'non null assertion operator' to avoid this. This operator guaranties type script that the value will not be null. 
*/

const button = document.getElementById("btn"); //type is HTMLElement | null
button?.addEventListener("click", () => {
  alert("Button clicked");
});

const button2 = document.getElementById("btn")!; //type is HTMLElement
button2.addEventListener("click", () => {
  alert("Button clicked");
});

/*
Type assertions
---------------
1. If we are reading one input box from the DOM, TS can understand it as only an HTMLElement. In order to access the properties of an input element, we can assert it as a HTMLInputElement type.
2. Assertion basically means, I know the value type more than you TypeScript. :) 
*/

const inputBox = document.getElementById('inputBox') as HTMLInputElement;
inputBox.value = 'Setting some value using TypeScript';

