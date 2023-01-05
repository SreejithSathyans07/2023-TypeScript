"use strict";
/*
-> When we are accessing an HTML item from the DOM using the getElementById method, it can have two possible output types (union type).
1. HTMLElement
2. null (if the element is not found in the DOM)

-> So we are should put optional chaining operator (?) while we use refer the element further in our code.
-> We can use another operator called non null assertion operator to avoid this. This operator guaranties type script that the value will not be null.
*/
const button = document.getElementById("btn"); //type is HTMLElement | null
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    alert("Button clicked");
});
const button2 = document.getElementById("btn"); //type is HTMLElement
button2.addEventListener("click", () => {
    alert("Button clicked");
});
