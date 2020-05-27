import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const TopNavBar = ({categories, users, loggedIn, userEmail, userId, selectedUser, changeSelectedUser, toggleNewRecipeForm, toggleSearchForm}) => {

  const handleUserDropdownChange = (e) => {
    changeSelectedUser(e)
  }

  const handleToggleNewRecipeForm = (e) => {
    toggleNewRecipeForm()
  }

  // const handleToggleSearchForm = (e) => {
  //   toggleSearchForm()
  // }

  return (
    loggedIn ?
      <Navbar bg="light">
        <Nav className="mr-auto">
          <Navbar.Text className="welcome-text">
            Welcome {userEmail}
          </Navbar.Text>
          <Nav.Link href="/logout">Log Out</Nav.Link>
          <Nav.Link href="/recipes">Home</Nav.Link>
          <Nav.Link href="/manage-recipes">Manage My Recipes</Nav.Link>

          <NavDropdown title="Categories" id="basic-nav-dropdown" >
            <LinkContainer to={`/recipes/users/${selectedUser}`}><NavDropdown.Item eventKey={0}>All</NavDropdown.Item></LinkContainer>
            {categories.map(category => {
              return <LinkContainer to={`/recipes/users/${selectedUser}/categories/${category.id}`}>
                <NavDropdown.Item key={category.id} eventKey={category.id}>{category.name}</NavDropdown.Item>
              </LinkContainer>})}
          </NavDropdown>

          <NavDropdown title="Other Recipe Boxes" id="basic-nav-dropdown" onSelect={e => handleUserDropdownChange(e)} >
            {users.filter(user => user.id !== userId).map(user => {
              return <LinkContainer to={`/recipes/users/${user.id}`}>
                <NavDropdown.Item key={user.id} eventKey={user.id}>{user.first_name}</NavDropdown.Item>
              </LinkContainer>})}
          </NavDropdown>

        </Nav>
        <Form inline>
          <Button variant="outline-success" onClick={e => handleToggleNewRecipeForm(e)}>Add Recipe to Box</Button>
        </Form>

        {/* <Form inline>
          <Button variant="outline-success" onClick={e => this.handleToggleSearchForm(e)}>Search Recipes</Button>
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
}//TopNavBar

export default TopNavBar
