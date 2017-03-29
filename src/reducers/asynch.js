import {
    RECEIVE_OWN_SURVEYS, RECEIVE_SURVEYS, RECEIVE_GET_ERROR,
    RECEIVE_SURVEY_RESULTS, RECEIVE_POST_ERROR
} from "../constants";

const async = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_OWN_SURVEYS: return {...state, ownSurveys: action.surveys };
        case RECEIVE_SURVEYS: return {...state, surveys: action.surveys };
        case RECEIVE_GET_ERROR: return {...state, error: action.error };
        case RECEIVE_POST_ERROR: return {...state, posterror: action.error }
        case RECEIVE_SURVEY_RESULTS: return {...state, surveyViewable: action.survey }
        default: return state;
    }
}
export default async;
