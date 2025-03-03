// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Header from './components/Header'
// import { Footer } from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <div className='div1'>
//         <Header />
//         This is our first react component
//         <Footer />
//       </div>
//       <div className='div2'>
//         <Header />
//         This is our first react component
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App

import React, { Fragment } from 'react'
import { Footer } from './components/Footer'
// import './App.css'
import Header from './components/Header';
import { Greeting } from './components/Greeting';
import Counter from './components/Counter';

const inlineStyle = { backgroundColor: "cyan", border: "1px solid red" };

const address1 = {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
  }
};

const address2 = {
  "street": "Victor Plains",
  "suite": "Suite 879",
  "city": "Wisokyburgh",
  "zipcode": "90566-7771",
  "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
  }
};

const address3 = {
  "street": "Douglas Extension",
  "suite": "Suite 847",
  "city": "McKenziehaven",
  "zipcode": "59590-4157",
  "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
  }
};
const App = () => {
  return (
    <Fragment>
      <div className='div1 heading1'
      // style={{ backgroundColor: "cyan", border: "1px solid red", color: "green" }}
      >
        {/* <Header />
        <Header />
        <Header />
        <Header /> */}
        {/* This is our first react component
        <Greeting name={"Ali Haider"} age={10} address={address1} />
        <Greeting name="Hasnain" age={20} address={address2} />
        <Greeting name="Usman" age={30} address={address3} />
        <Footer /> */}
        <Counter />
      </div>
      {/* <div className='div2'>
        <Header />
        This is our first react component
        <Footer />
      </div> */}
    </Fragment>
  )
}

export default App
