import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchRecipes, addRecipe } from './actions/recipeActions'
import { fetchCategories } from './actions/categoryActions'
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
import SearchForm from './components/searchForm'
import Welcome from './components/welcome'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRecipeForm: false,
      showSearchForm: false
    }
  }

  toggleShowRecipeForm = () => {
    this.setState({
      showRecipeForm: !this.state.showRecipeForm 
    })
  }

  toggleSearchForm = () => {
    this.setState({
      showSearchForm: !this.state.showSearchForm
    })
  }

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.fetchCategories()
    this.props.fetchNotes()
    this.props.getCurrentUser()
    this.props.fetchUsers()
  }//componentDidMount 

  render() {
    console.log("state in App: ", this.state)
    if (!this.props.loggedIn) {
      return (
        <React.Fragment>
          <TopNavBar categories={this.props.categories} users={this.props.users} loggedIn={this.props.loggedIn} userEmail={this.props.userEmail} userId={this.props.userId} toggleNewRecipeForm={this.toggleShowRecipeForm} toggleSearchForm={this.toggleSearchForm} changeViewingRecipesOf={this.props.changeViewingRecipesOf} viewingRecipesOf={this.props.viewingRecipesOf} />
          <Switch>
            <Route exact path="/login" render={(routerProps) => <Login {...routerProps} login={this.props.login} />} />
            <Route exact path="/signup" render={(routerProps) => <Signup {...routerProps} signup={this.props.signup} />} />
            <Route component={Welcome} />
          </Switch>
        </React.Fragment>
      )
    }
    return (
      <div className="App">
        <TopNavBar categories={this.props.categories} users={this.props.users} loggedIn={this.props.loggedIn} userEmail={this.props.userEmail} userId={this.props.userId} toggleNewRecipeForm={this.toggleShowRecipeForm} toggleSearchForm={this.toggleSearchForm} changeViewingRecipesOf={this.props.changeViewingRecipesOf} viewingRecipesOf={this.props.viewingRecipesOf} />

        {this.state.showRecipeForm ?
          <div className="recipe-form">
            <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} userId={this.props.userId} />
          </div>
          : null
        }

        {this.state.showSearchForm ?
          <div className="search-form">
            <SearchForm loggedIn={this.props.loggedIn} userId={this.props.userId} viewingRecipesOf={this.props.viewingRecipesOf} changeViewingRecipesOf={this.props.changeViewingRecipesOf} users={this.props.users} />
          </div>
          : null
        }

        <Switch >

          <Route exact path={`/recipes/users/:userId/categories/:categoryId`} render={(routerProps) => {
            return <RecipeCards {...routerProps}
                    recipes={this.props.recipes.filter(recipe => (recipe.category_id === parseInt(routerProps.match.params.categoryId))).filter(recipe => recipe.user_id === parseInt(routerProps.match.params.userId))}
                    loggedIn={this.props.loggedIn}
                    userId={this.props.userId}
                    viewingRecipesOf={this.props.viewingRecipesOf}
                    changeViewingRecipesOf={this.props.changeViewingRecipesOf}
                    users={this.props.users} />}}
          />

          <Route path="/recipes" render={(routerProps) => {
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
          
          <Route exact path="/logout" component={Logout} /> 
          <Route component={Welcome} />
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
    changeViewingRecipesOf: (user_id) => dispatch(changeViewingRecipesOf(user_id)),
    addRecipe: (formData) => dispatch(addRecipe(formData)),
    login: (formData, history) => dispatch(login(formData, history)),
    getCurrentUser: () => dispatch(getCurrentUser()),
    signup: (formData, history) => dispatch(signup(formData, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
