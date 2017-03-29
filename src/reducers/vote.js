import {
  CAST_VOTE, RECEIVE_SINGLE_SURVEY, SET_CURRENT_QUESTION, SET_EMPTY,
  RECEIVE_CONFIRMATION
} from "../constants"

let initialState = {
  survey: {},
  currentQuestion: {},
  votes: [],
  counter: 0
}

const vote = (state = {...initialState }, action)=>{
  switch (action.type) {
    case RECEIVE_SINGLE_SURVEY: return {...state, survey: action.survey }
    case SET_CURRENT_QUESTION: return {...state, currentQuestion: state.survey.survey.questions[action.index], counter: state.counter + 1 }
    case SET_EMPTY: return {...state, votes: action.empty }
    case CAST_VOTE: return {...state, votes: action.updated }
    case RECEIVE_CONFIRMATION: return {...state, confirmation: action.confirmation }
    default: return state;
  }
}
export default vote;
