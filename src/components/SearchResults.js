import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

class SearchResults extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.recipes.map(recipe => {
            return (
              <li>
                {recipe.name + " "}
                ({this.props.users.find(user => user.id === recipe.user_id).first_name}'s recipe box)
              </li>
            )}
          )}
        </ul>
      </div>
    )
  }
}

export default SearchResults
