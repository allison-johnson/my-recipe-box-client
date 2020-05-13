import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes, addRecipe } from './actions/recipeActions'
import { fetchCategories, changeSelectedCategory } from './actions/categoryActions'
import { fetchNotes } from './actions/noteActions'
import RecipesContainer from './containers/recipesContainer'
import RecipeForm from './components/recipeForm'
import TopNavBar from './components/topNavBar'
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RecipesList from './components/recipesList'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import Card from 'react-bootstrap/Card'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.fetchCategories()
    this.props.fetchNotes()
  }//componentDidMount 

  // handleDropdownChange = (event) => {
  //   this.props.changeSelectedCategory(event)
  // }

  filterRecipes = () => {
    //console.log("this.props.recipes inside filterRecipes: ", this.props.recipes)
    if (parseInt(this.props.selectedCategory) === 0) {
      return this.props.recipes
    } else {
      return this.props.recipes.filter(recipe => recipe.category_id === parseInt(this.props.selectedCategory))
    }
  }

  render() {
    console.log("recipes in render: ", this.props.recipes)
    return (
      <div className="App">

        <TopNavBar categories={this.props.categories} changeCategory={this.props.changeSelectedCategory} />

        <div className="recipe-form">
          <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} />
        </div>

        <Switch >
          <Route exact path="/manage-recipes" render={(props) => <RecipesList {...props} recipes={this.props.recipes} />} />
          <Route exact path="/" render={(props) => <RecipesContainer {...props} recipes={this.filterRecipes()}/>} />
        </Switch>

      </div>



      // <div className="App">
        // <Navbar bg="light">
        //   <Nav className="mr-auto">
        //     <Nav.Link href="#">Log In</Nav.Link>
        //     <Nav.Link href="#">Sign Up</Nav.Link>
        //     <Nav.Link href="/">Home</Nav.Link>
        //     <Nav.Link href="/manage-recipes">Manage Recipes</Nav.Link>
        //     <NavDropdown title="Categories" id="basic-nav-dropdown" onSelect={event => this.handleDropdownChange(event)}>
        //       <NavDropdown.Item eventKey={0}>All</NavDropdown.Item>
        //       {this.props.categories.map(category => <NavDropdown.Item eventKey={category.id}>{category.name}</NavDropdown.Item>)}
        //     </NavDropdown>
        //   </Nav>
        // </Navbar>

        // <div>
        //   <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} />
        // </div>

      //   <RecipesContainer recipes={this.filterRecipes()} />
      // </div>
    )
  }//render
  
}//class

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes,
    recipesLoading: state.recipesReducer.loading,
    categories: state.categoriesReducer.categories,
    categoriesLoading: state.categoriesReducer.loading,
    selectedCategory: state.categoriesReducer.selectedCategory,
    notes: state.notesReducer.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes()),
    fetchNotes: () => dispatch(fetchNotes()),
    changeSelectedCategory: (category_id) => dispatch(changeSelectedCategory(category_id)),
    addRecipe: (formData) => dispatch(addRecipe(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
