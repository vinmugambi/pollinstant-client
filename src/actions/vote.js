import { SET_CURRENT_QUESTION, CAST_VOTE } from "../constants"

export const setCurrentQuestion = (index = 0) => dispatch => {
	console.log(index)
	return dispatch({ type: SET_CURRENT_QUESTION, index })
}
export const castVote = (updated) => (dispatch) => {
	dispatch({ type: CAST_VOTE, updated })
}
