import React from "react";
import '../css/main.css'

export default function Navbar() {
    return (
        <>
            <nav>
                <span class="material-symbols-outlined">
                    menu
                </span>
                <div className="navbar-icon">
                    {/* img */}
                    <a href="/">ECOMMERCE-STORE</a>
                </div>
                <div className="navbar-searchbox">
                    <input type='text' placholder='Search' className='search-box' />
                </div>
                <div className="navbar-items">
                    <ul>
                        <li><span class="material-icons">
                            home
                        </span>HOME</li>
                        <li><span class="material-icons">
                            add_shopping_cart
                        </span>CART</li>
                        <li>DEALS</li>
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