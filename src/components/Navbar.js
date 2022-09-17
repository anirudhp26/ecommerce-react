import React from "react";
import './navbar.css'

export default function Navbar() {
    const navHandle = () => {
        const element = document.getElementById('nav-menu');
        const topbar = document.getElementById('topbar');
        const topbarmenu = document.getElementById('topbar-menu');
        element.classList.toggle('nav-handle');
        topbar.classList.toggle('topbar-handle');
        topbarmenu.classList.toggle('topbarmenu-handle');
      }
    return (
        <>
            <div className="top-bar" id='topbar'>
                <span className="material-symbols-outlined top-bar-menu" onClick={navHandle} id='topbar-menu'>
                    menu
                </span>
                <div className="navbar-icon">
                    {/* img */}
                    <a href="/">ECOMMERCE-STORE</a>
                </div>
                <div className="navbar-user">
                    <a href="/"><span className="material-icons">
                        account_circle
                    </span>USER</a>
                </div>
            </div>
            <nav id="nav-menu" className='navbar'>
                <span className="material-symbols-outlined" onClick={navHandle}>
                    menu
                </span>
                <div className="navbar-icon">
                    {/* img */}
                    <a href="/">ECOMMERCE-STORE</a>
                </div>
                <div className="navbar-items">
                    <ul>
                        <li><span className="material-icons">
                            home
                        </span>HOME</li>
                        <li><span className="material-icons">
                            shopping_cart
                        </span>CART</li>
                        <li><span className="material-icons">
                            filter_alt
                        </span>GENRE</li>
                    </ul>
                </div>
                <div className="navbar-searchbox">
                    <input type='text' placeholder='Search' className='search-box    ' />
                </div>

                <div className="navbar-user">
                    <a href="/"><span className="material-icons">
                        account_circle
                    </span>USER</a>
                </div>
            </nav>
        </>
    )
}