import React from "react"
import { Fade, Alert, Button } from "react-bootstrap";
import { browserHistory } from "react-router"

const ErrorNotify = ({error, confirmation}) => (

	<Fade in={true} timeout={3000}>
		<div className='text-center'>
			<Alert bsStyle={error ? "danger" : "success"} className="pull-center">
				<span className="glyphicon glyphicon-exclamation-sign"></span>
				<p><strong>{error ? error : confirmation}</strong></p>
				<Button bsStyle={error ? "danger" : "success"} bsSize="small"
					onClick={() => browserHistory.push('/')}>Go Back Home</Button>
			</Alert>
		</div>
	</Fade>
)

export default ErrorNotify;
