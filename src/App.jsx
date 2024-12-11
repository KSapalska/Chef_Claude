/* 
function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }
  
  function handleMouseOver() {
    console.log("I was Mause over!")
  }
 
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseDown={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}



export default App */

/*  import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"

function App() {
  

  return (
    <>
       <Header />
       <Main />
    </>
  )
}

export default App */
 

import React from "react"

export default function App() {
  
  let [isImportant,setIsImportant] = React.useState("yes")
  
  function handleClick(){
    setIsImportant("Definitely!")
  }
  
  
  
  return (
      <main>
          <h1 className="title">Is state important to know?</h1>
          <button onClick={handleClick} className="value">{isImportant}</button>
      </main>
  )
}
