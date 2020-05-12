import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      recipe_id: props.recipe_id 
    }
  }//constructor

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }//handleChange

  render() {
    return (
      <Form inline onSubmit={event => this.handleSubmit(event)} >
        <FormControl type="text" name="content" placeholder="Recipe note" className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <Button type="submit" variant="success" size="sm">Add Note</Button>
      </Form>
    )//return
  }//render
}//class

export default NoteForm
