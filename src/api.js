import axios from "axios";
// import qs from "qs";
import "whatwg-fetch";

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

let otherError = (response) => {
    console.log(response)
    if (response.data.success === true || response.data.sucess === true) {
        return response;
    }
    else {
        console.log(response)
        let error = new Error(response.data.message);
        console.log(error);
        throw error;
    }
}

axios.defaults.baseURL = 'http://127.0.0.1:4000/api';
axios.defaults.headers.common['Authorization'] = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJTMXUxazZ5aHgiLCJ1c2VybmFtZSI6Indla2VzYUB5YWhvby5jb20iLCJpYXQiOjE0OTA3MTYwNzksImV4cCI6MTQ5MDg4ODg3OX0.isvG_S5q4TLq4s_km71E6AwywjMpjSrm8cVGRQspVPw";

export const getSurveys = () => (
    axios.get("/listu")
        .then(checkStatus)
        .then(otherError)
)

export const getOwnSurveys = () => (
    axios.get("/list")
        .then(checkStatus)
        .then(otherError)
)

export const getSingle = (id) => (
    axios.get(`/survey/${id}`)
        .then(checkStatus)
        .then(otherError)
)

export const submitVote = (vote, id) => (
    axios.post(`/vote/${id}`, { vote })
        .then(checkStatus)
        .then(otherError)
)

export const submitSurvey = (survey) => (
    axios.post("/create", survey)
        .then(checkStatus)
        .then(otherError)
)
