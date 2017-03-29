import {
  RECEIVE_OWN_SURVEYS, RECEIVE_SURVEYS, REQUEST_OWN_SURVEYS,
  REQUEST_SURVEYS, RECEIVE_POST_ERROR, RECEIVE_GET_ERROR,
  REQUEST_SINGLE_SURVEY, RECEIVE_SINGLE_SURVEY, RECEIVE_SURVEY_RESULTS,
  REQUEST_SURVEY_RESULTS, SET_EMPTY, SET_CURRENT_QUESTION, SUBMIT_VOTE,
  RECEIVE_CONFIRMATION, SUBMIT_SURVEY
} from "../constants";
import { getOwnSurveys, getSurveys, getSingle, submitVote, submitSurvey } from "../api"

const requestSurveys = () => ({ type: REQUEST_SURVEYS });
const requestOwnSurveys = () => ({ type: REQUEST_OWN_SURVEYS });
const receiveOwnSurveys = (surveys) => ({ type: RECEIVE_OWN_SURVEYS, surveys })
const receiveSurveys = (surveys) => ({ type: RECEIVE_SURVEYS, surveys })
const receiveGetError = (error) => ({ type: RECEIVE_GET_ERROR, error })
const receivePostError = (error) => ({ type: RECEIVE_POST_ERROR, error })
const requestSingle = (id) => ({ type: REQUEST_SINGLE_SURVEY, id })
const receiveSingle = (survey) => ({ type: RECEIVE_SINGLE_SURVEY, survey })
const receiveSurveyResults = (survey) => ({ type: RECEIVE_SURVEY_RESULTS, survey })
const requestSurveyResults = (id) => ({ type: REQUEST_SURVEY_RESULTS, id })


export const fetchSurveys = () => {
  return (dispatch) => {
    dispatch(requestSurveys())
    getSurveys()
      .then(surveys => dispatch(receiveSurveys(surveys.data)))
      .catch(error => dispatch(receiveGetError(error.message)))
  }
}

export const fetchOwnSurveys = () => {
  return (dispatch) => {
    dispatch(requestOwnSurveys())
    getOwnSurveys()
      .then(ownSurveys => dispatch(receiveOwnSurveys(ownSurveys.data)))
      .catch(error => dispatch(receiveGetError(error.message)))
  }
}

export const fetchSurveyResults = (id) => (dispatch) => {
  dispatch(requestSurveyResults(id))
  getSingle(id)
    .then(survey => dispatch(receiveSurveyResults(survey.data)))
    .catch(error => dispatch(receiveGetError(error.message)))
}

const generateEmpty = (length) => {
  let i = 0, empty = [];
  while (i < length) {
    let vote = { [i]: 0 }
    i++;
    empty.push(vote);
  }
  return empty;
}

export const fetchSingleSurvey = (id) => (dispatch) => {
  dispatch(requestSingle(id))
  getSingle(id)
    .then(survey => {
      dispatch(receiveSingle(survey.data));
      return survey.data.survey.questions.length
    })
    .then(length => generateEmpty(length))
    .then(empty => dispatch({ type: SET_EMPTY, empty }))
    .then(() => dispatch({ type: SET_CURRENT_QUESTION, index: 0 }))
    .catch(error => dispatch(receiveGetError(error.message)))
}

export const submitVoteToServer = (vote, id) => (dispatch) => {
  dispatch({ type: SUBMIT_VOTE, id, vote })
  submitVote(vote, id)
    .then(confirmation => dispatch({ type: RECEIVE_CONFIRMATION, confirmation: confirmation.data.message }))
    .catch(error => dispatch(receivePostError(error.message)))
}

export const submitSurveyToServer = (survey) => dispatch => {
  dispatch({ type: SUBMIT_SURVEY })
  submitSurvey(survey)
    .then(confirmation => dispatch({ type: RECEIVE_CONFIRMATION, confirmation: confirmation.data.message }))
    .catch(error => dispatch(receivePostError(error.message)));
}
