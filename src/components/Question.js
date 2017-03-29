import React from "react"
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
        let value = e.target.value;
        props.qu(que, value)
    }

    let ques = props.choices.map((choice, index) => {
        let key = `${props.index}-${index}`
        return (
            <Choice key={key} cd={props.cd} index={index} question={props.index}
                ci={props.ci} text={choice.text} />
        )
    })
    return (
        <div className="QuestionForm">
            <form>
                <div className="question">
                    <FormGroup bsSize="small" style={{ paddingBottom: "1.5em" }}>
                        <Col md={2} lg={2} >
                            <ControlLabel>Question{' '} {props.index + 1}</ControlLabel>
                        </Col>
                        <Col md={10} lg={10} >
                            <InputGroup>
                                <FormControl type="text" onChange={(e) => updateQuestion(e)}
                                    value={props.text} id={String(props.index)}
                                    placeholder={"Enter question number " + (props.index + 1)} />
                                <InputGroup.Addon>
                                    <Glyphicon glyph="trash" id={String(props.index)}
                                        onClick={(e) => removeQuestion(e)} />
                                </InputGroup.Addon>
                            </InputGroup>
                        </Col>

                    </FormGroup>
                    {ques}
                    <Button bsSize="small" bsStyle="info" id={Number(props.index)} onClick={(e) => addChoice(e)}>
                        +Add Another Choice</Button>
                </div>
            </form>
        </div>
    )


}


export default Question;
