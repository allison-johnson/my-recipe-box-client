import React, { Component } from 'react'
import SearchForm from './SearchForm'

class Search extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <SearchForm loggedIn={this.props.loggedIn} userId={this.props.userId} users={this.props.users} />
      </div>
    )
  }
}

export default Search
