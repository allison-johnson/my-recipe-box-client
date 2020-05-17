import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { withRouter } from 'react-router-dom'

const Logout = ({history, logout}) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push('/')
    }} style={{margin: '10px'}}>
        <input type="submit" value="Log Out" />
    </form>
  )
}

export default withRouter(connect(null, { logout })(Logout))