import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

class TopNavBar extends Component {

  handleUserDropdownChange = (event) => {
    console.log("event in handleUserDropdownChange: ", event)
    this.props.changeViewingRecipesOf(event)
  }

  handleRedirectToHome = (event) => {
    this.props.changeViewingRecipesOf(this.props.userId)
  }

  toggleNewRecipeForm = (e) => {
    this.props.toggleNewRecipeForm()
  }

  toggleSearchForm = (e) => {
    this.props.toggleSearchForm()
  }

  render() {

    return (
      this.props.loggedIn ?
      <Navbar bg="light">
        <Nav className="mr-auto">
          <Navbar.Text className="welcome-text">
            Welcome {this.props.userEmail}
          </Navbar.Text>
          <Nav.Link href="/logout">Log Out</Nav.Link>
          <Nav.Link href="/recipes" onClick={e => this.handleRedirectToHome}>Home</Nav.Link>
          <Nav.Link href="/manage-recipes">Manage My Recipes</Nav.Link>

          <NavDropdown title="Categories" id="basic-nav-dropdown" >
            <LinkContainer to={`/recipes/users/${this.props.viewingRecipesOf}`}><NavDropdown.Item eventKey={0}>All</NavDropdown.Item></LinkContainer>
            {this.props.categories.map(category => {
              return <LinkContainer to={`/recipes/users/${this.props.viewingRecipesOf}/categories/${category.id}`}>
                <NavDropdown.Item key={category.id} eventKey={category.id}>{category.name}</NavDropdown.Item>
              </LinkContainer>})}
          </NavDropdown>

          <NavDropdown title="Other Recipe Boxes" id="basic-nav-dropdown" onSelect={e => this.handleUserDropdownChange(e)}>
            {this.props.users.filter(user => user.id !== this.props.userId).map(user => {
              return <LinkContainer to={`/recipes/users/${user.id}`}>
                <NavDropdown.Item key={user.id} eventKey={user.id}>{user.first_name}</NavDropdown.Item>
              </LinkContainer>})}
          </NavDropdown>

        </Nav>
        <Form inline>
          <Button variant="outline-success" onClick={e => this.toggleNewRecipeForm(e)}>Add Recipe to Box</Button>
        </Form>

        {/* <Form inline>
          <Button variant="outline-success" onClick={e => this.toggleSearchForm(e)}>Search Recipes</Button>
        </Form> */}
      </Navbar>
      :
      <Navbar bg="light">
      <Nav className="mr-auto">
        <Nav.Link href="/login">Log In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
    )
  }
}

export default TopNavBar
