import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
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
        )
    }
}

export default Welcome