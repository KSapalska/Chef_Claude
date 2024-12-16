/* import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"



export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
} */

/* import React from "react"

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
} */

/*   import React from "react"
  export default function App() {
       
    let [isGoingOut,setIsGoingOut] = React.useState(false)
    function toggleGoingOut(){
      setIsGoingOut(prevState =>!prevState);
    }
    
    
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
            onClick= {toggleGoingOut} 
            className="value"
            aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{ isGoingOut ?   "Yes": "No"}</button>
        </main>
    )
}
 */

/* import React from "react";

export default function App() {
  let [myFavoriteThings, setMyFavoriteThings] = React.useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevFavThings) => [...prevFavThings, allFavoriteThings[prevFavThings.length]]);
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
} */

/* import React from "react";
import avatar from "./img/chef.png";
import starFilled from "./img/star-filled.png";
import starEmpty from "./img/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    })


    )
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "Filled star icon" : "Empty star icon"}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}



 */








export default function App() {
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log("Submitted")
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}