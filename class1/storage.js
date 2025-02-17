console.log("Hello World");
console.log(window);



localStorage.setItem("name", "ali haider")
localStorage.setItem("age", 45)
localStorage.setItem("isMale", true)

const hobbies = ["swimming", "eating", "playing"]


// const studentsInformation = [
//     studentInformation, 
//     studentInformation, 
//     studentInformation
// ];

const studentInformation = {
    name: "ali",
    age: 34,
    // hobbies: hobbies, // below one is same as this
    hobbies,
}


const studentsInformation = [
    studentInformation, 
    studentInformation, 
    studentInformation
];


console.log(studentInformation, typeof studentInformation);

const jsonObject = JSON.stringify(studentInformation, null, 4)
// console.log(jsonObject, typeof jsonObject);

const nativeObject = JSON.parse(jsonObject)
// console.log(nativeObject, typeof nativeObject);

localStorage.setItem("hobbies", hobbies)
localStorage.setItem("studentInformation", studentInformation)
localStorage.setItem("studentInformation", jsonObject)
localStorage.setItem("studentsInformation", studentsInformation)
localStorage.setItem("studentsInformation", JSON.stringify(studentsInformation))
const age = localStorage.getItem("age")
// console.log(typeof localStorage.getItem("hobbies"));
// console.log(typeof localStorage.getItem("name"));
// console.log(typeof age, age , +age +40);
// console.log(typeof localStorage.getItem("isMale"));

const jsonStudentsInformation = localStorage.getItem("studentsInformation");
console.log(jsonStudentsInformation);
const nativeStudentsInformation = JSON.parse(jsonStudentsInformation);
console.log(nativeStudentsInformation);

nativeStudentsInformation.map((nativeStudentInformation, index) => console.log(nativeStudentInformation.age)
)

console.log(localStorage.getItem("fullName"));

localStorage.removeItem("name")
localStorage.removeItem("age")
console.log(localStorage.key(0))

localStorage.clear()
