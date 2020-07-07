import React from 'react';
import {
    Link
} from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="app-name">
                    <Link
                        to={{
                            pathname: "/",
                        }}
                    ><span>Ke Givers</span></Link>

                </div>
                <div className="app-links">
                    <a href="https://www.linkedin.com/in/tankip/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                        Rodgers Tanui
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                        </svg>
                    </a>

                </div>
            </nav>
        </div>
    );
}

export default Header;

