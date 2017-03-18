import React, { Component } from 'react';
import Question from "./Question"
import { Button } from "react-bootstrap";
//import { browserHistory } from "react-router";

class AddQuestions extends Component {
    constructor() {
        super();
        this.state = {
            mutated: "yeah",
            ui: [
                {
                    text: "",
                    placeholder: "Enter Question Number 1",
                    id: 0,
                    choices: [
                        { text: '', id: 0, q: 0, placeholder: "Enter Choice Number 1" },
                        { text: '', id: 1, q: 0, placeholder: "Enter Choice Number 2" },
                        { text: "", id: 2, q: 0, placeholder: "Enter Choice Number 3" }
                    ]
                }
            ]
        }
    }

    AddChoiceUi(_id = 0) {
        let ui = this.state.ui;
        let quest = this.state.ui[_id]
        let availableChoices = quest.choices.length;
        let choice = {
            text: '', id: availableChoices, q: _id, placeholder: `Enter Choice Number ${availableChoices + 1}`
        }
        ui[_id].choices[availableChoices] = choice
        this.setState({ ui: ui })
    }
    AddQuestionUi() {
        let numOfque = this.state.ui.length;
        let question = {
            text: "",
            placeholder: `Enter Question Number ${numOfque + 1} `,
            id: numOfque,
            choices: [
                { text: '', id: 0, q: numOfque, placeholder: "Enter Choice Number 1" },
                { text: '', id: 1, q: numOfque, placeholder: "Enter Choice Number 2" },
                { text: '', id: 2, q: numOfque, placeholder: "Enter Choice Number 3" }
            ]
        }
        this.setState({
            ui: this.state.ui.concat(question)
        })
    }
    handleNext() {

    }
    //repair
    handleChoiceInputs(quest = 0, choi = 0, value = "") {
        let updated = this.state.ui.map((question) => {
            if (question.id === quest) {
                let choiceu = question.choices.map(choice => (choice.id === choi) ? ({...choice, text:value}): choice)
            question.choices = choiceu;
        return question;
    }
            else return question
        })
this.setState({ ui: updated })
    }
handleChoiceDelete(quest = 0, choi = 0) {
    let updated = this.state.ui.map((question) => {
        if (question.id === quest) {
            question.choices = question.choices.filter(choice => choice.id !== choi)
            return question
        } else return question
    })
    this.setState({ ui: updated })
}
//repair
handleQuestionDelete(id = 0) {
    let updated = this.state.ui.filter((question) => question.id !== id)
    this.setState({ ui: updated })
}
handleQuestionInputs(id = 0, value = "") {
    let updated = this.state.ui.map(question => (question.id === id) ? ({...question, text:value}): question)
this.setState({ ui: updated })
    }

render() {
    console.log(this.state.ui);
    let que;
    if (this.state.ui) {
        que = this.state.ui.map((question) => (
            <Question key={question.id} id={question.id} pl={question.placeholder} 
            ac={this.AddChoiceUi.bind(this)}  ci={this.handleChoiceInputs.bind(this)}
            cd={this.handleChoiceDelete.bind(this)} qu={this.handleQuestionInputs.bind(this)}
            qd={this.handleQuestionDelete.bind(this)}
            text={question.text} choices={question.choices} />
        ))
    }
    return (
        <div className="addQuestions col-md-10 col-md-offset-1 zeb">
            <span className="glyphicon glyphicon-home"></span>
            <h3 style={{ textAlign: "center", color: "navy" }}>Add Questions To Your Survey</h3>
            {que}
            <Button bsSize="small" onClick={this.AddQuestionUi.bind(this)}>+Add Another Question</Button>
            <div className="navigator">
                <Button onClick={() => this.handleQuestionDelete(1)}>
                    <span className="glyphicon glyphicon-arrow-left" ></span>{' '}Back
                </Button>
                <Button className="pull-right" bsStyle="primary" type="submit" onClick={() => { this.handleChoiceDelete(0,0) } }>
                    Next{' '}
                    <span className="glyphicon glyphicon-arrow-right"></span>
                </Button>

            </div>
        </div>
    )
}
}
export default AddQuestions;
/*<Button bsSize="small" name="1" id="1" onClick={() => this.AddChoiceUi(1)} >+Addchoq2</Button>
<Button onClick={() => { this.handleChoiceInputs(0, 1, "yeah") } }>changeq1ch2</Button>
                <Button onClick={() => this.handleQuestionInputs(1, "what?")}>changeQ2</Button>
*/
