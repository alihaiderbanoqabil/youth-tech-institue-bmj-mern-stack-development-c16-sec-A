// import React from 'react'
// import  "./index.css";
import styles from "./index.module.css";

const Header = (props) => {
    console.log(props, "props");
    
    return (
        <header className={styles.heading1}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" />
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
