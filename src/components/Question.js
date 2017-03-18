import React, { PropTypes } from "react"
import Choice from "./Choice";
import { FormGroup, InputGroup, ControlLabel, Col, FormControl, Glyphicon, Button } from "react-bootstrap"

const Question = (props) => {
    let addChoice = (e) => {
        let que = Number(e.target.id);
        props.ac(que);
    }
    let removeQuestion = (e) => {
        let que = Number(e.target.id);
        
        props.qd(que)
        console.log(e.target)
    }
    let updateQuestion = (e) => {
        let que = Number(e.target.id);
        let value=e.target.value;
        props.qu(que,value)
    }
    let ques = props.choices.map(choice => {
        let ki = `${choice.id} ${choice.q}`
        return (
            <Choice key={ki} id={choice.id} cd={props.cd} ci={props.ci} text={choice.text} pl={choice.placeholder} q={choice.q} />
        )
    })
    return (
        <div className="QuestionForm">
            <form>
                <div className="question">
                    <FormGroup bsSize="small" style={{ paddingBottom: "1.5em" }}>
                        <Col md={2} lg={2} >
                            <ControlLabel>Question{' '} {props.id + 1}</ControlLabel>
                        </Col>
                        <Col md={10} lg={10} >
                            <InputGroup>
                                <FormControl type="text" onChange={(e)=>updateQuestion(e)}
                                    value={props.text} id={Number(props.id)} placeholder={props.pl} />
                                <InputGroup.Addon>
                                    <Glyphicon glyph="trash" id={Number(props.id)} id={Number(props.id)}
                                     onClick={(e)=>removeQuestion(e)} />
                                </InputGroup.Addon>
                            </InputGroup>
                        </Col>

                    </FormGroup>
                    {ques}
                    <Button bsSize="small" bsStyle="warning" id={Number(props.id)} onClick={(e)=>addChoice(e)}>
                        <Glyphicon glyph="plus" />Add Another Choice</Button>
                </div>
            </form>
        </div>
    )

    
}


export default Question;