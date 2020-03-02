import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const GET_RANDOM_USER = "ex/GET_RANDOM_USER"

const initialState = {
  randomUser: {
    name: {
      first: 'brad',
      last: 'gibson'
    },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    phone: '(000) 111-2222',
    email: 'contact@email.com'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_USER:
      return { ...state, randomUser: action.payload }
    default:
      return state
  }
}

function getRandomUser() {
  return dispatch => {
    axios.get("https://randomuser.me/api/").then(resp => {
      const data = resp.data.results[0]
      console.log(data)

      dispatch({
        type: GET_RANDOM_USER,
        payload: data
      })
    })
  }
}

function userGoing(user) {
  return dispatch => {
    axios.patch('/')
    getRandomUser()
  }
}

function userNotGoing(user) {
  return dispatch => {
    getRandomUser()
  }
}

export function useRandomUser() {
  const dispatch = useDispatch()
  const randomUser = useSelector(appState => appState.randomUserState.randomUser)

  const get = () => dispatch(getRandomUser())
  const going = user => dispatch(userGoing(user))
  const notgoing = user => dispatch(userNotGoing(user))

  useEffect(() => {
    dispatch(getRandomUser())
  }, [dispatch])

  return { randomUser, get, going, notgoing }
}
