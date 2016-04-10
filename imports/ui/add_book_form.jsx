import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="form-group">
        <div className="col-md-10">
          <input className="form-control" type="text" placeholder="Add a book" />
        </div>
        <div className="col-md-2">
          <button className="btn btn-default">Add!</button>
        </div>
      </div>
    )
  }
})