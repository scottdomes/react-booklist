import React from 'react';
// import React, { Component } from 'react';


export default React.createClass({
  getInitialState() {
    return {
      books: ['East of Eden', 'The Iliad', 'Theodore Rex']
    }
  },
  render() {
    const { books } = this.state
    return (
      <div className="container">
        <ul className="list-group">
          { books.map((item, index) => <li className="list-group-item" key={index}>{item}</li> )}
        </ul>
      </div>
    )
  }
})