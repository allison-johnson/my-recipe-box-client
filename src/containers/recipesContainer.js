import React, { Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import RecipeCards from '../components/recipeCards'

class RecipesContainer extends Component {
  render() {
    return (
      <div className="recipe-box-container">
          <div className="recipe-box">  

          <Switch>
            <Route exact path={`/recipes/users/:id`} render={(routerProps) => {
              return <RecipeCards {...routerProps} 
                      recipes={this.props.allRecipes.filter(recipe => recipe.user_id === parseInt(routerProps.match.params.id))} 
                      loggedIn={this.props.loggedIn} 
                      userId={this.props.userId} 
                      viewingRecipesOf={parseInt(routerProps.match.params.id)}
                      changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                      users={this.props.users} />}} 
            />

            {/* Takes care of / and /recipes routes */}
            <Route path={`/`} render={(routerProps) => {
              return <RecipeCards {...routerProps} 
                      recipes={this.props.allRecipes.filter(recipe => recipe.user_id === this.props.userId)} 
                      loggedIn={this.props.loggedIn} 
                      userId={this.props.userId} 
                      viewingRecipesOf={parseInt(this.props.userId)}
                      changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                      users={this.props.users} />}} 
            />
          </Switch>
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


