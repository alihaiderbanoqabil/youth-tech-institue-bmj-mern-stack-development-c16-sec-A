import React, { useState } from 'react'
const names = ['ali', 'haider'];
const [firstName, lastName, middleName] = names;
console.log(names[0], firstName);
console.log(names[1], lastName);
console.log(middleName);


const Counter = () => {

    // const state = useState(0);
    const [count, setCount] = useState(0);


    // let count = 0;

    // const add = () => {
    //     count = count + 1
    //     console.log("add", count);
    // }

    // const subtract = () => {
    //     count = count - 1
    //     console.log("subtract", count);
    // }

    const add = () => {
        // setCount(count + 1)
        setCount((previousCount) => {
            return previousCount + 1
        })

        console.log("add", count);
    }

    const subtract = () => {
        // setCount(count - 1)
        setCount((previousCount) => previousCount - 1)
        console.log("subtract", count);
    }

    console.log("Counter component render", count);

    return (
        <div>
            <button onClick={add}>Add</button>
            <span style={{ margin: "0 1rem" }}>{count}</span>
            <button onClick={() => subtract()}>Subtract</button>
        </div>
    )
}

export default Counter
