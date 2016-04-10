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
        <div className="row">
          <div className="form-group">
            <div className="col-md-10">
              <input className="form-control" type="text" placeholder="Add a book" />
            </div>
            <div className="col-md-2">
              <button className="btn btn-default">Add!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})