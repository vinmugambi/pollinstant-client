import React from 'react'
import {browserHistory} from "react-router";
import {Button,Glyphicon} from "react-bootstrap"

const Unfinished=()=>{
    return(
        <div className="container zeb">
            <h4>This Route Is Still Under Construction</h4>
            <Button className="pull-right"onClick={()=>browserHistory.push("/")}><Glyphicon glyph="home"/>{" "}Go Back Home</Button>
        </div>
    )
}

export default Unfinished