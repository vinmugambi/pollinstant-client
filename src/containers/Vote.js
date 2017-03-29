import React, { Component, PropTypes } from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"

import { fetchSingleSurvey, submitVoteToServer } from "../actions"
import { setCurrentQuestion, castVote } from "../actions/vote.js"
import Loading from "../components/Loading"
import ErrorNotify from "../components/ErrorNotify"

class Vote extends Component {

	componentWillMount() {
		this.props.fetchSurvey(this.props.params.id)
	}

	voteFor(e) {
		let question = this.props.survey.survey.questions.findIndex(question => (question === this.props.currentQuestion))
		let id = Number(e.target.id);
		let updated = this.props.votes.map((quest, index) => {
			if (index === question) return {...quest, [question]: id}
		else return quest;
	})
return this.props.castVote(updated)
}

inc(){
	this.inc.n = this.inc.n || 0
	return ++this.inc.n
}

setQuestion(){
	let nextt = this.inc()
	return this.props.setCurrent(nextt);
}

submitVote(){
	this.props.submit(this.props.votes, this.props.survey.survey._id)
}
render(){
	var choices;
	if (this.props.currentQuestion.choices) {
		choices = this.props.currentQuestion.choices.map((choice, index) => (
			<div className="col-xs-offset-1 col-sm-offset-2 radio" >
				<input type="radio" id={String(index)} onChange={(e) => this.voteFor(e)} key={index} name="vote" value={String(index)} />
				<label htmlFor={String(index)}>{choice.text}</label>
				<break />
			</div>
		))
	}

	return (
		<div>
			{(!this.props.error && !this.props.survey.survey) ?
				<Loading />
				: null}
			{this.props.error ?
				<ErrorNotify error={this.props.error} />
				: null}
			{this.props.posterror ?
				<ErrorNotify error={this.props.posterror} />
				: null}
			{this.props.confirmation ?
				<ErrorNotify confirmation={this.props.posterror} />
				: null}
			{this.props.survey.survey && this.props.currentQuestion ?
				<div>
					<h4>{this.props.currentQuestion.question}</h4>
					{choices}
					<Button className={this.props.counter < this.props.survey.survey.questions.length ? "pull-right btn-primary" : "pull-right btn-success"}
						onClick={(this.props.counter < this.props.survey.survey.questions.length) ? () => this.setQuestion() : () => this.submitVote()}>
						{this.props.counter < this.props.survey.survey.questions.length ? "Next" : "Finish"} {'  '}
						<span className="glyphicon glyphicon-arrow-right"></span>
					</Button>
				</div>
				: null}
		</div>
	)
}
}

Vote.PropTypes = {
	fetchSurvey: PropTypes.func.isRequired,
	survey: PropTypes.object.isRequired,
	error: PropTypes.object,
	castVote: PropTypes.func.isRequired,
	submit: PropTypes.func.isRequired,
	counter: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
	survey: state.vote.survey,
	error: state.async.error,
	posterror: state.async.posterror,
	currentQuestion: state.vote.currentQuestion,
	votes: state.vote.votes,
	counter: state.vote.counter,
	confirmation: state.vote.confirmation
})

const mapDispatchToProps = (dispatch) => ({
	fetchSurvey: (id) => dispatch(fetchSingleSurvey(id)),
	setCurrent: (index) => dispatch(setCurrentQuestion(index)),
	castVote: (id) => dispatch(castVote(id)),
	submit: (vote, id) => dispatch(submitVoteToServer(vote, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
