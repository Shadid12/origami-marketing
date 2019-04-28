import React, { Component } from "react"

//styles
import '../styles/secondpage.sass'
import '../styles/media-queries.scss';


class SecondPage extends Component {
    render() {
        return (
            <div className="second-page" id="goal">
                <h1 className="header-main"> OUR GOAL </h1>
                <div onClick={this.handleShowBuble} className="background-img-wrapper">
                    <img className="background-img" src="https://media1.giphy.com/media/sW3oWqXlB0Iww/giphy.gif" ></img>
                </div>
            </div>
        )
    }
}

export default SecondPage;