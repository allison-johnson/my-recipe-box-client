import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchRecipes, addRecipe } from './actions/recipeActions'
import { fetchCategories, changeSelectedCategory } from './actions/categoryActions'
import { fetchNotes } from './actions/noteActions'
import { login, getCurrentUser, signup } from './actions/userActions'
import { fetchUsers, changeViewingRecipesOf } from './actions/usersActions'

import RecipesContainer from './containers/recipesContainer'
import RecipeForm from './components/recipeForm'
import TopNavBar from './components/topNavBar'
import Logout from './components/logout'
import RecipesList from './components/recipesList'
import RecipeCards from './components/recipeCards'
import Login from './components/login'
import Signup from './components/signup'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRecipeForm: false,
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
    this.props.fetchUsers()
  }//componentDidMount 

  // filterRecipes = () => {
  //   if (parseInt(this.props.selectedCategory) === 0) {
  //     return this.props.recipes
  //   } else {
  //     return this.props.recipes.filter(recipe => recipe.category_id === parseInt(this.props.selectedCategory) && (recipe.user_id === parseInt(this.props.viewingRecipesOf)))
  //   }
  // }

  render() {
    console.log("props in App: ", this.props)
    return (
      <div className="App">
        {/* changeCategory={this.props.changeSelectedCategory}  */}
        <TopNavBar categories={this.props.categories} users={this.props.users} loggedIn={this.props.loggedIn} userEmail={this.props.userEmail} userId={this.props.userId} toggle={this.toggleShowRecipeForm} changeViewingRecipesOf={this.props.changeViewingRecipesOf} viewingRecipesOf={this.props.viewingRecipesOf} />

        {this.state.showRecipeForm ?
          <div className="recipe-form">
            <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} userId={this.props.userId} />
          </div>
          : null
        }

        <Switch >
          <Route exact path={`/recipes/users/:id`} render={(routerProps) => {
            return <RecipeCards {...routerProps} 
                    recipes={this.props.recipes.filter(recipe => recipe.user_id === parseInt(routerProps.match.params.id))} 
                    loggedIn={this.props.loggedIn} 
                    userId={this.props.userId} 
                    viewingRecipesOf={parseInt(routerProps.match.params.id)}
                    changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                    users={this.props.users} />}} 
          />

          <Route exact path={`/recipes/users/:userId/categories/:categoryId`} render={(routerProps) => {
            return <RecipeCards {...routerProps}
                    recipes={this.props.recipes.filter(recipe => (recipe.category_id === parseInt(routerProps.match.params.categoryId))).filter(recipe => recipe.user_id === parseInt(routerProps.match.params.userId))}
                    loggedIn={this.props.loggedIn}
                    userId={this.props.userId}
                    viewingRecipesOf={this.props.viewingRecipesOf}
                    changeViewingRecipesOf={this.props.changeViewingRecipesOf}
                    users={this.props.users} />}}
          />

          <Route exact path="/recipes" render={(routerProps) => {
            return <RecipesContainer {...routerProps} 
                    recipes={this.props.recipes.filter(recipe => recipe.user_id === this.props.userId)} 
                    loggedIn={this.props.loggedIn} 
                    userId={this.props.userId} 
                    viewingRecipesOf={this.props.viewingRecipesOf} 
                    changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                    users={this.props.users} />}} 
          />

          <Route exact path="/" render={(routerProps) => {
            return <RecipesContainer {...routerProps} 
                    recipes={this.props.recipes.filter(recipe => recipe.user_id === this.props.userId)} 
                    loggedIn={this.props.loggedIn} 
                    userId={this.props.userId} 
                    viewingRecipesOf={this.props.viewingRecipesOf} 
                    changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                    users={this.props.users} />} }
          />
          
          <Route exact path="/manage-recipes" render={(routerProps) => <RecipesList {...routerProps} recipes={this.props.recipes} notes={this.props.notes} loggedIn={this.props.loggedIn} userId={this.props.userId} />} />
          
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
    users: state.usersReducer.users,
    categoriesLoading: state.categoriesReducer.loading,
    selectedCategory: state.categoriesReducer.selectedCategory,
    notes: state.notesReducer.notes,
    loggedIn: state.currentUser.logged_in,
    userEmail: state.currentUser.logged_in ? state.currentUser.current_user.email : '',
    userId: state.currentUser.logged_in ? state.currentUser.current_user.id : 0,
    viewingRecipesOf: state.usersReducer.selectedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchUsers: () => dispatch(fetchUsers()),
    // changeSelectedCategory: (category_id) => dispatch(changeSelectedCategory(category_id)),
    changeViewingRecipesOf: (user_id) => dispatch(changeViewingRecipesOf(user_id)),
    addRecipe: (formData) => dispatch(addRecipe(formData)),
    login: (formData, history) => dispatch(login(formData, history)),
    getCurrentUser: () => dispatch(getCurrentUser()),
    signup: (formData, history) => dispatch(signup(formData, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
