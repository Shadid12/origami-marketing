
import React, { Component } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'


import '../styles/hamburger.sass';
import '../styles/media-queries.scss';

class Hamburger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerData: [
                { title: 'Home', href: '#home' },
                { title: 'Goals', href: '#goal' },
                { title: 'Team', href: '#team' }
            ]
        }
    }
    handleLinkChange = () => {
        document.getElementById("nav_toggle").checked = false
    }

    render() {
        const { hamburgerData } = this.state 
        return (
            <div className="flex-navbar-hamburger-container">
                <div className="navigation">
                    <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
                    <label htmlFor="nav_toggle" className="navigation_button" >
                    </label>
                    <div className="navigation_background" >{'\u00A0'}</div>

                    <nav className="navigation_nav">
                        <ul className="navigation_list">
                            {hamburgerData.map((item, index) => {
                                return (
                                    <AnchorLink 
                                        offset='80'
                                        onClick={this.handleLinkChange} 
                                        href={item.href} 
                                        className="navigation_link"
                                        key={index}
                                       
                                    > 
                                        <li  className="navigation_item">
                                            {item.title}
                                        </li>
                                    </AnchorLink>
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








