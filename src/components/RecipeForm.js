import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

/*
  A container component responsible for processing new
  recipe form; state used to generate a controlled form.
*/
export class RecipeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      url: '',
      img_url: '',
      category_id: 0,
      user_id: this.props.userId
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newRecipe = {...this.state}
    console.log('a')
    this.props.addRecipe(newRecipe)
    console.log('g')
    this.setState({
      name: '',
      url: '',
      img_url: '',
      category_id: 0
    })
  }//handleSubmit

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }//handleChange

  render() {
    return (
      <Form inline onSubmit={event => this.handleSubmit(event)} style={{margin: '10px'}}>
        <FormControl type="text" name="name" placeholder="Recipe Name" value={this.state.name} className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <FormControl type="text" name="url" placeholder="Recipe URL" value={this.state.url} className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <FormControl type="text" name="img_url" placeholder="Image URL" value={this.state.img_url} className="mr-sm-2" onChange={event => this.handleChange(event)} />
        <Form.Group>
          <Form.Control as="select" name="category_id" onChange={event => this.handleChange(event)}>
            <option>Category</option>
            {this.props.categories.map(category => <option value={category.id}>{category.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="outline-success" style={{margin: '10px'}}>Add Recipe to Box</Button>
      </Form> 
    )
  }//render
}//class

export default RecipeForm
