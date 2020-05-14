import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes, addRecipe } from './actions/recipeActions'
import { fetchCategories, changeSelectedCategory } from './actions/categoryActions'
import { fetchNotes } from './actions/noteActions'
import { login, getCurrentUser } from './actions/userActions'
import RecipesContainer from './containers/recipesContainer'
import RecipeForm from './components/recipeForm'
import TopNavBar from './components/topNavBar'
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RecipesList from './components/recipesList'
import Login from './components/login'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import Card from 'react-bootstrap/Card'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.fetchCategories()
    this.props.fetchNotes()
    //this.props.getCurrentUser()
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
    console.log("props in App.js render: ", this.props)
    return (
      <div className="App">

        <TopNavBar categories={this.props.categories} changeCategory={this.props.changeSelectedCategory} />

        <div className="recipe-form">
          <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} />
        </div>

        <Switch >
          <Route exact path="/manage-recipes" render={(props) => <RecipesList {...props} recipes={this.props.recipes} notes={this.props.notes} />} />
          <Route exact path="/" render={(props) => <RecipesContainer {...props} recipes={this.filterRecipes()}/>} />
          <Route exact path="/login" render={(props) => <Login {...props} login={this.props.login} />} />
        </Switch>

      </div>
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
    notes: state.notesReducer.notes,
    loggedIn: state.currentUser.user.logged_in 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes()),
    fetchNotes: () => dispatch(fetchNotes()),
    changeSelectedCategory: (category_id) => dispatch(changeSelectedCategory(category_id)),
    addRecipe: (formData) => dispatch(addRecipe(formData)),
    login: (formData) => dispatch(login(formData))
    //getCurrentUser: () => dispatch(getCurrentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
