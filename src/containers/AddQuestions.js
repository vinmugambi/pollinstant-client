import React, { Component, PropTypes } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { browserHistory } from "react-router"

import Question from "../components/Question";
import { addQuestion, addChoice, choiceInputs, choiceDelete, questionInputs, questionDelete } from "../actions/create"

class AddQuestions extends Component {

	handleNext() {
		browserHistory.push('/finish')
	}
	handleBack() {
		browserHistory.push('/create')
	}
	render() {
		let que = this.props.questions.map((question, index) => (
			<Question key={index} text={question.question} choices={question.choices}
				index={index} ac={(questionId) => this.props.addChoice(questionId)}
				ci={(questionId, choiceId, value) => this.props.choiceInputs(questionId, choiceId, value)}
				cd={(questionId, choiceId) => this.props.choiceDelete(questionId, choiceId)}
				qu={(questionId, value) => this.props.questionInputs(questionId, value)}
				qd={(questionId) => this.props.questionDelete(questionId)}
				/>
		))

		return (
			<div className="container grad">
				<h3 style={{ textAlign: "center", color: "navy" }}>Add Questions To Your Survey</h3>
				{que}
				<Button bsSize="small" onClick={() => this.props.addQuestion(this.props.questions.length)}>+Add Another Question</Button>
				<div className="navigator">
					<Button onClick={() => this.handleBack()}>
						<span className="glyphicon glyphicon-arrow-left" ></span>{' '}Back
				</Button>
					<Button className="pull-right" bsStyle="primary" type="submit" onClick={() => this.handleNext()}>
						Next{' '}
						<span className="glyphicon glyphicon-arrow-right"></span>
					</Button>

				</div>
			</div>
		)
	}
}

AddQuestions.PropTypes = {
	questions: PropTypes.array.isRequired,
	addChoice: PropTypes.func.isRequired,
	questionInputs: PropTypes.func.isRequired,
	choiceInputs: PropTypes.func.isRequired,
	questionDelete: PropTypes.func.isRequired,
	choiceDelete: PropTypes.func.isRequired,
	addQuestion: PropTypes.func.isRequired
}

const mapStateToProps = ({create}) => ({
	questions: create.questions
})

const mapDispatchToProps = (dispatch) => ({
	addChoice: (questionId) => dispatch(addChoice(questionId)),
	addQuestion: (length) => dispatch(addQuestion(length)),
	choiceInputs: (questionId, choiceId, value) => dispatch(choiceInputs(questionId, choiceId, value)),
	questionInputs: (questionId, value) => dispatch(questionInputs(questionId, value)),
	choiceDelete: (questionId, choiceId) => dispatch(choiceDelete(questionId, choiceId)),
	questionDelete: (questionId) => dispatch(questionDelete(questionId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestions);
