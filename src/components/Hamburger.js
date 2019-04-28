
import React, { Component } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'


import '../styles/hamburger.sass';

class Hamburger extends Component {

    render() {
        const hamburgerData =
            [
                { title: 'About Us', href: '#about' },
                { title: 'Our Goal', href: '#menu' },
            ]
        return (
            <div className="flex-navbar-hamburger-container">
                <div className="navigation" >
                    <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
                    <label htmlFor="nav_toggle" className="navigation_button" >

                    </label>
                    <div className="navigation_background" >{'\u00A0'}</div>

                    <nav className="navigation_nav">
                        <ul className="navigation_list">
                            {hamburgerData.map((item, index) => {
                                return (
                                    <li key={index} className="navigation_item">
                                        <AnchorLink href={item.href} className="navigation_link"> {item.title} </AnchorLink>
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








