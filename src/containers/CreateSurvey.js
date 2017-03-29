import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, ControlLabel, Col, Checkbox, Button } from "react-bootstrap"
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import Select from "react-select";

import { toggleEnabled, selectMaxEdu, selectMinEdu, selectGender, selectCounties, selectTargets } from "../actions/create"

class CreateSurvey extends Component {

	handleNext(e) {
		e.preventDefault();
		browserHistory.push("/add")
	}
	handleBack(e) {
		e.preventDefault();
		browserHistory.push("/add")
	}
	render() {
		return (
			<div className="targetAudience container grad">
				<Col md={9} mdOffset={1}>
					<form>
						<FormGroup>
							<Col md={3}>
								<ControlLabel> Name of your Poll</ControlLabel>
							</Col>
							<Col md={9}>
								<FormControl type="text" name="pollDescription" onChange={(e) => this.props.selectTargets(e.target.name, e.target.value)} />
							</Col>
						</FormGroup>

						<FormGroup>
							<Col md={6}>
								<ControlLabel>Do you want to target Specific Groups of respondents</ControlLabel>
							</Col>
							<Col md={1}>
								<Checkbox checked={this.props.enable} onChange={() => this.props.toggleEnabled()}>
									{this.props.enable ? 'Yes' : 'No'}
								</Checkbox>
							</Col>
						</FormGroup>

						<div className={this.props.enable ? "enabled" : "disabled text-centre"}>
							<h3 style={{ textAlign: "center", color: "navy" }}> Target Groups</h3>
							<FormGroup>
								<Col md={3}>
									<ControlLabel>Target Gender </ControlLabel>
								</Col>
								<Col md={9}>
									<Select simpleValue disabled={!this.props.enable} value={this.props.targetSex}
										searchable={false} placeholder="Select Target Gender" name="targetSex"
										options={this.props.options.genderList}
										onChange={(value) => this.props.selectGender(value)} />
								</Col>
							</FormGroup>

							<FormGroup>
								<Col md={3}>
									<ControlLabel> Target Education </ControlLabel>
								</Col>
								<Col md={4}>
									<Select simpleValue disabled={!this.props.enable} value={this.props.targetMinEduLvl}
										options={this.props.options.educationList} searchable={false} name="targetMinEduLvl"
										placeholder="Minimum Education" onChange={(value) => this.props.selectMinEdu(value)} />
								</Col>
								<Col md={5}>
									<Select simpleValue disabled={!this.props.enable} value={this.props.targetMaxEduLvl}
										name="targetMaxEduLvl" onChange={(value) => this.props.selectMaxEdu(value)}
										options={this.props.options.educationList} searchable={false} placeholder="Maximum Education" />
								</Col>
							</FormGroup>

							<FormGroup>
								<Col md={3}>
									<ControlLabel>Target Age</ControlLabel>
								</Col>
								<Col md={4}>
									<FormControl disabled={!this.props.enable} type="number" name="targetMinAge"
										onChange={(e) => this.props.selectTargets(e.target.name, e.target.value)}
										value={this.props.targetMinAge} placeholder="Minimum Age" min={12} max={this.props.targetMaxAge} />
								</Col>
								<Col md={5}>
									<FormControl disabled={!this.props.enable} type="number" name="targetMaxAge"
										onChange={(e) => this.props.selectTargets(e.target.name, e.target.value)}
										value={this.props.targetMaxAge} placeholder="Maximum Age" min={this.props.targetMinAge} max={90} />
								</Col>
							</FormGroup>

							<FormGroup>
								<Col md={3}>
									<ControlLabel>Target Counties </ControlLabel>
								</Col>
								<Col md={9}>
									<Select simpleValue multi disabled={!this.props.enable} value={this.props.targetCounties}
										searchable={false} options={this.props.options.countyList} onChange={(value) => this.props.selectCounties(value)} />
								</Col>
							</FormGroup>

						</div>
						<div className="navigator">
							<Button onClick={this.handleBack.bind(this)}>
								<span className="glyphicon glyphicon-arrow-left"></span>{"  "}Back </Button>
							<Button className="pull-right" bsStyle="primary" type="submit" onClick={this.handleNext.bind(this)}>
								Next {'  '}
								<span className="glyphicon glyphicon-arrow-right"></span></Button>
						</div>
					</form>
				</Col>
			</div>
		)
	}
}

CreateSurvey.PropTypes = {
	enable: PropTypes.bool.isRequired,
	options: PropTypes.object.isRequired,
	targetCounties: PropTypes.array.isRequired,
	targetMinAge: PropTypes.number.isRequired,
	targetMaxAge: PropTypes.number.isRequired,
	targetMinEduLvl: PropTypes.number.isRequired,
	targetMaxEduLvl: PropTypes.number.isRequired,
	targetSex: PropTypes.string.isRequired,
	pollDescription: PropTypes.string.isRequired,
}

const mapStatetoProps = ({create}) => ({
	enable: create.enable,
	targetSex: create.targetSex,
	options: create.options,
	targetCounties: create.targetCounties,
	targetMinAge: create.targetMinAge,
	targetMaxAge: create.targetMaxAge,
	targetMinEduLvl: create.targetMinEduLvl,
	targetMaxEduLvl: create.targetMaxEduLvl,
	pollDescription: create.pollDescription,
})

const mapDispatchToProps = (dispatch) => ({
	selectCounties: (county) => dispatch(selectCounties(county)),
	selectMaxEdu: (value) => dispatch(selectMaxEdu(value)),
	selectMinEdu: (value) => dispatch(selectMinEdu(value)),
	selectGender: (value) => dispatch(selectGender(value)),
	selectTargets: (name, value) => dispatch(selectTargets(name, value)),
	toggleEnabled: () => dispatch(toggleEnabled()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(CreateSurvey);
