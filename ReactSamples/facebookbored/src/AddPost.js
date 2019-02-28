import React, { Component, Fragment } from 'react';

class AddPost extends Component {
    constructor(){
        super();
        this.state = { newpost : {}};
    }
  render() {
    return (
        <Fragment>
            <input type='text' onChange={this._onChange} ></input>
            <button onClick={this._addPost}>Add</button>
        </Fragment>
    );
  }

  _addPost = (event) => {    
    this.props.onSubmit(this.state.newPost);
  }

  _onChange = (event) => {
    this.setState({newPost : event.target.value});
  }
}

export default AddPost;