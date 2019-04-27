
import React, { Component } from 'react';



import '../styles/hamburger.sass';

class Hamburger extends Component {

    render() {
        const hamburgerData =
            [
                { title: 'About Us', href: '#about' },
                { title: 'Our Goal', href: '#menu' },
                { title: 'Our Contact', href: '#reviews' }
            ]
        return (
            <div className="flex-navbar-hamburger-container">
                <div className="navigation" >
                    <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
                    <label htmlFor="nav_toggle" className="navigation_button" >
                        <span className="ham">
                            <button class="hamburger hamburger--elastic" type="button"
                                aria-label="Menu" aria-controls="navigation">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner">
                                    </span>
                                </span>
                            </button>
                        </span>
                    </label>
                    <div className="navigation_background" >{'\u00A0'}</div>

                    <nav className="navigation_nav">
                        <ul className="navigation_list">
                            {hamburgerData.map((item, index) => {
                                return (
                                    <li key={index} className="navigation_item">
                                        <a href={item.href} className="navigation_link"> {item.title} </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                </div>

            </div>
        );
    }

}

export default Hamburger;








