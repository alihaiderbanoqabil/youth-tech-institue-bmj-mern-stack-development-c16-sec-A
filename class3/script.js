console.log("modules");


// export function add(num1, num2) {
//     return num1 + num2;
//     document.write(num1 + num2);
//     document.writeln(num1 + num2);

// }
// export const name = "Jesse";
// export const age = 40;

// OR 

// const name = "Jesse";
// const age = 40;

// export { name, age };

// function add(num1, num2) {
//     return num1 + num2;
// }
// // export { name, age, add };

// export default add;


// const message = () => {
//     const name = "Jesse";
//     const age = 40;
//     return name + ' is ' + age + 'years old.';
// };

// export default message;
// add(1, 3)
// add(1, 10)
// console.log(add(10, 30));

// document.write(add(40, 70))


import { name as _name, age } from "./person.js";

let text = "My name is " + _name + ", I am " + age + ".";

document.getElementById("demo").innerHTML = text;

// import message from "./message.js";

// document.getElementById("demo").innerHTML = message();