import { SELECT_TARGET, ADD_CHOICE, ADD_QUESTION, REMOVE_CHOICE, REMOVE_QUESTION } from '../constants'
let choiceId = 0;
let questionId = 0;

//Data actions
export const selectTarget = (name,target) => ({
    type: SELECT_TARGET,
    target
})

export const addChoice = (choice, qId) => ({
    type: ADD_CHOICE,
    id: choiceId++,
    text,
    qId
})

export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    id: questionId++,
    question
})

export const RemoveQuestion = (id) => ({
    type: REMOVE_QUESTION,
    id
})

export const RemoveChoice = (id, qId) => ({
    type: REMOVE_CHOICE,
    id,
    qId
})

// ui Actions

export const addAnotherQuestion = () => ({
    type: "add_another_question"
})

export const addAnotherChoice = () => ({
    type: "add_another_choice"
})