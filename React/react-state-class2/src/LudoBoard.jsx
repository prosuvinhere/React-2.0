import { useState } from "react"

export default function LudoBoard(){

    let [move ,setMove] = useState({blue : 0, green : 0, yellow : 0, red : 0})
    let [arr,setArr] = useState(["no moves"])

    let updateBlue = () => {
        // setMove((prevMove) => {
        //     return {...prevMove,blue: prevMove.blue+1}
        // })

        setArr( (prevArr) => {
            return [...prevArr," blue moves"]
        })
        console.log(arr)
    }

    let updateGreen = () => {
        setMove((prevMove) => {
            return {...prevMove,green: prevMove.green+1}
        })
    }

    let updateYellow= () => {
        setMove((prevMove) => {
            return {...prevMove,yellow: prevMove.yellow+1}
        })
    }

    let updateRed = () => {
        setMove((prevMove) => {
            return {...prevMove,red: prevMove.red+1}
        })
    }

    return(
        <div>
            <p>Game</p>
            <p>{arr}</p>
            <div className="Board">
                <p>Blue Moves = {move.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor : "blue"}}>+1</button>
                <p>Green Moves = {move.green}</p>
                <button onClick={updateGreen} style={{backgroundColor : "green"}}>+1</button>
                <p>Yellow Moves = {move.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor : "gold"}}>+1</button>
                <p>Red Moves = {move.red}</p>
                <button onClick={updateRed} style={{backgroundColor : "red"}}>+1</button>
            </div>
        </div>
    )
}