import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </div>
    )
}

----------------------------------------------------

import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])


    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "You have 1 unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

    return (
        <div>
            <h1>{determineText()}</h1>
        </div>
    )
}
--------------------------------------------------------------------
1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on some kind of condition.


2. When would you use &&?
When you want to either display something or NOT display something.


3. When would you use a ternary?
When you need to decide which of 2 things to display


4. What if you need to decide between > 2 options on
   what to display?
if...else if...else conditional or maybe a `switch` statement.

