import React from 'react'
import { Link } from 'react-router-dom'
import { useRandomUser } from '../hooks'

export default props => {
  const { randomUser, going, notgoing } = useRandomUser()

  return (
    <div className="randomUser">
      <img src={randomUser.img} alt="" />
      <p>Name: {randomUser.name}</p>
      <p>Phone: {randomUser.phone}</p>
      <p>Email: {randomUser.email}</p>
      <button onClick={e => going(randomUser)}>Going</button>
      <button onClick={e => notgoing(randomUser)}>Notgoing</button>
      <Link to='/going'><button>Going Page</button></Link>
    </div>

  )
}