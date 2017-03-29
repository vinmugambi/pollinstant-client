import { combineReducers } from "redux"
import async from "./asynch"
import vote from "./vote"
import create from "./create"

const reducer = combineReducers({
  async, vote, create
})
export default reducer;
