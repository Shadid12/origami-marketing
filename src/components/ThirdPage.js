import React, { Component } from "react"

//styles
import '../styles/thirdpage.sass'
import '../styles/media-queries.scss';

//components
import MemberCard from "./MemberCard";

// Data
import { teamDetails } from "../metaData/team"
class ThirdPage extends Component {
    render() {

        return (
            <div className="third-page" id="team" >
                <h1 className="header-main"> MEET THE TEAM </h1>
                <h2>Coming Soon</h2>
                {/* <div className="team-body" >
                    {
                        teamDetails.map((item, index) => {
                            return (
                                <MemberCard itemEach={item} />
                            )
                        })
                    }
                </div> */}
            </div>
        )
    }
}

export default ThirdPage;