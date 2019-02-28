import React from 'react';
import Post from '../containers/RemovePostContainer';

const ListPost = (props) => {
  console.log(props);
  return (
  <div> { props.posts.map(item => <Post key={item.index} item={item} />)} </div>
)}

export default ListPost