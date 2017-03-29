import {
	TOGGLE_ENABLED, SELECT_GENDER, SELECT_COUNTY, SELECT_MIN_EDU, SELECT_MAX_EDU,
	SELECT_TARGETS, ADD_CHOICE, ADD_QUESTION, CHOICE_INPUTS, CHOICE_DELETE,
	QUESTION_DELETE, QUESTION_INPUTS, SELECT_START_DATE, SELECT_END_DATE, SET_VISIBLE,
	SET_AVAILABLE
} from "../constants";

let initialState = {
	options: {
		countyList: [
			{ label: "All Counties", value: "All Counties" },
			{ label: "Nairobi", value: "Nairobi" },
			{ label: "Nyeri", value: "Nyeri" },
			{ label: "Kisumu", value: "Kisumu" },
			{ label: "Makueni", value: "Makueni" }
		],
		genderList: [
			{ label: "Male", value: "Male" },
			{ label: "Female", value: "Female" },
			{ label: "All", value: "All" },

		],
		educationList: [
			{ label: "No Education", value: "0" },
			{ label: "Primary Education", value: "1" },
			{ label: "Secondary Education", value: "2" },
			{ label: "Tertiary Education", value: "3" }
		]
	},
	questions: [
		{
			question: "",
			choices: [
				{ text: '', },
				{ text: '', },
				{ text: "", }
			]
		}
	],
	enable: false,
	targetCounties: "All Counties",
	targetMinEduLvl: 0,
	targetMaxEduLvl: 0,
	targetSex: "All",
	targetMinAge: 0,
	targetMaxAge: 90,
	pollDescription: '',
	available: false,
	visible: false,
	startDate: new Date(),
	endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2)
}

const create = (state = {...initialState }, action)=>{
	switch (action.type) {
		case TOGGLE_ENABLED: return {...state, enable: !state.enable };
		case SELECT_GENDER: return {...state, targetSex: action.gender };
		case SELECT_COUNTY: return {...state, targetCounties: action.county };
		case SELECT_TARGETS: return {...state, [action.name]: action.value };
		case SELECT_MIN_EDU: return {...state, targetMinEduLvl: action.value };
		case SELECT_MAX_EDU: return {...state, targetMaxEduLvl: action.value };
		case ADD_QUESTION: return {...state, questions: state.questions.concat(action.question) };
		case ADD_CHOICE: {
			let updated = state.questions.map((question, index) => {
				if (index === action.questionId) {
					let choice = { text: "" }
					question.choices = question.choices.concat(choice)
					return question
				} else return question
			})
			return {...state, questions: updated }
		}
		case QUESTION_DELETE: {
			let updated = state.questions.filter((question, index) => index !== action.questionId);
			return {...state, questions: updated }
		}
		case CHOICE_DELETE: {
			let updated = state.questions.map((question, index) => {
				if (index === action.questionId) {
					question.choices = question.choices.filter((choice, index) => index !== action.choiceId)
					return question
				} else return question
			})
			return {...state, questions: updated }
		}
		case QUESTION_INPUTS: {
			let updated = state.questions.map((question, index) => (index === action.questionId) ? ({...question, question: action.value}):question)
			return {...state, questions: updated }
	}
	 case CHOICE_INPUTS: {
		let updated = state.questions.map((question, index) => {
			if (index === action.questionId) {
				let choicesupdated = question.choices.map((choice, index) => (index === action.choiceId) ? {...choice, text: action.value}: choice)
		question.choices = choicesupdated;
		return question
			 }else return question
})
return {...state, questions: updated }
	 }
	 case SELECT_START_DATE: return {...state, startDate: action.value };
	 case SELECT_END_DATE: return {...state, endDate: action.value };
	 case SET_AVAILABLE: return {...state, available: !state.available };
	 case SET_VISIBLE: return {...state, visible: !state.visible }
	 default: return state
 }
}

export default create;
