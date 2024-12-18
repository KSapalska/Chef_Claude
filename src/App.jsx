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
  
  function signUp(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
   
  /*   const email= formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const favColor=formData.get("favColor")

    formEl.reset()
    console.log(favColor) */
    
    
    const data = Object.fromEntries(formData)
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const allData = {
      ...data,
      dietaryRestrictions: dietaryRestrictions
    }
    
    console.log(allData)
    

  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <label class="switch">
  <input type="checkbox"/>
  <span class="slider"></span>
</label>
      <form onSubmit={signUp} method="post">
      <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time" defaultChecked={true}/>
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>
        
        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
        


      </form>
    </section>
  )
} 

/* import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(event) {
         event.preventDefault()
         const formElements = event.currentTarget
         const formData = new FormData(formElements)
        
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        formElements.reset()
    }

    return ( 
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
} */