import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_RANDOM_USER = "user/GET_RANDOM_USER"
const GET_USERS_GOING = "users/GET_USERS_GOING"
const GET_USERS_NOT_GOING = "users/GET_USERS_NOT_GOING"

const initialState = {
  randomUser: [],
  usersGoing: [],
  usersNotGoing: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_USER:
      return { ...state, randomUser: action.payload }
    case GET_USERS_GOING:
      return { ...state, usersGoing: action.payload }
    case GET_USERS_NOT_GOING:
      return { ...state, usersNotGoing: action.payload }
    default:
      return state
  }
}

function getRandomUser() {
  return dispatch => {
    axios.get("/api/randomUser").then(resp => {
      dispatch({
        type: GET_RANDOM_USER,
        payload: resp.data
      })
    })
  }
}


function addUsersGoing(user) {
  return dispatch => {
    axios.post('/api/going', { user }).then(resp => {
      dispatch(getRandomUser())
    })
  }
}

function getGoingUsers() {
  return dispatch => {
    axios.get('/api/going').then(resp => {
      dispatch({
        type: GET_USERS_GOING,
        payload: resp.data
      })
    })
  }
}

function addUserNotGoing(user) {
  return dispatch => {
    axios.post('/api/notgoing', { user }).then(resp => {
      dispatch(getRandomUser())
    })
  }
}

function getNotGoingUsers() {
  return dispatch => {
    axios.get('/api/notgoing').then(resp => {
      dispatch({
        type: GET_USERS_NOT_GOING,
        payload: resp.data
      })
    })
  }
}

export function useRandomUser() {
  const dispatch = useDispatch()
  const randomUser = useSelector(appState => appState.randomUserState.randomUser)
  const usersGoing = useSelector(appState => appState.randomUserState.usersGoing)
  const usersNotGoing = useSelector(appState => appState.randomUserState.usersNotGoing)

  // const get = () => dispatch(getRandomUser())
  const going = user => dispatch(addUsersGoing(user))
  // const getGoing = () => dispatch(getGoingUsers())
  const notgoing = user => dispatch(addUserNotGoing(user))

  useEffect(() => {
    dispatch(getRandomUser())
    dispatch(getGoingUsers())
    dispatch(getNotGoingUsers())
  }, [dispatch])

  return { randomUser, usersGoing, usersNotGoing, going, notgoing }
}
