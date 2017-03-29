import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { Button, Col, FormGroup, ControlLabel } from "react-bootstrap"
import DateTime from "react-datetime"
import { browserHistory } from "react-router"

import { selectEndDate, selectStartDate, setAvailable, setVisible } from "../actions/create"
import { submitSurveyToServer } from "../actions"
import ErrorNotify from "../components/ErrorNotify"

class Submit extends Component {

    cleanse(data) {
        let cleansed = {
            targetMinEduLvl: Number(data.targetMinEduLvl),
            targetMaxEduLvl: Number(data.targetMaxEduLvl),
            targetMinAge: Number(data.targetMinAge),
            targetMaxAge: Number(data.targetMaxAge),
            targetSex: data.targetSex,
            available: data.available,
            visible: data.visible,
            pollDescription: data.pollDescription,
            startDate: data.startDate,
            endDate: data.endDate,
        }

        if (data.targetCounties === "All Counties" || /All Counties/.test(data.targetCounties) === true) {
            cleansed.targetCounties = []
        }
        else cleansed.targetCounties = data.targetCounties.split(",")
        let que = data.questions.filter(question => {
            return question.question !== ""
        })
        cleansed.questions = que.map(question => {
            question.choices = question.choices.filter(choice => choice.text !== "")
            return question
        }
        )
        return cleansed;
    }
    handleSubmit() {
        var data = this.cleanse(this.props.survey);
        console.log(data);
        this.props.submitSurveyToServer(data);
    }

    validStartDate(current) {
        return current.isAfter(Date.now() - 24 * 60 * 60 * 1000)
    }
    validTime() {
        return {
            hours: { min: new Date.getHours() },
        }
    }
    validEndDate(current) {
        return current.isAfter(Date.now())
    }
    render() {
        console.log(this.props.survey)
        return (
            <div className="container col-md-9 col-md-offset-1 grad">
                {this.props.error ? <ErrorNotify error={this.props.error} /> : null}
                {this.props.confirmation ? <ErrorNotify confirmation={this.props.confirmation} /> : null}
                <div className="col-md-9">
                    <label>Do you want your survey to go live NOW?</label>
                </div>
                <div className="col-md-3">
                    <label><input type="radio" name="available" value="No" checked={!this.props.survey.available} onChange={() => this.props.setAvailable()} />No</label>
                    <label><input type="radio" name="available" value="Yes" checked={this.props.survey.available} onChange={() => this.props.setAvailable()} />Yes</label>
                </div>
                <div className="col-md-9">
                    <label>Do you want voters to be able to VIEW the results of your Survey?</label>
                </div>
                <div className="col-md-3">
                    <label><input type="radio" name="visible" value="No" checked={!this.props.survey.visible} onChange={() => this.props.setVisible()} />No</label>
                    <label><input type="radio" name="visible" value="Yes" checked={this.props.survey.visible} onChange={() => this.props.setVisible()} />Yes</label>
                </div>
                <div className="col-md-12">
                    <h4 style={{ "textAlign": "center" }}> Select the period your survey will be live on our site</h4>
                </div>

                <div className="dates">
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>From</ControlLabel>
                        </Col>
                        <Col md={10}>
                            <DateTime value={this.props.survey.startDate} isValidDate={this.validStartDate}
                                inputProps={{ disabled: this.props.survey.available }} onChange={(value) => this.props.selectStartDate(value._d)} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>To</ControlLabel>
                        </Col>
                        <Col md={10}>
                            <DateTime value={this.props.survey.endDate} isValidDate={this.validEndDate}
                                onChange={(value) => this.props.selectEndDate(value._d)} />
                        </Col>
                    </FormGroup>
                </div>
                <div className="navigator">
                    <Button onClick={() => browserHistory.push("/add")}>
                        <span className="glyphicon glyphicon-arrow-left"></span>{"  "}Back
                    </Button>
                    <Button className="pull-right" bsStyle="success" type="submit" onClick={() => this.handleSubmit()}>
                        Finish {'  '}
                        <span className="glyphicon glyphicon-arrow-right"></span>
                    </Button>
                </div>
            </div>
        )
    }
}
Submit.PropTypes = {
    selectStartDate: PropTypes.func.isRequired,
    selectEndDate: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    survey: state.create,
    error: state.async.posterror,
    confirmation: state.vote.confirmation
})
const mapDispatchToProps = (dispatch) => ({
    selectStartDate: (value) => dispatch(selectStartDate(value)),
    selectEndDate: (value) => dispatch(selectEndDate(value)),
    setVisible: () => dispatch(setVisible()),
    setAvailable: () => dispatch(setAvailable()),
    submitSurveyToServer: (survey) => dispatch(submitSurveyToServer(survey))
})
export default connect(mapStateToProps, mapDispatchToProps)(Submit)
