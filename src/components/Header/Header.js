import React from 'react'
import './header.css'

function Header() {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Countries of the World
                    </a>
                    <a className="navbar-brand-about" href="#">
                        About
                    </a>
                </div>
            </nav>

           
        </div>
    )
}

export default Header