import React from 'react'
import SurveyItem from "./SurveyItem"

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
        <div className="list-unstyled col-md-12">
            {surveyItem}
        </div>
    )

}

export default TablePublic
