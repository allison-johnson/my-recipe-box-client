import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes, addRecipe } from './actions/recipeActions'
import { fetchCategories, changeSelectedCategory } from './actions/categoryActions'
import { fetchNotes } from './actions/noteActions'
import { login, getCurrentUser, signup } from './actions/userActions'
import RecipesContainer from './containers/recipesContainer'
import RecipeForm from './components/recipeForm'
import TopNavBar from './components/topNavBar'
import Logout from './components/logout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RecipesList from './components/recipesList'
import Login from './components/login'
import Signup from './components/signup'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.fetchCategories()
    this.props.fetchNotes()
    this.props.getCurrentUser()
  }//componentDidMount 

  filterRecipes = () => {
    if (parseInt(this.props.selectedCategory) === 0) {
      return this.props.recipes
    } else {
      return this.props.recipes.filter(recipe => recipe.category_id === parseInt(this.props.selectedCategory))
    }
  }

  render() {
    return (
      <div className="App">

        <TopNavBar categories={this.props.categories} changeCategory={this.props.changeSelectedCategory} loggedIn={this.props.loggedIn} userEmail={this.props.userEmail} />

        <div className="recipe-form">
          <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} />
        </div>

        <Switch >
          <Route exact path="/manage-recipes" render={(props) => <RecipesList {...props} recipes={this.props.recipes} notes={this.props.notes} />} />
          <Route exact path="/" render={(props) => <RecipesContainer {...props} recipes={this.filterRecipes()}/>} />
          <Route exact path="/login" render={(props) => <Login {...props} login={this.props.login} />} />
          <Route exact path="/signup" render={(props) => <Signup {...props} signup={this.props.signup} />} />
          <Route exact path="/logout" component={Logout} />
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
    loggedIn: state.currentUser.logged_in,
    userEmail: state.currentUser.logged_in ? state.currentUser.current_user.email : ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes()),
    fetchNotes: () => dispatch(fetchNotes()),
    changeSelectedCategory: (category_id) => dispatch(changeSelectedCategory(category_id)),
    addRecipe: (formData) => dispatch(addRecipe(formData)),
    login: (formData) => dispatch(login(formData)),
    getCurrentUser: () => dispatch(getCurrentUser()),
    signup: (formData) => dispatch(signup(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
