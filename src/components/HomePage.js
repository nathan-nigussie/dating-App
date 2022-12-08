import React from "react";
import appLogo from "../images/app-logo.png";
import datingImage from "../images/dating-background.jpg";
import {Link} from "react-router-dom";
import "../home.css";
const HomePage=() => {
    return (
        <div className="container">
            <div className="header-wrapper">
                <nav>
                    <Link to="/application-form">
                        <button className="nav-btn">Form</button>
                    </Link>
                    <button className="nav-btn">Contact</button>
                    <button className="nav-btn">About us</button>
                </nav>
                <header className="home-header">
                    <img src={appLogo} class="app-logo" />
                </header>
            </div>
            <main className="home-main">
                <h1 className="main-title">WE CONNECT YOU WITH YOUR SOULMATE</h1>

                <p className="soulmate-quote">
                    "Your soulmate is the one who makes life come to life." "If you're a
                    bird, I'm a bird."
                    <br />
                    “A soul mate is someone who you carry with you forever. It's the one
                    person who knew you and <br />
                    accepted you and believed in you before anyone else did or when no one
                    else would.”
                </p>

                <div>
                    <img src={datingImage} alt="datingImage" />
                </div>
                <Link to="/application-form">
                    <button className="applicants-btn">Affilate Applicants</button>
                </Link>
            </main>
        </div>
    );
};

export default HomePage;
