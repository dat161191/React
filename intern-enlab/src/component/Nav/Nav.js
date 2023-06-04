import React from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "blue"
                                        };
                                    }}
                                    to="/" className="nav-link"> <i className="bi bi-house-heart-fill"></i> Home </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            textDecoration: "none", marginRight: "5px", color: isActive ? "red" : "blue"
                                        };
                                    }}
                                    to="/quizAPI" className="nav-link"> QuizAPI
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
