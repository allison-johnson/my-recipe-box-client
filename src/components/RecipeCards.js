import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import CardDeck from 'react-bootstrap/CardDeck'
import Form from 'react-bootstrap/Form'

/*
  A stateless, presentational component concerned with laying 
  out all RecipeCard's on the page
*/
class RecipeCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likedRecipes: [],
      viewLikedRecipes: false 
    }
  }

  addToLikedRecipes = (id) => {
    this.setState(previousState => {
      return (
        {
          likedRecipes: [...previousState.likedRecipes, id]
        }
      )
    })
  }

  removeFromLikedRecipes = (id) => {
    console.log("id in remove: ", id)
    const newLikedRecipes = this.state.likedRecipes.filter(recipeId => parseInt(recipeId) !== parseInt(id))
    // console.log(newLikedRecipes)
    // debugger 
    this.setState(previousState => {
      return (
        {
          likedRecipes: newLikedRecipes
        }
      )
    })
  }

  renderAllCards = () => {
    if(!this.state.viewLikedRecipes) {
      return this.props.recipes.filter(recipe => recipe.user_id === parseInt(this.props.viewingRecipesOf)).map((recipe, idx) => { return(
        <div key={idx} className="recipe-card">
          <RecipeCard key={idx} recipe={recipe} viewingOwnRecipes={parseInt(this.props.userId) === parseInt(this.props.viewingRecipesOf)} addToLikedRecipes={this.addToLikedRecipes} removeFromLikedRecipes={this.removeFromLikedRecipes} />
        </div> )
      })
    }
    else {
      return this.props.recipes.filter(recipe => recipe.user_id === parseInt(this.props.viewingRecipesOf)).filter(recipe => this.state.likedRecipes.includes(recipe.id)).map((recipe, idx) => { return(
        <div key={idx} className="recipe-card">
          <RecipeCard key={idx} recipe={recipe} viewingOwnRecipes={parseInt(this.props.userId) === parseInt(this.props.viewingRecipesOf)} addToLikedRecipes={this.addToLikedRecipes} removeFromLikedRecipes={this.removeFromLikedRecipes} />
        </div> )
      })
    }
  }

  getUserName = () => {
    if (this.props.users.length > 0 && this.props.viewingRecipesOf > 0) {
      return this.props.users.find(user => user.id === parseInt(this.props.viewingRecipesOf)).first_name
    } else {
      return ''
    }
  }

  handleCheckboxChange = (e) => {
    const newViewLikedRecipes = !this.state.viewLikedRecipes 
    this.setState({
      viewLikedRecipes: newViewLikedRecipes 
    })
  }

  render () {
    return (
      <div className="recipe-cards">
        { parseInt(this.props.userId) === parseInt(this.props.viewingRecipesOf) ?
          <div className="my-recipes">
            <h1>My Recipe Box</h1>
            <CardDeck>{this.renderAllCards()}</CardDeck> 
          </div>    
          :
          <div className="other-recipes">
            <h1>{this.getUserName()}'s Recipe Box</h1>
            <CardDeck>{this.renderAllCards()}</CardDeck> 
          </div>
        }
          <Form.Group>
            <Form.Check type="checkbox" label="View Liked Recipes" onChange={this.handleCheckboxChange} />
          </Form.Group>
      </div>
    )
  }
}//RecipeCards class

export default RecipeCards
