import React from "react";
import './navbar.css'

export default function Navbar() {
    const navHandle = () => {
        const element = document.getElementById('nav-menu')
        element.classList.toggle('nav-handle')
    }
    return (
        <>  
            <div className="top-bar">
                <span class="material-symbols-outlined top-bar-menu" onClick={navHandle} >
                    menu
                </span>
                <div className="navbar-icon-topbar">
                    {/* img */}
                    <a href="/">ECOMMERCE-STORE</a>
                </div>
            </div>
            <nav id="nav-menu">
                <span class="material-symbols-outlined" onClick={navHandle}>
                    menu
                </span>
                <div className="navbar-icon">
                    {/* img */}
                    <a href="/">ECOMMERCE-STORE</a>
                </div>
                <div className="navbar-searchbox">
                    <input type='text' placholder='Search' className='search-box    ' />
                </div>
                <div className="navbar-items">
                    <ul>
                        <li><span class="material-icons">
                            home
                        </span>HOME</li>
                        <li><span class="material-icons">
                            shopping_cart
                        </span>CART</li>
                        <li><span class="material-icons">
                            filter_alt
                        </span>GENRE</li>
                    </ul>
                </div>
                <div className="navbar-user">
                    <a href="/"><span class="material-icons">
                        account_circle
                    </span>USER</a>
                </div>
            </nav>
        </>
    )
}