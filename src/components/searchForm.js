import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import SearchResults from './SearchResults'
// import RecipeCards from './RecipeCards'

export class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      filteredRecipes: []
    }
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      filteredRecipes: this.getRecipes(this.state.query)
    })
  }

  getRecipes = (q) => {
    return this.props.recipes.filter(recipe => recipe.name.toLowerCase().includes(q))
  }

  renderRecipeNames = () => {
    this.state.filteredRecipes.map(recipe => <li>{recipe.title}</li>)
  }

  render() {
    return (
      <React.Fragment>
        <Form inline onSubmit={event => this.handleSubmit(event)} style={{margin: '10px'}}>
          <FormControl type="text" name="query" placeholder="Enter a key word" value={this.state.query} className="mr-sm-2" onChange={event => this.handleChange(event)} />
          <Button type="submit" variant="outline-success" style={{margin: '10px'}}>Search Recipes</Button>
        </Form> 

        <SearchResults recipes={this.state.filteredRecipes} users={this.props.users}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes
  }
}

export default connect(mapStateToProps)(SearchForm);
