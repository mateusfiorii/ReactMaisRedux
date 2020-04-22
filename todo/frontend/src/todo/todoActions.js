import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (e) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}

export const add = (description) => {
    return (dispatch) => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return (dispacth) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then((resp) => dispacth({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then((resp) => dispacth(search()))
    }
}

export const markAsPending = (todo) => {
    return (dispacth) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then((resp) => dispacth({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then((resp) => dispacth(search()))
    }
}

export const remove = (todo) => {
    return (dispacth) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispacth(search()))
    }
}

export const clear = () => {
    return [{
        type: 'TODO_CLEAR'
    }, search()]
}