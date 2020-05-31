import React, { Component } from 'react'

class SearchResults extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.recipes.map(recipe => <li>{recipe.name}</li>)}</ul>
      </div>
    )
  }
}

export default SearchResults
