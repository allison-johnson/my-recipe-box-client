import React from 'react'
import AddingRecipeNote from './addingRecipeNote.gif'
import AddingRecipe from './addingRecipe.gif'
import ViewOtherBoxes from './viewOtherBoxes.gif'

const Welcome = () => {
  return (
    <div className="app-info" style={{margin: '10px'}}>
      <h1>Welcome to <span className="title">My Recipe Box</span>!</h1>
      Please log in or sign up to begin using My Recipe Box! With My Recipe Box, you can:<br /><br />
      <ul>
        <li>
          Create recipe cards with your favorite recipes from around the web, categorizing them for easy access
          <br /><br />
          <img className="instructions" src={AddingRecipe} alt="Adding a recipe to the recipe box" />
          <br /><br />
        </li>

        <li>
          Record any notes you'd like to remember when you make the recipe again
          <br /><br />
          <img className="instructions" src={AddingRecipeNote} alt="Adding a recipe note" />
          <br /><br />
        </li>

        <li>
          See your friends' favorite recipes
          <br /><br />
          <img className="instructions" src={ViewOtherBoxes} alt="View other recipe boxes" />
          <br /><br />
        </li>
      </ul>
      Encourage all of your buddies to sign up today, and happy cooking!
    </div>
  )
}//Welcome

export default Welcome
