import React, { Component } from "react"
import { Button, Col, FormGroup, ControlLabel } from "react-bootstrap"
import DateTimeField from "react-bootstrap-datetimepicker"

class Submit extends Component {
    constructor() {
        super();
        this.state = {
            start: '',
            end: ''
        }
    }
    componentWillMount() {
        this.setState({
            start:'',
            end: ''
        })
    }
    render() {
        return (
            <div className="container col-md-9 col-md-offset-1 zeb">
                <h3> Select the period your survey will be live on our site</h3>
                <FormGroup>
                    <Col md={2}>
                        <ControlLabel>From</ControlLabel>
                    </Col>
                    <Col md={10}>
                        <DateTimeField />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col md={2}>
                        <ControlLabel>To</ControlLabel>
                    </Col>
                    <Col md={10}>
                        <DateTimeField />
                    </Col>
                </FormGroup>
                <div className="navigator">
                    <Button>
                        <span className="glyphicon glyphicon-arrow-left"></span>{"  "}Back
                    </Button>
                    <Button className="pull-right" bsStyle="success" type="submit">
                        Finish {'  '}
                        <span className="glyphicon glyphicon-arrow-right"></span>
                    </Button>
                </div>
            </div>
        )
    }
}
export default Submit