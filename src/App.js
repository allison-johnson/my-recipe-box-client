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
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import RecipesList from './components/recipesList'
import Login from './components/login'
import Signup from './components/signup'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRecipeForm: false 
    }
  }

  toggleShowRecipeForm = () => {
    this.setState({
      showRecipeForm: !this.state.showRecipeForm 
    })
  }

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
      return this.props.recipes.filter(recipe => recipe.category_id === parseInt(this.props.selectedCategory) && (recipe.user_id === parseInt(this.props.userId)))
    }
  }

  render() {
    console.log("props in App: ", this.props)
    return (
      <div className="App">

        <TopNavBar categories={this.props.categories} changeCategory={this.props.changeSelectedCategory} loggedIn={this.props.loggedIn} userEmail={this.props.userEmail} toggle={this.toggleShowRecipeForm} />

        {this.state.showRecipeForm ?
          <div className="recipe-form">
            <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} />
          </div>
          : null
        }

        <Switch >
          <Route exact path="/manage-recipes" render={(routerProps) => <RecipesList {...routerProps} recipes={this.props.recipes} notes={this.props.notes} />} />
          <Route exact path="/" render={(routerProps) => <RecipesContainer {...routerProps} recipes={this.filterRecipes()} loggedIn={this.props.loggedIn} />} />
          <Route exact path="/login" render={(routerProps) => <Login {...routerProps} login={this.props.login} />} />
          <Route exact path="/signup" render={(routerProps) => <Signup {...routerProps} signup={this.props.signup} />} />
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
    userEmail: state.currentUser.logged_in ? state.currentUser.current_user.email : '',
    userId: state.currentUser.logged_in ? state.currentUser.current_user.id : 0
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes()),
    fetchNotes: () => dispatch(fetchNotes()),
    changeSelectedCategory: (category_id) => dispatch(changeSelectedCategory(category_id)),
    addRecipe: (formData) => dispatch(addRecipe(formData)),
    login: (formData, history) => dispatch(login(formData, history)),
    getCurrentUser: () => dispatch(getCurrentUser()),
    signup: (formData) => dispatch(signup(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
