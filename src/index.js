import React from "react";
import ReactDOM from "react-dom";
// import the Heading.JSX to here
// import Heading from "./Heading.jsx";
// for the List this time
// import List from "./List.jsx";
import App from "./components/App.jsx";

//  React Component
// 
// function Heading() {
//   return <h1> My Favourite Foods</h1>;
// }

ReactDOM.render(
  //  The most common structure is
  <App></App>,

  // <div>
  //   {/* you see how we create heading */}
  //   <Heading></Heading>
  //   <List></List>
  //   {/* <h1>My Favourite Foods</h1> */}
  //   {/* <ul>
  //     <li>Bacon</li>
  //     <li>Jamon</li>
  //     <li>Noodles</li>
  //   </ul> */}
  // </div>
  document.getElementById("root")
);
