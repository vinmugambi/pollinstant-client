import React, { PropTypes } from "react"
import { FormGroup, InputGroup, ControlLabel, Col, FormControl, Glyphicon } from "react-bootstrap"

const Choice = ({text, id, pl, q, cd, ci}) => {
    let deleteChoice = (e) => {
        let que =Number(e.target.parentNode.id);
        let cho = Number(e.target.id)
        console.log(que,cho);
        cd(que,cho)
    }

    let updateChoice = (e) => {
        let que = Number(e.target.name);
        let cho = Number(e.target.id)
        let value=e.target.value
        console.log(que,cho)
        ci(que, cho,value);
    }

    return (
        <div className="choice">
            <FormGroup bsSize="small">
                <Col md={2}>
                    <ControlLabel> Choice{" "}{id + 1}</ControlLabel>
                </Col>
                <Col md={10}>
                    <InputGroup>
                        <InputGroup.Addon id={String(q)}>
                            <Glyphicon glyph="trash" id={String(id)} onClick={(e)=>deleteChoice(e)}/>
                        </InputGroup.Addon>
                        <FormControl type="text" name={String(q)} onChange={(e)=>updateChoice(e)}
                            id={String(id)} value={text} placeholder={pl} />

                    </InputGroup>
                </Col>
            </FormGroup>
        </div>
    )
}
Choice.PropTypes = {
    ci: PropTypes.func.isRequired,
    cd: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    pl: PropTypes.number.isRequired
}
export default Choice;

