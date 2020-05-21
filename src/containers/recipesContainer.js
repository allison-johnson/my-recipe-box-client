import React, { Component} from 'react'
// import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import RecipeCards from '../components/recipeCards'

class RecipesContainer extends Component {
  
  render() {
    console.log("props in RecipesContainer: ", this.props)
    return (
      <div className="recipe-box-container">
      { this.props.loggedIn ?
          <div className="recipe-box">  

          {/* <Switch>
            <Route exact path={`${path}/users/:id`} render={(routerProps) => {
              return <RecipeCards {...routerProps} 
                    recipes={this.props.recipes.filter(recipe => recipe.user_id === parseInt(routerProps.match.params.id))} 
                    loggedIn={this.props.loggedIn} 
                    userId={this.props.userId} 
                    viewingRecipesOf={parseInt(routerProps.match.params.id)}
                    changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                    users={this.props.users} />}} 
            />
          </Switch> */}

          {/* <Switch>
            <Route exact path={`/recipes/users/:id`} render={(routerProps) => {
              //const selectedUser = this.props.users.find(user => user.id === parseInt(routerProps.match.params.id))
              return <RecipeCards {...routerProps} 
                      recipes={this.props.allRecipes.filter(recipe => recipe.user_id === parseInt(routerProps.match.params.id))} 
                      loggedIn={this.props.loggedIn} 
                      userId={this.props.userId} 
                      viewingRecipesOf={parseInt(routerProps.match.params.id)}
                      changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                      users={this.props.users} />}} 
            />
          </Switch> */}

            <RecipeCards userId={this.props.userId} viewingRecipesOf={this.props.viewingRecipesOf} recipes={this.props.recipes} users={this.props.users} />
          </div>
          : 
          <div className="app-info" style={{margin: '10px'}}>
            <h1>Welcome to <span className="title">My Recipe Box</span>!</h1>
            Please log in or sign up to begin using My Recipe Box! With My Recipe Box, you can:<br /><br />
            <ul>
              <li>Create recipe cards with your favorite recipes from around the web</li>
              <li>Categorize your recipes for easy access</li>
              <li>Record any notes you'd like to remember when you make the recipe again</li>
              <li>See your friends' favorite recipes</li>
            </ul>
            Encourage all of your buddies to sign up today, and happy cooking!
          </div>
      }
      </div>
    )
  }
}//class 

const mapStateToProps = state => {
  return {
    allRecipes: state.recipesReducer.recipes
  }
}

export default connect(mapStateToProps)(RecipesContainer);

// export default RecipesContainer 
