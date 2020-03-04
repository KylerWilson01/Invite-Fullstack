import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_RANDOM_USER = "user/GET_RANDOM_USER"

const initialState = {
  randomUser: [],
  usersGoing: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_USER:
      return { ...state, randomUser: action.payload }
    // case ADD_USER_GOING:
    //   return { ...state, userGoing: [...state.usersGoing, action.payload] }
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

function addUserNotGoing(id) {
  return dispatch => {
    // axios.post('/api/notgoing').then(resp => { })
    dispatch(getRandomUser())
  }
}

export function useRandomUser() {
  const dispatch = useDispatch()
  const randomUser = useSelector(appState => appState.randomUserState.randomUser)

  const get = () => dispatch(getRandomUser())
  const going = user => dispatch(addUsersGoing(user))
  const notgoing = id => dispatch(addUserNotGoing(id))

  useEffect(() => {
    dispatch(getRandomUser())
  }, [dispatch])

  return { randomUser, get, going, notgoing }
}
