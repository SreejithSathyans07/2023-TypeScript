// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = 1;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [];
stuff = [1, 2];
stuff = ["one", "two"];
var hslObj = {
    h: 10,
    s: 25,
    l: 20
};
var rgbObj = {
    r: 20,
    g: 30,
    b: 40
};
var arr = [];
arr.push(hslObj);
arr.push(rgbObj);
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(str) {
    if (typeof str === "string") {
        console.log("Hello " + str);
    }
    else {
        str.forEach(function (name) {
            console.log("Hello " + name);
        });
    }
}
greet(['Sreejith', 'Sathyan']);
