import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchRecipes from './actions/recipeActions'
import { fetchCategories, changeSelectedCategory } from './actions/categoryActions'
import RecipesContainer from './containers/recipesContainer'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

//import Card from 'react-bootstrap/Card'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.fetchCategories()
    console.log("props in App after component did mount: ", this.props)
  }//componentDidMount

  handleDropdownChange = (event) => {
    this.props.changeSelectedCategory(event)
  }

  render() {
    console.log("this.props.selectedCategory: ", this.props.selectedCategory)
    return (
      <div className="App">
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="#">Log In</Nav.Link>
            <Nav.Link href="#">Log Out</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" onSelect={event => this.handleDropdownChange(event)}>
              {this.props.categories.map(category => <NavDropdown.Item eventKey={category.id} href="#">{category.name}</NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
        </Navbar>
        <RecipesContainer recipes={this.props.recipes.filter(recipe => recipe.category_id === parseInt(this.props.selectedCategory))} />
      </div>
    )
  }//render
  
}//class

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes,
    recipesLoading: state.recipesReducer.loading,
    categories: state.categoriesReducer.categories,
    categoriesLoading: state.categoriesReducer.loading,
    selectedCategory: state.categoriesReducer.selectedCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchRecipes: () => dispatch(fetchRecipes()),
    changeSelectedCategory: (category_id) => dispatch(changeSelectedCategory(category_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
