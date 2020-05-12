import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card-front">
      <Card style={{width: '18rem'}}>
        <div className="container">
          <Card.Img className="recipe-img" variant="top" src={this.props.recipe.img_url} alt={this.props.recipe.name} />
        </div>
        <Card.Body className="card-front">
          <Card.Title className="recipe-title">{this.props.recipe.name}</Card.Title>
          <Card.Text className="recipe-notes">
            <ul>{this.props.recipe.notes.map(note => <li>{note.content}</li>)}</ul>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }//render
}//class

export default RecipeCard
