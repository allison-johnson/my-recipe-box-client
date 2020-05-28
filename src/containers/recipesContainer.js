import React, { Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import RecipeCards from '../components/RecipeCards'

/*
  A container component generated using Redux connect for grabbing
  allRecipes from the store. Responsible for rendering RecipeCards
  component and passing down certain props depending on which URL
  is matched inside of the <Switch>
*/
class RecipesContainer extends Component {
  render() {
    return (
      <div className="recipe-box-container">
          <div className="recipe-box">  

          <Switch>
            <Route exact path={`/recipes/users/:id`} render={(routerProps) => {
              return <RecipeCards {...routerProps} 
                      recipes={this.props.allRecipes.filter(recipe => recipe.user_id === parseInt(routerProps.match.params.id))} 
                      userId={this.props.userId} 
                      viewingRecipesOf={parseInt(routerProps.match.params.id)}
                      changeViewingRecipesOf={this.props.changeViewingRecipesOf} 
                      users={this.props.users} />}} 
            />

            <Route exact path={`/recipes/users/:userId/categories/:categoryId`} render={(routerProps) => {
              return <RecipeCards {...routerProps}
                      recipes={this.props.allRecipes.filter(recipe => (recipe.category_id === parseInt(routerProps.match.params.categoryId))).filter(recipe => recipe.user_id === parseInt(routerProps.match.params.userId))}
                      userId={this.props.userId}
                      // viewingRecipesOf={this.props.viewingRecipesOf}
                      viewingRecipesOf={parseInt(routerProps.match.params.userId)}
                      changeViewingRecipesOf={this.props.changeViewingRecipesOf}
                      users={this.props.users} />}}
            />

            {/* Takes care of / and /recipes routes */}
            <Route path={`/`} render={(routerProps) => {
              return <RecipeCards {...routerProps} 
                      recipes={this.props.allRecipes.filter(recipe => recipe.user_id === this.props.userId)} 
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


