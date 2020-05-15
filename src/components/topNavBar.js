import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class TopNavBar extends Component {

  handleDropdownChange = (event) => {
    this.props.changeCategory(event)
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/manage-recipes">Manage Recipes</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown" onSelect={event => this.handleDropdownChange(event)}>
            <NavDropdown.Item eventKey={0}>All</NavDropdown.Item>
            {this.props.categories.map(category => <NavDropdown.Item eventKey={category.id}>{category.name}</NavDropdown.Item>)}
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
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/manage-recipes">Manage Recipes</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown" onSelect={event => this.handleDropdownChange(event)}>
          <NavDropdown.Item eventKey={0}>All</NavDropdown.Item>
          {this.props.categories.map(category => <NavDropdown.Item eventKey={category.id}>{category.name}</NavDropdown.Item>)}
        </NavDropdown>
      </Nav>
    </Navbar>
    )
  }
}

export default TopNavBar
