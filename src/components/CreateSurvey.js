import React, { Component } from "react";
//import { Connect, Provider } from "react-redux";
import Select from 'react-select';
import { FormGroup, FormControl, ControlLabel, Col, Checkbox, Button } from "react-bootstrap"
import { browserHistory } from "react-router";

class CreateSurvey extends Component {

    constructor() {
        super();
        this.state = {
            enable: false,
            options: {},
            targetCounties: [],
            targetMinEduLvl: null,
            targetMaxEduLvl: null,
            targetMinAge: '',
            targetMaxAge: '',
            targetSex: null,
            pollDescription: ""
        }

    }
    componentWillMount() {
        this.setState({
            options: {
                countyList: [
                    { label: "All Counties", value: "All Counties" },
                    { label: "Nairobi", value: "Nairobi" },
                    { label: "Nyeri", value: "Nyeri" },
                    { label: "Kisumu", value: "Kisumu" },
                    { label: "Makueni", value: "Makueni" }
                ],
                genderList: [
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                    { label: "All", value: "All" },

                ],
                educationList: [
                    { label: "No Education", value: "0" },
                    { label: "Primary Education", value: "1" },
                    { label: "Secondary Education", value: "2" },
                    { label: "Tertiary Education", value: "3" }
                ]
            }
        })
    }

    toggleEnabled(e) {
        this.setState({ enable: !this.state.enable });
    }
    handleSelectMinEdu(value) {
        this.setState({ targetMinEduLvl: value })
        console.log(this.state.targetMinEduLvl)
    }
    handleSelectMaxEdu(value) {
        this.setState({ targetMaxEduLvl: value })
    }
    handleSelectGender(value) {
        this.setState({ targetSex: value })
    }
    handleSelectCounties(value) {
        this.setState({ targetCounties: value });
    }
    handleBack() {
        browserHistory.push("/")
    }
    handleSelectTargets(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        browserHistory.push("/add")
    }
    render() {
        return (
            <div className="targetAudience container zeb">
                <Col md={9} mdOffset={1}>
                    <form>
                        <FormGroup>
                            <Col md={3}>
                                <ControlLabel> Name of your Poll</ControlLabel>
                            </Col>
                            <Col md={9}>
                                <FormControl type="text" name="pollDescription" onChange={this.handleSelectTargets.bind(this)} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col md={6}>
                                <ControlLabel>Do you want to target Specific Groups of respondents</ControlLabel>
                            </Col>
                            <Col md={1}>
                                <Checkbox checked={this.state.enable} onChange={this.toggleEnabled.bind(this)}>
                                    {this.state.enable ? 'Yes' : 'No'}
                                </Checkbox>
                            </Col>
                        </FormGroup>

                        <div className={this.state.enable ? "enabled" : "disabled text-centre"}>
                            <h3 style={{ textAlign: "center", color: "navy" }}> Target Groups</h3>
                            <FormGroup>
                                <Col md={3}>
                                    <ControlLabel>Target Gender </ControlLabel>
                                </Col>
                                <Col md={9}>
                                    <Select simpleValue disabled={!this.state.enable} value={this.state.targetSex}
                                        searchable={false} placeholder="Select Target Gender" name="targetSex"
                                        options={this.state.options.genderList}
                                        onChange={this.handleSelectGender.bind(this)} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={3}>
                                    <ControlLabel> Target Education </ControlLabel>
                                </Col>
                                <Col md={4}>
                                    <Select simpleValue disabled={!this.state.enable} value={this.state.targetMinEduLvl}
                                        options={this.state.options.educationList} searchable={false} name="targetMinEduLvl"
                                        placeholder="Minimum Education" onChange={this.handleSelectMinEdu.bind(this)} />
                                </Col>
                                <Col md={5}>
                                    <Select simpleValue disabled={!this.state.enable} value={this.state.targetMaxEduLvl}
                                        name="targetMaxEduLvl" onChange={this.handleSelectMaxEdu.bind(this)}
                                        options={this.state.options.educationList} searchable={false} placeholder="Maximum Education" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={3}>
                                    <ControlLabel>Target Age</ControlLabel>
                                </Col>
                                <Col md={4}>
                                    <FormControl disabled={!this.state.enable} type="number" name="targetMinAge"
                                        onChange={this.handleSelectTargets.bind(this)}
                                        value={this.state.targetMinAge} placeholder="Minimum Age" min={12} max={this.state.targetMaxAge} />
                                </Col>
                                <Col md={5}>
                                    <FormControl disabled={!this.state.enable} type="number" name="targetMaxAge"
                                        onChange={this.handleSelectTargets.bind(this)}
                                        value={this.state.targetMaxAge} placeholder="Maximum Age" min={this.state.targetMinAge} max={90} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={3}>
                                    <ControlLabel>Target Counties </ControlLabel>
                                </Col>
                                <Col md={9}>
                                    <Select simpleValue multi disabled={!this.state.enable} value={this.state.targetCounties}
                                        searchable={false} options={this.state.options.countyList} onChange={this.handleSelectCounties.bind(this)} />
                                </Col>
                            </FormGroup>

                        </div>
                        <div className="navigator">
                            <Button onClick={this.handleBack.bind(this)}>
                                <span className="glyphicon glyphicon-arrow-left"></span>{"  "}Back </Button>
                            <Button className="pull-right" bsStyle="primary" type="submit" onClick={this.handleSubmit.bind(this)}>
                                Next {'  '}
                                <span className="glyphicon glyphicon-arrow-right"></span></Button>
                        </div>
                    </form>
                </Col>
            </div>
        )
    }
}

export default CreateSurvey;