import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchRecipes, addRecipe } from './actions/RecipeActions'
import { fetchCategories } from './actions/CategoryActions'
import { fetchNotes } from './actions/NoteActions'
import { login, getCurrentUser, signup } from './actions/UserActions'
import { fetchUsers, changeSelectedUser } from './actions/UsersActions'

import RecipesContainer from './containers/RecipesContainer'
import RecipeForm from './components/RecipeForm'
import TopNavBar from './components/TopNavBar'
import Logout from './components/Logout'
import RecipesList from './components/RecipesList'
import Login from './components/Login'
import Signup from './components/Signup'
import SearchForm from './components/SearchForm'
import Welcome from './components/Welcome'
import Search from './components/Search'

/*
  A top-level container component generated using Redux connect
*/
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

        <TopNavBar categories={this.props.categories} 
                   users={this.props.users} 
                   loggedIn={this.props.loggedIn} 
                   userEmail={this.props.userEmail} 
                   userId={this.props.userId} 
                   selectedUser={this.props.selectedUser} 
                   changeSelectedUser={this.props.changeSelectedUser} 
                   toggleNewRecipeForm={this.toggleShowRecipeForm} 
                   toggleSearchForm={this.toggleSearchForm} 
        />

        {this.state.showRecipeForm ?
          <div className="recipe-form">
            <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} userId={this.props.userId} />
          </div>
          : null
        }

        {/* Change from viewingRecipesOf to selectedUser */}
        {this.state.showSearchForm ?
          <div className="search-form">
            <SearchForm loggedIn={this.props.loggedIn} userId={this.props.userId} viewingRecipesOf={this.props.viewingRecipesOf} changeViewingRecipesOf={this.props.changeViewingRecipesOf} users={this.props.users} />
          </div>
          : null
        }

        <Switch >
          <Route exact path="/manage-recipes" render={(routerProps) => <RecipesList {...routerProps} recipes={this.props.recipes} notes={this.props.notes} loggedIn={this.props.loggedIn} userId={this.props.userId} />} />
          
          <Route exact path="/logout" component={Logout} /> 

          <Route exact path="/search" render={(routerProps) => <Search {...routerProps} loggedIn={this.props.loggedIn} userId={this.props.userId} users={this.props.users} />} />

          {/* Takes care of '/' and '/recipes' paths */}
          <Route path="/" render={(routerProps) => {
            return <RecipesContainer {...routerProps} 
                    userId={this.props.userId} 
                    users={this.props.users} />} }
          />
        </Switch>
      </div>
    )
  }//render
}//class

const mapStateToProps = state => {
  return {
    recipesLoading: state.recipesReducer.loading,
    recipes: state.recipesReducer.recipes, //need these for manage-recipes path
    categories: state.categoriesReducer.categories,
    users: state.usersReducer.users,
    categoriesLoading: state.categoriesReducer.loading,
    notes: state.notesReducer.notes,
    loggedIn: state.currentUserReducer.logged_in,
    userEmail: state.currentUserReducer.logged_in ? state.currentUserReducer.current_user.email : '',
    userId: state.currentUserReducer.logged_in ? state.currentUserReducer.current_user.id : 0,
    selectedUser: state.usersReducer.selectedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchUsers: () => dispatch(fetchUsers()),
    changeSelectedUser: (user_id) => dispatch(changeSelectedUser(user_id)),
    addRecipe: (formData) => dispatch(addRecipe(formData)),
    login: (formData, history) => dispatch(login(formData, history)),
    getCurrentUser: () => dispatch(getCurrentUser()),
    signup: (formData, history) => dispatch(signup(formData, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
