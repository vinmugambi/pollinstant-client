import React,{Component} from "react"
import Result from "./Result"
import Mock from "../mock"

class ViewResults extends Component{
    constructor(){
        super();
        this.state={
            survey:{}
        }
    }
    componentWillMount(){
        this.setState({
            survey: Mock.survey
        })
    }
    render(){
        console.log(this.state.survey)
        let  resu=this.state.survey.survey.questions.map((question,index)=>(
            <Result key={index} choices={question.choices} question={question.question}/>
        ))
        return(
            <div className="results container">
               <h4>{this.state.survey.survey.pollDescription}</h4>
               <p>Number of participants {" "}:{' '} {this.state.survey.survey.totalParticipants}</p>
                {resu}
            </div>
        )
    }
}
export default ViewResults;