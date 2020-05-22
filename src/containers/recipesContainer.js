import React, { Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import RecipeCards from '../components/recipeCards'

class RecipesContainer extends Component {
  
  render() {
    console.log("props in RecipesContainer: ", this.props)
    return (
      <div className="recipe-box-container">
        <h1>In Recipes Container</h1>
      {/* { this.props.loggedIn ? */}
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

          <Switch>
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
          </Switch>

            <RecipeCards userId={this.props.userId} viewingRecipesOf={this.props.viewingRecipesOf} recipes={this.props.recipes} users={this.props.users} />
          </div>
          {/* :  */}

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
