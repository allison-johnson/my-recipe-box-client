import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class RecipeCard extends Component {
  constructor(props) {
    super(props)
  }//constructor 

  render() {
    //console.log("props in recipeCard: ", this.props)
    //console.log(Card)
    return (
      <div className="recipe-card">
      <Card style={{width: '18rem'}}>
        <div className="container">
          <Card.Img className="recipe-img" variant="top" src={this.props.recipe.img_url} alt={this.props.recipe.name} />
        </div>
        <Card.Body>
          <Card.Title className="recipe-title">{this.props.recipe.name}</Card.Title>
          <Card.Text className="recipe-notes">Include recipe notes here...</Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }//render
}//class

export default RecipeCard
