import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {todo: []};
    }
    componentDidMount(){
      axios.get('http://localhost:5000/todo').then(response => {
          this.setState({ todo: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }


    tab(){
      return this.state.todo.map(function(object, i){
          return <Table obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div className="container mt-4 ">
          <div className=""> 
            <h3 align="center">Todo List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th colSpan="1">Action</th>
                  <th colSpan="1">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tab() }
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }