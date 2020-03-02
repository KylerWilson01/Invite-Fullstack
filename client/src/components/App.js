import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import RandomUser from './RandomUser'
import Going from './Going'
import Notgoing from './Notgoing'

export default props => {
  return (
    <Router>
      <Route exact path="/" component={RandomUser} />
      <Route path="/going" component={Going} />
      <Route path="/notgoing" component={Notgoing} />
    </Router>
  )
}
