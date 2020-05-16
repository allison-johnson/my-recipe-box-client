import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newUser = {...this.state}
    console.log("newUser in handleSubmit: ", newUser)
    this.props.signup(newUser, this.props.history)
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
        <Button type="submit" variant="outline-success" style={{margin: '10px'}}>Sign Up</Button>
      </Form>
    )
  }//render
}//class

export default Signup
