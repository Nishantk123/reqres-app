import React from "react";
import {useNavigate } from "react-router-dom";
const Header = () => {
    const token = window.localStorage.getItem("token")
    const history = useNavigate()
    const handleLogin = () =>{
        history("/login")
    }
    const handleSignUp = () =>{
        history('/signup')
    }
    const handleLogout = () =>{
        window.localStorage.clear()
        history("/login")
    }
    const handleHome=() =>{
      history("/")
    }
    const handleUser = () =>{
      history("/user")
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleHome}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  onClick={handleUser}>
                  User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {token !== null&&<button className="btn btn-danger" onClick={handleLogout}>Logout</button>}
              {token === null&&<button className="btn btn-primary mx-3" onClick={handleLogin}>Login</button>}
              {token === null&&<button className="btn btn-primary" onClick={handleSignUp} >SignUp</button>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
