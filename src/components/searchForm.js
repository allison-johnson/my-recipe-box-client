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
    console.log("query: ", this.state.query)
    return (
      <React.Fragment>
        <Form inline onSubmit={event => this.handleSubmit(event)} style={{margin: '10px'}}>
          <FormControl type="text" name="query" placeholder="What are you looking for?" value={this.state.query} className="mr-sm-2" onChange={event => this.handleChange(event)} />
          <Button type="submit" variant="outline-success" style={{margin: '10px'}}>Search Recipes</Button>
        </Form> 

        <SearchResults recipes={this.state.filteredRecipes}/>
        
        {/* <RecipeCards users={this.props.users} recipes={this.state.filteredRecipes} userId={this.props.userId} viewingRecipesOf={this.props.viewingRecipesOf} changeViewingRecipesOf={this.props.changeViewingRecipesOf} loggedIn={this.props.loggedIn} /> */}
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
