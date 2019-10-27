import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Login from "./Pages/Login.js";
import Home from "./Pages/Home.js";
import SelectScreen from "./Pages/SelectScreen.js";

import Logo from "./Images/logo.png";

import "./CSS/Header.css";
import FindGroup from "./Pages/FindGroup";

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="header">
                    <div className="navBar">
                        <div className="signs">

                            <img src={Logo} className="Logo" alt="logo"
                                 height="60px" width="auto"/>
                            <Link className= "title" to="/">
                                STAKK

                            </Link>
                        </div>

                        <div className="navGroup">
                            <Link className="navLink" to="/stakks">
                                QuikStakk
                            </Link>
                            <Link className="navLink" to="/login">
                                Login
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/stakks" component={SelectScreen}/>
                    <Route exact path="/stakks/findGroup" component={FindGroup}/>
                </div>

            </BrowserRouter>
        );
    }
}

export default Header;
