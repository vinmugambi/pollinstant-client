import React from "react"
import {Button, Glyphicon} from "react-bootstrap"
import {browserHistory} from "react-router"

const Congratulate=()=>{
    
    return(
        <div className="container zeb">
            <h3> Congratulation for attending this Poll </h3>
            <br/>
            <Button className="pull-right"onClick={()=>browserHistory.push("/")}><Glyphicon glyph="home"/>{" "}Go Back Home</Button>
        </div>

    )
}
export default Congratulate;