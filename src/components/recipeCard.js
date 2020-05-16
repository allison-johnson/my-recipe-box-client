import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteForm from './noteForm'
import RecipeNotes from './recipeNotes'
import { addNote } from '../actions/noteActions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup'

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
      <Card style={{width: '18rem'}}>
        <div className="container">
          <Card.Img className="recipe-img" variant="top" src={this.props.recipe.img_url} alt={this.props.recipe.name} />
        </div>
        <Card.Body className="card-front">
          <Card.Title className="recipe-title">{this.props.recipe.name}</Card.Title>
          <Card.Text className="recipe-notes">
            <RecipeNotes notes={this.props.notes.filter(note => note.recipe_id === this.props.recipe.id)} />
          </Card.Text>
          <Card.Link href={this.props.recipe.url}>View Recipe</Card.Link>
        </Card.Body>
        { this.props.viewingOwnRecipes ?
          <Popup trigger={<Button className="add-note" variant="light">Add Note</Button>} position="right" closeOnDocumentClick>
          <div>
            <NoteForm recipe_id={this.props.recipe.id} addNote={this.props.addNote}/>
          </div>
          </Popup>
          : null 
        }
      </Card>
      </div>
    )
  }//render
}//class

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (formData) => dispatch(addNote(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard)
