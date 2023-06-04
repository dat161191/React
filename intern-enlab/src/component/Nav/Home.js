import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="py-5 text-center">
                    <h3>Quiz App</h3>
                    <div className="d-flex  justify-content-center    align-items-center">
                        <Link to="/quizApi" className="btn btn-primary me-2" style={{fontSize:"30px"}}>Start</Link>                 
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;