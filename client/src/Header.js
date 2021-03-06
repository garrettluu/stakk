import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import * as firebase from 'firebase';

import 'firebase/auth';
import firebaseConfig from './private-firebase.json';

import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import SelectScreen from "./pages/SelectScreen.js";

import Logo from "./images/logo.png";

import "./stylesheets/Header.css";
import FindGroup from "./pages/FindGroup";
import CreateGroup from "./pages/CreateGroup";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSignedIn: false,
            uid: "",
        };
    }
    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({userSignedIn: true});
            } else {
                this.setState({userSignedIn: false});
            }
        })
    }

    loginLogout() {
        if (this.state.userSignedIn) {
            return "Log Out";
        } else {
            return "Log In";
        }
    }

    handleLogout() {
        if (this.state.userSignedIn) {
            firebase.auth().signOut().then(
                () => {
                    this.setState({userSignedIn: false});
                }
            )
        }
    }

    render() {
        return (
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
                            View
                        </Link>
                        <Link className="navLink" to="/login" onClick={this.handleLogout.bind(this)}>
                            {this.loginLogout()}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
