import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap-tabs'

import TableOwn from "../components/TableOwn"
import TablePublic from "../components/TablePublic"
import ErrorNotify from "../components/ErrorNotify"
import Loading from "../components/Loading"
import { fetchOwnSurveys, fetchSurveys } from "../actions/index"

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchOwn()
        this.props.fetchPublic()
    }

    render() {
        console.log(this.props)
        return (
            <div className={this.props.error ? "container" : "container grad"}>
                {(!this.props.error && !this.props.surveys && !this.props.ownSurveys) ?
                    <Loading />
                    : null}
                {this.props.error ?
                    <ErrorNotify error={this.props.error} />
                    : null}

                {this.props.surveys ?
                    <Tabs>
                        {this.props.ownSurveys ?
                            <Tab label="My Surveys">
                                <TableOwn surveys={this.props.ownSurveys.surveys} />
                            </Tab> : null}
                        <Tab label="Public Surveys">
                            <TablePublic surveys={this.props.surveys.surveys} />
                        </Tab>
                    </Tabs>
                    : null}
            </div>
        )
    }
}

SurveyList.PropTypes = {
    fetchOwn: PropTypes.func.isRequired,
    fetchPublic: PropTypes.func.isRequired,
    ownSurveys: PropTypes.object.isRequired,
    surveys: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        surveys: state.async.surveys,
        ownSurveys: state.async.ownSurveys,
        error: state.async.error
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPublic: () => dispatch(fetchSurveys()),
    fetchOwn: () => dispatch(fetchOwnSurveys()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList)


