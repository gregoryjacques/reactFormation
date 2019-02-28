import React, { Component } from 'react';

class AddPost extends Component{

    constructor(){
        super();
        this.state = {
            newPost : ''
        }
        this.input = null;         
    }

    render() {
        console.log(this.props);
        return (
        <form>
            <input 
                type='text' 
                value={this.state.newPost} 
                onChange={this._onChange}
                onSubmit={this._onSubmit}
                ref = {(v) => { this.input = v; }}
                />
            <button onClick={this._onSubmit} >Add</button>
            <div className={this.props.status === 'loading' ? 'lds-heart' : ''}><div></div></div>
        </form>
      ); 
    };
    
    _onSubmit = (event) => {
        event.preventDefault();
        this.props.addPost(this.state.newPost);
        this.setState({newPost : ''});
        this.input.focus();
    }

    _onChange = (event) => {
        this.setState({ newPost : event.target.value});
    }
}

export default AddPost
 