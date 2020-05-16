import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap'
//import { updateLoginForm } from '../actions/loginForm.js'
//import { login } from '../actions/currentUser.js'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    console.log("this.props.history inside handleSubmit login form: ", this.props.history)
    event.preventDefault()
    let newSession = {...this.state}
    this.props.login(newSession, this.props.history) //update login in App's MDTP
  }//handleSubmit

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  render() {
    return (
      <Form inline onSubmit={event => this.handleSubmit(event)}>
        <FormControl type="text" name="email" placeholder="Email" className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <FormControl type="password" name="password" placeholder="Password" className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <Button type="submit" variant="outline-success" style={{margin: '10px'}}>Log In</Button>
      </Form>
    )
  }//render
}//class

export default Login
