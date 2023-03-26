import React, {useState} from "react";
import Signup from "./components/signup page/SignUp";
import Login from "./components/login page/Login";
import Todo from "./components/home/Todo";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  // const [pet, setPet] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}/> */}
      <Routes>
        <Route path="/home" element={<Todo />} />
        {/* <Route path="/petlist" element={<Petlist
        userId={userId}
        />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Login 
        userId={userId}
        setUserId={setUserId}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
