import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar";
import { getUser } from "../../utilities/users-service"

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <>
          <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
