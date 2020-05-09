import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchRecipes from './actions/recipeActions'
import RecipesContainer from './containers/recipesContainer'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

//import Card from 'react-bootstrap/Card'

class App extends Component {

  componentDidMount() {
    console.log("props in App after component did mount: ", this.props)
    this.props.fetchRecipes()
    //this.props.fetchCategories()
  }//componentDidMound

  render() {
    console.log("props.recipes inside App render: ", this.props.recipes)
    return (
      <div className="App">
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="#">Log In</Nav.Link>
            <Nav.Link href="#">Log Out</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">First Category</NavDropdown.Item>
              <NavDropdown.Item href="#">Second Category</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <RecipesContainer recipes={this.props.recipes} />
      </div>
    )
  }//render
  
}//class

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes,
    loading: state.recipesReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
    //fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
