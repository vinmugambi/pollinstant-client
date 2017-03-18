import React from 'react'

 const SurveyItem = (props) => {
    let view = () => {
        let {visible} = props.survey;

        if (visible === true) {
            return <a><span className="glyphicon glyphicon-signal">Results</span></a>
        }
        else {
            return null;
        }
    }
    return (
        <li className="col-md-12 notAvailable">
            <div className="SurveyListItem">
                {props.survey.pollDescription}
                <div className="pull-right">
                    {view()}
                    <a className="delete" href={props.survey._id}><span className="glyphicon glyphicon-calendar">Vote</span></a>
                </div>
            </div>
        </li>
    )
}

export default SurveyItem;