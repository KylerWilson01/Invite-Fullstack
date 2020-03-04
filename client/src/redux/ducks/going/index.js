// import { useSelector, useDispatch } from "react-redux"
// import axios from "axios"
// import { useEffect } from "react"

// const GET_USERS_GOING = "going/USERS_GOING"

// const initialState = {
//   usersGoing: []
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USERS_GOING:
//       return { ...state, usersGoing: action.payload }
//     default:
//       return state
//   }
// }

// function getGoingUsers() {
//   return dispatch => {
//     axios.get('/usersgoing').then(resp => {
//       dispatch({
//         type: GET_USERS_GOING,
//         payload: resp.data
//       })
//     })
//   }
// }


// export function useUserGoing() {
//   const dispatch = useDispatch()
//   const goingUser = useSelector(appState => appState.userGoingState.usersGoing)

//   return { goingUser }
// }

