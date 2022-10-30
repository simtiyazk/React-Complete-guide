import { useState } from "react";

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTectHandler = () => {
        setChangedText(true);
    }
    return (
        <section>
            <h1>Welcome to React world!</h1>
            {!changedText && <p>This is initial text!</p>}
            {changedText && <p>Changed text after click!</p>}
            <button onClick={changeTectHandler}>Click me!</button>
        </section>
    )
}

export default Greetings;