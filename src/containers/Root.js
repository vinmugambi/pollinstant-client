import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from "react-router"

import configureStore from "../configureStore"
import SurveyList from "./SurveyList"
import ViewResults from "./ViewResults"
import Vote from "./Vote"
import CreateSurvey from "./CreateSurvey"
import AddQuestions from "./AddQuestions"
import Submit from "./Submit"

const store = configureStore();
class Root extends Component {
    render() {
        console.log(store.getState())
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" >
                        <IndexRoute component={SurveyList} />
                        <Route path="/view/:id" component={ViewResults} />
                        <Route path="/vote/:id" component={Vote} />
                        <Route path="/create" component={CreateSurvey} />
                        <Route path="/add" component={AddQuestions} />
                        <Route path="/finish" component={Submit} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}
export default Root;
