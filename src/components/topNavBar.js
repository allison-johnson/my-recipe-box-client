import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class TopNavBar extends Component {

  handleDropdownChange = (event) => {
    this.props.changeCategory(event)
  }

  render() {
    return (
      <Navbar bg="light">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="#">Sign Up</Nav.Link>
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
