import React from 'react'
import { Link } from "react-router"

const SurveyItem = (props) => {
    let view = () => {
        let {visible} = props.survey;

        if (visible === true) {
            return <Link to={'/view/' + props.survey._id}><span className="glyphicon glyphicon-signal">Results</span></Link>
        }
        else {
            return null;
        }
    }
    return (
        <li className="col-md-12 available">
            <div className="SurveyListItem">
                {props.survey.pollDescription}
                <div className="pull-right">
                    {view()}
                    <Link to={"/vote/" + props.survey._id}><span className="glyphicon glyphicon-calendar">Vote</span></Link>
                </div>
            </div>
        </li>
    )
}

export default SurveyItem;
