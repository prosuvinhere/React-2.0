import { useState } from "react"
import { genTicket,sum } from "./helper"
import Ticket from "./Ticket"
import Button from "./Button"

export default function Lottery({n = 3,winCond}) {
    let [ticket,setTicket] = useState(genTicket(n))
    let isWinnning = winCond(ticket);

    let buy = () => {
        setTicket(genTicket(n))
    }

    return(
        <div>
            <h1>Lottery</h1>
            <Ticket ticket={ticket}></Ticket>
            <Button action={buy}></Button>
            <h3>{isWinnning && "Won"}</h3>
        </div>
    )
}