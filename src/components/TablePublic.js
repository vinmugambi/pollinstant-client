import React from 'react'
import SurveyItem from "./SurveyItem"
import {Col} from 'react-bootstrap'

const TablePublic = ({surveys}) => {

    let surveyItem;
    if (surveys) {
       surveyItem = surveys.map(survey => {
            return (
                <SurveyItem key={survey._id} survey={survey} />
            )
        })
    }
    return (
        <div className="list-unstyled">
            <Col xs={12}>
            {surveyItem}
            </Col>
        </div>
    )

}

export default TablePublic