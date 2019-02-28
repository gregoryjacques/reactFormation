import React, { PureComponent } from 'react';

class Post extends PureComponent {

  render() {
    return (
      <p>
        {this.props.item.content} <button onClick={this._onDeletePost}>remove</button>
      </p>
    );
  };

  _onDeletePost = () => {
    this.props.removePost(this.props.item.index);
  } 
}

export default Post