import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import SignUp from "./component/SignUp";
import User from "./component/User";
import UserDetail from "./component/UserDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetail/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
