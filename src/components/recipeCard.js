import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteForm from './noteForm'
import { addNote } from '../actions/noteActions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup'

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
        <Popup trigger={<Button className="add-note" variant="light">Add Note</Button>} position="right" closeOnDocumentClick>
          <div>
            <NoteForm recipe_id={this.props.recipe.id} addNote={this.props.addNote}/>
          </div>
        </Popup>
      </Card>
      </div>
    )
  }//render
}//class

const mapDispatchToProps = dispatch => {
  return {
    addNote: (formData) => dispatch(addNote(formData))
  }
}

export default connect(null, mapDispatchToProps)(RecipeCard)
