import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchRecipes from './actions/recipeActions'
import RecipesContainer from './containers/recipesContainer'
import { Navbar, Nav } from 'react-bootstrap'

//import Card from 'react-bootstrap/Card'

class App extends Component {

  componentDidMount() {
    console.log("props in App after component did mount: ", this.props)
    this.props.fetchRecipes()
  }//componentDidMound

  render() {
    console.log("props.recipes inside App render: ", this.props.recipes)
    return (
      <div className="App">
        <Navbar bg="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Navbar>
        <RecipesContainer recipes={this.props.recipes} />
      </div>
    )
  }//render
  
}//class

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
