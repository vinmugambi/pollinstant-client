import React, { Component } from "react"
import { Tabs, Tab } from 'react-bootstrap-tabs'

import TableOwn from "./TableOwn"
import TablePublic from "./TablePublic"
import Mock from '../mock'

class SurveyContainer extends Component {
    constructor() {
        super();
        this.state = {
            surveys: [],
            ownSurveys: []
        }
    }
    componentWillMount() {
        this.setState({
            surveys: Mock.Surveys,
            ownSurveys: Mock.OwnSurveys
        })
    }


    render() {
        return (
            <div className="container grad">
                <Tabs>
                    {this.state.ownSurveys ?
                        <Tab label="Your Surveys">
                            <TableOwn surveys={this.state.ownSurveys.surveys} />
                        </Tab> : null}
                    <Tab label="Public Surveys">
                        <TablePublic surveys={this.state.surveys.surveys} />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default SurveyContainer;