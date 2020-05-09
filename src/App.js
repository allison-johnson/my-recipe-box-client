import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchRecipes from './actions/recipeActions'
import fetchCategories from './actions/categoryActions'
import RecipesContainer from './containers/recipesContainer'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

//import Card from 'react-bootstrap/Card'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.fetchCategories()
    console.log("props in App after component did mount: ", this.props)
  }//componentDidMount

  render() {
    console.log("props.recipes inside App render: ", this.props.recipes)
    console.log("props.categories inside App render: ", this.props.categories)
    return (
      <div className="App">
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="#">Log In</Nav.Link>
            <Nav.Link href="#">Log Out</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {this.props.categories.map(category => <NavDropdown.Item href="#">{category.name}</NavDropdown.Item>)}
              {/* <NavDropdown.Item href="#">First Category</NavDropdown.Item>
              <NavDropdown.Item href="#">Second Category</NavDropdown.Item> */}
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
    recipesLoading: state.recipesReducer.loading,
    categories: state.categoriesReducer.categories,
    categoriesLoading: state.categoriesReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
