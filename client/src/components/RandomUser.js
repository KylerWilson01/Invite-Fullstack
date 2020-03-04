import React from 'react'
import { Link } from 'react-router-dom'
import { useRandomUser } from '../hooks'

export default props => {
  const { randomUser, going, notgoing } = useRandomUser()

  return (
    <div className="randomUser">
      <div className="links">
        <Link to='/going'><p className="going">GOING</p></Link>
        <Link to='/notgoing'><p className="notGoing">NOT GOING</p></Link>
      </div>
      <img className="randomImg" src={randomUser.img} alt="" />
      <p className="randomName">Name: {randomUser.name}</p>
      <p className="randomPhone">Phone: {randomUser.phone}</p>
      <p className="randomEmail">Email: {randomUser.email}</p>
      <div className="sectionButtons">
        <button className="randomGoing" onClick={e => going(randomUser)}>Going</button>
        <button className="randomNotGoing" onClick={e => notgoing(randomUser)}>Notgoing</button>
      </div>
    </div>

  )
}