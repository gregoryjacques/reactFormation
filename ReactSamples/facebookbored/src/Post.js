import React, { Component } from 'react';

class Post extends Component {

    constructor(){
        super();        
    }

    render() {        
        const { item } = this.props;
        console.log(item);
        return (
            <p> {item.text}
                <button onClick={() => this.props.deletePost(item.id)}>remove</button>
            </p>);
    }
}


export default Post;