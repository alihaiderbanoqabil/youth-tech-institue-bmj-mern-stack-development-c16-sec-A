import React from 'react'

// export const Greeting = (props) => {
//     console.log(props, "props");

//   return (
//      <div>Hello {props.name}, your age is {props.age}</div>
//   )
// }

// export const Greeting = (props) => {
//     const { name, age, address: {
//         city, zipcode, geo: { lng, lat }, geo
//     } } = props;
//     console.log(props, "props", name, age, geo);
//     // const lng = props.address.geo.lng;
//     // const lat = props.address.geo.lat;
//     return (
//         <div><h1>
//             {lng} - {city} - {zipcode} - ({lat})
//         </h1>Hello {name}, your age is {age}, your address is <strong>{props.address.geo.lng}</strong></div>
//     )
// }

export const Greeting = ({ name, age, address: {
    city, zipcode, geo: { lng, lat }, geo
} }) => {
    console.log(name, age, geo);
    // const lng = props.address.geo.lng;
    // const lat = props.address.geo.lat;
    return (
        <div><h1 style={{ color: "red" }}>
            {lng} - {city} - {zipcode} - ({lat})
        </h1>Hello {name}, your age is {age}, your address is <strong>{lng}</strong></div>
    )
}
