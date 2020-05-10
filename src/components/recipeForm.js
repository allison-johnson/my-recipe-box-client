import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export class RecipeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      url: '',
      img_url: '',
      category_id: 0
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newRecipe = {...this.state}
    console.log("newRecipe: ", newRecipe)
    this.props.addRecipe(newRecipe)
    // this.setState({
    //   name: '',
    //   url: '',
    //   img_url: '',
    //   category_id: 0
    // })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  render() {
    console.log("Inside RecipeForm render")
    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <FormControl type="text" name="name" placeholder="Recipe Name" className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <FormControl type="text" name="url" placeholder="Recipe URL" className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <FormControl type="text" name="img_url" placeholder="Image URL" className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <Form.Group>
          <Form.Control as="select" name="category_id" onChange={event => this.handleChange(event)}>
            {this.props.categories.map(category => <option value={category.id}>{category.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Button type="submit">Add Recipe to Box</Button>
      </Form> 
    )
  }//render
}//class

export default RecipeForm
