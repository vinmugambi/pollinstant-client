import React, { Component } from "react"
import { Button } from "react-bootstrap"
import Mock from "../mock"
import {browserHistory} from "react-router"

class Vote extends Component {
    constructor() {
        super();
        this.state = {
            survey: {},
            votes: [],
            currentQuestion: {},
            start: '',
            votes:[],
            counter:""
        }
    }
    incr() {
        return this.state.start++
    }
    componentWillMount() {
        this.setState({
            survey: Mock.survey,
            currentQuestion: Mock.survey.survey.questions[0],
            votes: [],
            start: 0,
            counter:1
        })
        console.log(this.state.votes)
    }
    generateEmpty(){
        let empty=[];
        let i=0;
        while(i<this.state.survey.survey.questions.length){
            let vote={[i]: 0}
            i++;
            empty.push(vote)
        }
        return empty;
    }
    componentDidMount(){
        console.log("i mounted")

        this.setState({votes: this.generateEmpty()})
        console.log(this.state.votes)
    }
    inc() {
           return ++this.state.start
    }
    setCurrentQuestion(id) {
        let i=0
        let iterator = this.state.survey.survey.questions[this.inc()]
        //let current=iterator.next().value;
            this.setState({
            currentQuestion: iterator,
            counter: this.state.counter+1
          })
        console.log(this.state.currentQuestion,this.state.counter)
    }
    vote(e) {
        let que=this.state.survey.survey.questions.findIndex(question=>(
            question==this.state.currentQuestion))
        let id=Number(e.target.id )
        let choice = {
            [que]:id
        }
        let updated=this.state.votes.map((quest,index)=>{
            if (index===que) return {...quest,[que]:id};
            else return quest
        })
        this.setState({
            votes: updated
        })
    }
    congratulate(){
        browserHistory.push('/finish')
    }
    render() {
        console.log(this.state.votes)
        let choices = this.state.currentQuestion.choices.map((choice, index) => (
            <div className="col-xs-offset-1 col-sm-offset-2 radio" >
                <input type="radio" id={String(index)} onChange={(e)=>this.vote(e)} key={index} name="vote" value={String(index)} />
                <label htmlFor={String(index)}>{choice.text}</label>
                <break />
            </div>
        ))

        return (
            <div className="container grad vote">
                <h4>{this.state.currentQuestion.question}</h4>
                {choices}
                <Button className={this.state.counter<this.state.survey.survey.questions.length ? "pull-right btn-primary":"pull-right btn-success"}  
                onClick={this.state.counter<this.state.survey.survey.questions.length?()=>this.setCurrentQuestion():()=>this.congratulate()}>
                    {this.state.counter<this.state.survey.survey.questions.length ?"Next":"Finish"} {'  '}
                    <span className="glyphicon glyphicon-arrow-right"></span>
                </Button>
            </div>
        )
    }
}

export default Vote;

/*  let inc=()=>{
            inc.n=inc.n||0;
            return inc.n++
       }
       let question=this.state.survey.survey.questions[inc()]
       let choices=question.choices.map(choice=>(
           <RadioGroup>
               <Radio /> 
           </RadioGroup>
       ))  */