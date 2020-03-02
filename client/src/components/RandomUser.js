import React from 'react'
import { useRandomUser } from '../hooks'

export default props => {
  const { randomUser, get, going, notgoing } = useRandomUser()

  return (
    <div className="randomUser">
      <img src={randomUser.picture.thumbnail} alt="" />
      <p>Name: {randomUser.name.first} {randomUser.name.last}</p>
      <p>Phone: {randomUser.phone}</p>
      <p>Email: {randomUser.email}</p>
      <button onClick={get}>Get</button>
      <button onClick={going}>Going</button>
      <button onClick={notgoing}>Not Going</button>
    </div>

  )
}