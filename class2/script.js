// console.log("Api Calling");
function add(num1, num2) {
    return num1 + num2;
    document.write(num1 + num2);
    document.writeln(num1 + num2);

}
add(20, 30)

// fetch("apiurl", {
//     method: "GET/POST/DELETE/PUT/PATCH",
//     body: JSON.stringify(studentInformation), // we dont use body for get and delete methods
//     // headers

// })

// window.onload = () => {
//     console.log("Before API Calling");

// fetch('https://jsonplaceholder.typicode.com/todos/1', { method: "GET" })
//     .then(response => response.json())
//     .then(json => console.log(json))
// let isLoading = false;
// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then((response) => {
//         // isLoading = true;
//         console.log("response :", response);
//         return response.json();
//     })
//     .then(function (data) {
//         // isLoading = false;
//         console.log("data :", data);
//     })
//     .catch((error) => {
//         // isLoading = false;
//         console.log("error: ", error);
//     })
//     .finally(() => {
//         // isLoading = false;
//         console.log("finally block calling");
//     })


let isLoading = false;
const getAllUsers = async () => {
    try {
        isLoading = true;
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log("response :", response);
        const data = await response.json();
        //  isLoading = false;
        console.log("data :", data);
    } catch (error) {
        // isLoading = false;
        console.log("error: ", error);
    }
    finally {
        isLoading = false;
        console.log("finally block calling");
    }
}
getAllUsers();
//     // const getAllAlbums = async () => {
//     //     try {
//     //         const response = await fetch('https://jsonplaceholder.typicode.com/albums');
//     //         console.log("response :", response);
//     //         const data = await response.json();
//     //         console.log("data :", data);
//     //     } catch (error) {
//     //         console.log("error: ", error);
//     //     }
//     //     finally {
//     //         console.log("finally block calling");
//     //     }
//     // }
//     // getAllAlbums();

//     // const getAllData = async (apiUrl = 'https://jsonplaceholder.typicode.com/albums') => {
//     //     try {
//     //         const response = await fetch(apiUrl);
//     //         console.log("response :", response);
//     //         const data = await response.json();
//     //         console.log("data :", data);
//     //     } catch (error) {
//     //         console.log("error: ", error);
//     //     }
//     //     finally {
//     //         console.log("finally block calling");
//     //     }
//     // }
//     // getAllData();
//     // getAllData('https://jsonplaceholder.typicode.com/albums');
//     // getAllData('https://jsonplaceholder.typicode.com/users');
//     // getAllData('https://jsonplaceholder.typicode.com/todos');
//     // getAllData('https://jsonplaceholder.typicode.com/comments');
//     // getAllData('https://jsonplaceholder.typicode.com/photos');

//     // async function getAllData(resource) {
//     //     try {
//     //         const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
//     //         console.log("response :", response);
//     //         const data = await response.json();
//     //         console.log("data :", data);
//     //     } catch (error) {
//     //         console.log("error: ", error);
//     //     }
//     //     finally {
//     //         console.log("finally block calling");
//     //     }
//     // }

//     // const getAllData = async (resource) => {
//     //     try {
//     //         const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
//     //         console.log("response :", response);
//     //         const data = await response.json();
//     //         console.log("data :", data);
//     //     } catch (error) {
//     //         console.log("error: ", error);
//     //     }
//     //     finally {
//     //         console.log("finally block calling");
//     //     }
//     // }
//     // getAllData('albums')
//     // getAllData('users');
//     // getAllData('todos');
//     // getAllData('comments');
//     // getAllData('photos');


//     console.log("After API Calling");
// }
// OR
// window.onload = function () {

// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// console.log("before setInterval");
// let index = 0;
// const interval = setInterval(() => {
//     console.log("setInterval code excute", index);
//     index++;

// }, 3000);

// Intervals in JS 
// function restInterval() {
//     clearInterval(interval)
// }

// console.log("after setInterval");

// console.log("before setTimeout");

// const timeout = setTimeout(() => {
//     console.log("setTimeout code excute");
// }, 3000);

// function restTimeout() {
//   clearTimeout(timeout);  
// }
// console.log("after setTimeout");

// Cookies in JS 

document.cookie = "username=John Doe";
document.cookie = "username=John";
document.cookie = "age=40";
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
console.log(document.cookie);


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

console.log(getCookie("age"));
console.log(getCookie("username"));
