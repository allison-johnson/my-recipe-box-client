import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import RecipeNotes from './RecipeNotes'
import { addNote } from '../actions/NoteActions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup'
// import { FormControl } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

/*
  This is a contianer component generated using Redux connect.
  It is responsible for generating a single recipe card, notes and
  the ability to add a new note.
*/
class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  handleCheckboxChange = (e) => {
    const updatedLiked = !this.state.liked 
    this.setState({
      liked: updatedLiked 
    })  
    if (updatedLiked) {
      this.props.addToLikedRecipes(this.props.recipe.id)
    }
    else {
      this.props.removeFromLikedRecipes(this.props.recipe.id)
    }
  }

  render() {
    return (
      <div className="recipe-card">
      <Card style={{width: '18rem'}}>
        <div className="container">
          <Card.Img className="recipe-img" variant="top" src={this.props.recipe.img_url} alt={this.props.recipe.name} />
        </div>
        <Card.Body>
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
          : 
          null
          // <Form.Group>
          //   <Form.Check type="checkbox" label="Like this recipe" onChange={this.handleCheckboxChange} />
          // </Form.Group>
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
