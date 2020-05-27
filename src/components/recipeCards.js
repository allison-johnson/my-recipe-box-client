import React from 'react'
import RecipeCard from './RecipeCard'
import CardDeck from 'react-bootstrap/CardDeck'

const RecipeCards = ({recipes, userId, viewingRecipesOf, users}) => {

  const renderAllCards = () => {
    return recipes.filter(recipe => recipe.user_id === parseInt(viewingRecipesOf)).map((recipe, idx) => { return(
      <div key={idx} className="recipe-card">
        <RecipeCard key={idx} recipe={recipe} viewingOwnRecipes={parseInt(userId) === parseInt(viewingRecipesOf)} />
      </div> )
    })
  }

  const getUserName = () => {
    if (users.length > 0 && viewingRecipesOf > 0) {
      return users.find(user => user.id === parseInt(viewingRecipesOf)).first_name
    } else {
      return ''
    }
  }

  return (
    <div className="recipe-cards">
      { parseInt(userId) === parseInt(viewingRecipesOf) ?
        <div className="my-recipes">
          <h1>My Recipe Box</h1>
          <CardDeck>{renderAllCards()}</CardDeck> 
        </div>    
        :
        <div className="other-recipes">
          <h1>{getUserName()}'s Recipe Box</h1>
          <CardDeck>{renderAllCards()}</CardDeck> 
        </div>
      }
    </div>
  )
}//RecipeCards

export default RecipeCards
