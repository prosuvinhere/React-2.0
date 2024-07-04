import { useState } from "react";

function init() {
    console.log("inti")
    return Math.random();
}

export default function Counter(){
    let[count, setCount] = useState(init)
    console.log("rendered")

    let incCount = () => {
        setCount((currValue) => {
            return currValue+1
        })
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Counter</button>
        </div>
    )
}