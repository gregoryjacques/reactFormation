import React, { Component } from 'react';
import Post from './Post'

class ListPost extends Component {

    constructor(){
        super();
    }

    render() {        
        return (
        <div>
            {this._getlist()}
        </div>
        );
    }

    _getlist = () => 
        this.props.posts.map((item) => 
            <Post item={item} deletePost={() => this.props.deletePost(item.id)}></Post>);   
    
}

export default ListPost;