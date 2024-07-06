import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import Ticketnum from './Ticket'
import { sum } from './helper'

function App() {

  let winCond = (ticket) =>{
    return ticket[0] === 0;
  }

  return (
    <>
    <Lottery n = {3} winCond={winCond}></Lottery>
    </>
  )
}

export default App
