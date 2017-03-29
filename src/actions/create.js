import {
	TOGGLE_ENABLED, SELECT_GENDER, SELECT_COUNTY, SELECT_MIN_EDU,
	SELECT_MAX_EDU, SELECT_TARGETS, ADD_CHOICE, ADD_QUESTION, CHOICE_INPUTS,
	CHOICE_DELETE, QUESTION_DELETE, QUESTION_INPUTS, SELECT_START_DATE,
	SELECT_END_DATE, SET_VISIBLE, SET_AVAILABLE
} from "../constants";

export const toggleEnabled = () => dispatch => dispatch({ type: TOGGLE_ENABLED });
export const selectGender = (gender) => dispatch => dispatch({ type: SELECT_GENDER, gender });
export const selectCounties = (county) => dispatch => dispatch({ type: SELECT_COUNTY, county });
export const selectTargets = (name, value) => dispatch => dispatch({ type: SELECT_TARGETS, name, value });
export const selectMinEdu = (value) => dispatch => dispatch({ type: SELECT_MIN_EDU, value });
export const selectMaxEdu = (value) => dispatch => dispatch({ type: SELECT_MAX_EDU, value });



export const addChoice = (questionId) => dispatch => {
	return dispatch({ type: ADD_CHOICE, questionId });
}

export const addQuestion = (length) => dispatch => {
	let question = {
		text: "",
		choices: [
			{ text: '', },
			{ text: '', },
			{ text: '', }
		]
	}
	return dispatch({ type: ADD_QUESTION, question });
}

export const choiceInputs = (questionId, choiceId, value) => dispatch => {
	return dispatch({ type: CHOICE_INPUTS, questionId, choiceId, value });
}

export const choiceDelete = (questionId, choiceId) => dispatch => {
	return dispatch({ type: CHOICE_DELETE, questionId, choiceId });
}

export const questionDelete = (questionId) => dispatch => {
	return dispatch({ type: QUESTION_DELETE, questionId });
}

export const questionInputs = (questionId, value) => dispatch => {
	return dispatch({ type: QUESTION_INPUTS, questionId, value });
}

export const selectStartDate = (value) => dispatch => dispatch({ type: SELECT_START_DATE, value })
export const selectEndDate = (value) => dispatch => dispatch({ type: SELECT_END_DATE, value })
export const setAvailable = () => dispatch => dispatch({ type: SET_AVAILABLE })
export const setVisible = () => dispatch => dispatch({ type: SET_VISIBLE })
