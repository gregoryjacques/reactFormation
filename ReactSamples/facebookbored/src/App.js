import React, { Component } from 'react';
import './App.css';
import AddPost from './AddPost'
import ListPost from './ListPost'

class App extends Component {
  constructor() {
    super();
    this.state = { 
      items : [{id:0, text:'mon premier post'}], 
      newPost: ''
    };
  }

  render() {
    return (
      <div className="App">
        <AddPost onSubmit={this._onSubmit}></AddPost>
        <ListPost posts={this.state.items} deletePost={this._deletePost} >
        </ListPost>
      </div>
    );
  }
  
  _onSubmit = (newPost) => {
    let {items} = this.state;
    items = [...items, { id:(items.length++), text:newPost }];
    this.setState({items : items, value:''});
  }  

  _deletePost = (id) => {
    const arr = this.state.items.filter(item => item.id !== id);
    console.log(arr);
    
    this.setState({items : arr});
  }
}

export default App;
