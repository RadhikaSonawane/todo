import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Table extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:5000/todo/delete/'+this.props.obj._id).then(console.log('Deleted')).catch(err => console.log(err))
            window.location.reload()
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            {this.props.obj.status}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-info">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default Table;