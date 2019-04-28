import React, { Component } from 'react'

// style

import '../styles/menu.sass'
const Card = (props) => {
    return (
        <div className="item-each">
            <div className="item-each item-each-back">
                <p className="item-each-back-body">
                    <ul>
                        <li> {props.itemEach.details.summary}</li>
                    </ul>
                    <span>
                        <img src="https://png.pngtree.com/element_our/md/20180301/md_5a9797d083160.png" className="linkedIn-img"></img>
                        <img src="https://png.pngtree.com/element_our/md/20180301/md_5a9797d083160.png" className="linkedIn-img"></img>
                        <img src="https://png.pngtree.com/element_our/md/20180301/md_5a9797d083160.png" className="linkedIn-img"></img>
                    </span>
                </p>
            </div>
            <div className="item-each item-each-front">
                <h1 className="item-each-front-title"> {props.itemEach.name} </h1>
                <h5 className="item-each-front-price"> {props.itemEach.job} </h5>
                <img className="item-each-front-img" src={props.itemEach.avatar}></img>
            </div>
        </div>
    )
}

export default Card