import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes, addRecipe } from './actions/recipeActions'
import { fetchCategories, changeSelectedCategory } from './actions/categoryActions'
import RecipesContainer from './containers/recipesContainer'
import RecipeForm from './components/recipeForm'
import { Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//import Card from 'react-bootstrap/Card'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.fetchCategories()
    //console.log("props in App after component did mount: ", this.props)
  }//componentDidMount

  handleDropdownChange = (event) => {
    this.props.changeSelectedCategory(event)
  }

  filterRecipes = () => {
    if (parseInt(this.props.selectedCategory) === 0) {
      return this.props.recipes
    } else {
      return this.props.recipes.filter(recipe => recipe.category_id === parseInt(this.props.selectedCategory))
    }
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log("Inside handleSubmit")
  // }

  // handleClick = (event) => {
  //   console.log("props when clicked: ", this.props)
  //   return(
  //     <div>
  //       <RecipeForm addRecipe={this.props.addRecipe} />
  //     </div>
  //   )
  // }

  render() {
    console.log("this.props.selectedCategory: ", this.props.selectedCategory)
    return (
      <div className="App">
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="#">Log In</Nav.Link>
            <Nav.Link href="#">Sign Up</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" onSelect={event => this.handleDropdownChange(event)}>
              <NavDropdown.Item eventKey={0}>All</NavDropdown.Item>
              {this.props.categories.map(category => <NavDropdown.Item eventKey={category.id}>{category.name}</NavDropdown.Item>)}
            </NavDropdown>
          </Nav>

          <Form inline>
            <Button onClick={event => this.handleClick()}>Add Recipe to Box</Button>
          </Form>

          {/* <Form inline onSubmit={event => this.handleSubmit()}>
            <FormControl type="text" placeholder="Recipe Name" className="mr-sm-2" />
            <FormControl type="text" placeholder="Recipe URL" className="mr-sm-2" />
            <FormControl type="text" placeholder="Image URL" className="mr-sm-2" />
            <Form.Group>
              <Form.Control as="select">
                {this.props.categories.map(category => <option>{category.name}</option>)}
              </Form.Control>
            </Form.Group>
            <Button type="submit">Add Recipe to Box</Button>
          </Form> */}

        </Navbar>
        <div>
          <RecipeForm addRecipe={this.props.addRecipe} categories={this.props.categories} />
        </div>
        <RecipesContainer recipes={this.filterRecipes()} />
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
    changeSelectedCategory: (category_id) => dispatch(changeSelectedCategory(category_id)),
    addRecipe: formData => dispatch({
      type: 'ADD_RECIPE',
      recipe: formData
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
