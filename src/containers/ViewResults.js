import React, { Component, PropTypes } from "react";
//import {Table} from "react-bootstrap"
import { connect } from "react-redux"

import { fetchSurveyResults } from "../actions";
import ErrorNotify from "../components/ErrorNotify"
import Loading from "../components/Loading"
import Result from "../components/Result"

class ViewResults extends Component {
	componentDidMount() {
		this.props.fetchResults(this.props.params.id);
	}

	render() {
		let resu;
		if (this.props.surveyViewable) {
			resu = this.props.surveyViewable.survey.questions.map((question, index) => (
				<Result key={index} choices={question.choices} question={question.question || question.text} />
			))
		}
		return (
			<div className={this.props.error ? "container" : "container grad"}>
				{(!this.props.error && !this.props.surveyViewable) ?
					<Loading />
					: null}
				{this.props.error ?
					<ErrorNotify error={this.props.error} />
					: null}
				{this.props.surveyViewable ?
					<div>
						<ErrorNotify confirmation={this.props.surveyViewable.message} />
						<h4>{this.props.surveyViewable.survey.pollDescription}</h4>
						<p>Number of participants {" "}:{' '} {this.props.surveyViewable.survey.totalParticipants}</p>
					</div>
					: null}
				{resu}

			</div>
		)
	}
}
ViewResults.PropTypes = {
	fetchResults: PropTypes.func.isRequired,
	surveyViewable: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
	surveyViewable: state.async.surveyViewable,
	error: state.async.error
})
const mapDispatchToProps = (dispatch) => ({
	fetchResults: (id) => dispatch(fetchSurveyResults(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewResults);
