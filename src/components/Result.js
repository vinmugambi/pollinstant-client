import React from "react"
import { Table } from "react-bootstrap"

const Result = ({choices, question}) => {
    let choice = choices.map((choi, index) => (
        <tr key={index}>
            <td>{choi.text}</td>
            <td>{choi.votes}</td>
        </tr>
    ))
    return (
        <div className="result">
            <h5>{question}</h5>
            <Table responsive className="table-striped bordered">
                <thead>
                    <tr>
                        <th className="choice">Choices</th>
                        <th className="vote">Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {choice}
                </tbody>
            </Table>
        </div>
    )
}

export default Result
