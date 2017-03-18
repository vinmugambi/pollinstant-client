import React from 'react'
import SurveyOwnItem from "./SurveyOwnItem"
//import { Link } from "react-router"
import {Button} from 'react-bootstrap'
import {browserHistory} from 'react-router'

const TableOwn = ({surveys}) => {
    let surveyOwnItem;
    if (surveys) {
        surveyOwnItem = surveys.map(survey => {
            return (
                <SurveyOwnItem key={survey._id} survey={survey} />
            )
        })
    }
    let navigateCreate=()=>{
        browserHistory.push('/create')
    }

    return (
        <div className="col-md-12 list-unstyled" >
            <div style={{ padding: "0.3em", borderBottom: '1px solid lightGray' }}>
                <Button bsStyle="default" onClick={navigateCreate}> Create New </Button>
            </div>
            {surveyOwnItem}
        </div>
    )
}
export default TableOwn;