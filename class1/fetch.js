console.log("fetch");
const studentInformation = {
    name: "ali",
    age: 34,
    // hobbies: hobbies, // below one is same as this
    hobbies,
}

fetch("apiurl", {
    method: "GET/POST/DELETE/PUT/PATCH", 
    body: JSON.stringify(studentInformation), // we dont use body for get and delete methods
    // headers
    
})
