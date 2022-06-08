import { useState } from 'react'
import Routes from './routes/routes'
import {Link, Outlet} from "react-router-dom"

import Header from "./Components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </nav>
    <Outlet />
  </div>
  )
}

export default App
