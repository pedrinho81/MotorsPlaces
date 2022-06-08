import { Outlet, Link } from "react-router-dom";
export default function Routes() {
    return (
      <div>
        <h1>oi!</h1>
      
            <nav
                 style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                 }}
                >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
                <Link to="/">voltar</Link>
            </nav> 
            <Outlet />
        </div> 
    );
  }