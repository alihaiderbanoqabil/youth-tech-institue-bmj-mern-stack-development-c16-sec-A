import React, { useEffect, useState } from 'react'

const Posts = () => {
    // const state = useState("Enter your query!")
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/posts?query=${search}`)
        // setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setPosts(json)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
                setIsLoading(false);
            })
        // .finally(() => {
        //     console.log("finally block calling");
        //     setIsLoading(false);
        // })
    }, [search])



    // console.log("Posts component render/rerender", state, state[0], state[1]());
    // console.log("Posts component render/rerender", search, setSearch());
    // console.log("Posts component render/rerender", { search });
    console.log("Posts component render/rerender", { isLoading: isLoading, posts, error });

    const onSearchInputChange = (event, inputType) => {
        console.log(event.target, "onSearchInputChange call", event.target.value, inputType);
        setSearch(event.target.value)
    }
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
    if (isLoading === true) {
        return <h1>Fetching posts...</h1>
    }
    else if (error !== "") {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <pre>{JSON.stringify(posts, undefined, 2)}</pre>
            {/* <div>
                <button onClick={add}>Add</button>
                <span style={{ margin: "0 1rem" }}>{count}</span>
                <button onClick={() => subtract()}>Subtract</button>
            </div>
            <div>
                <input placeholder="Enter your query!" type="text" value={search} onChange={onSearchInputChange} />
            </div> */}
            {/* <input placeholder="Enter your query!" type="text" value={search} onChange={() => {
                onSearchInputChange();
                onSearchInputChange();
            }} /> */}
            {/* <input placeholder="Enter your query!" type="text" value={search} onChange={(event) => onSearchInputChange(event)} /> */}
            {/* <input placeholder="Enter your query!" name='email' type="text" value={search} onChange={(event) => onSearchInputChange(event, "email")} /> */}
            {/* <input placeholder="Enter your query!" name='password' type="text" value={search} onChange={(event) => onSearchInputChange(event, "password")} /> */}
            {/* <input placeholder="Enter your query!" type="text" value={search} onChange={(event) => setSearch(event.target.value)} /> */}
            {/* This is my posts component */}

        </div>
    )
}

export default Posts
