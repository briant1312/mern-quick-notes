import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar";
import { getUser } from "../../utilities/users-service"
import Notes from "../../components/Notes/Notes";

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <>
          <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/" element={<Notes user={user} />} />
          </Routes>
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
