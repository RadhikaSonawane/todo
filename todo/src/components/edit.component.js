import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      status:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/todo/edit/'+this.props.match.params.id).then(response => {
              this.setState({ 
                title: response.data.title, 
                description: response.data.description,
                status: response.data.status });
          }).catch(function (error) {
              console.log(error);
          })
    }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
        description: e.target.value
    })  
  }
  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    })
  }

    onSubmit(e) {
    e.preventDefault();
    const obj = {
    title: this.state.title,
    description: this.state.description,
    status: this.state.status
    };
    axios.post('http://localhost:5000/todo/update/'+this.props.match.params.id, obj).then(res => {console.log(res.data);
    this.props.history.push('/index');
    window.location.reload();
    });
    }
 
  render() {
    return (
        <div style={{ marginTop: 10 }} className="container">
            <h3 align="center">Update Todo</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                    <label>Status: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.status}
                      onChange={this.onChangeStatus}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Todo" 
                      className="btn btn-info"/>
                </div>
            </form>
        </div>
    )
  }
}