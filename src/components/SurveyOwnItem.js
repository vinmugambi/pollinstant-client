import React from 'react'
import { Link } from "react-router"

const SurveyOwnItem = (props) => {
    let {available, _id, visible, pollDescription, totalParticipants} = props.survey;
    return (
        <li className="col-md-12">
            <div className={available === !false ? "available SurveyListItem" : "notAvailable SurveyListItem"} >
                {pollDescription}
                {available === true ? <span className="label label-danger">{totalParticipants}</span> : null}
                <div className="pull-right">

                    {available === false ?
                        <div>
                            <a href={_id}><span className="glyphicon glyphicon-road"></span>AvailSurvey</a>
                            <a href={_id}><span className="glyphicon glyphicon-pencil"></span>Edit</a>
                            <a id="delete" href={_id}><span className="glyphicon glyphicon-trash">Delete</span></a>
                        </div>
                        : <div>

                            <Link to={'/view/' + _id}><span className="glyphicon glyphicon-signal"></span>Results</Link>
                        </div>}
                    {visible === false && available === true ?
                        <a href={_id}><span className="glyphicon glyphicon-signal"></span>AvailResults</a> : null
                    }
                </div>
            </div>
        </li>
    )
}
export default SurveyOwnItem;
