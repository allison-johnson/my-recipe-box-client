import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class TopNavBar extends Component {

  handleCategoryDropdownChange = (event) => {
    this.props.changeCategory(event)
  }

  handleUserDropdownChange = (event) => {
    console.log("event in handleUserDropdownChange: ", event)
    this.props.changeViewingRecipesOf(event)
  }

  handleRedirectToHome = (event) => {
    this.props.changeViewingRecipesOf(this.props.userId)
  }

  toggleForm = (e) => {
    this.props.toggle()
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
          <Nav.Link href="/" onClick={e => this.handleRedirectToHome}>Home</Nav.Link>
          <Nav.Link href="/manage-recipes">Manage My Recipes</Nav.Link>

          <NavDropdown title="Categories" id="basic-nav-dropdown" onSelect={e => this.handleCategoryDropdownChange(e)}>
            <NavDropdown.Item eventKey={0}>All</NavDropdown.Item>
            {this.props.categories.map(category => <NavDropdown.Item key={category.id} eventKey={category.id}>{category.name}</NavDropdown.Item>)}
          </NavDropdown>

          <NavDropdown title="Other Recipe Boxes" id="basic-nav-dropdown" onSelect={e => this.handleUserDropdownChange(e)}>
            {this.props.users.filter(user => user.id !== this.props.userId).map(user => <NavDropdown.Item key={user.id} eventKey={user.id}>{user.first_name}</NavDropdown.Item>)}
          </NavDropdown>

        </Nav>
        <Form inline>
          <Button variant="outline-success" onClick={e => this.toggleForm(e)}>Add Recipe to Box</Button>
        </Form>
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
