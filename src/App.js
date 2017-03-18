import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import SurveyContainer from './components/SurveyContainer'
import CreateSurvey from './components/CreateSurvey'
import AddQuestions from './components/AddQuestions'
import Submit from './components/Submit'
import Vote from "./components/Vote"
import Congratulate from "./components/Congratulate"
import Unfinished from "./components/UnderConstruction"
import ViewResults from "./components/ViewResults"

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={SurveyContainer}/>
                <Route path={"create"} component={CreateSurvey}/>
                <Route path={"add"} component={AddQuestions}/>
                <Route path={"submit"} component={Submit}/>
                <Route path={"vote"} component={Vote}/>
                <Route path={"finish"} component={Congratulate}/>
                <Route path={"unfinished"} component={Unfinished}/>
                <Route path={"view"} component={ViewResults}/>
            </Router>
        )
    }
}

export default App;