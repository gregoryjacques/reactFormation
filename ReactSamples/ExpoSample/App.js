import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newPost : '',
      list: []
    }
  }
  render() {
    console.log(this.state.list);
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText}        
          onChangeText={this._onchange}
          value={this.state.newPost}
          /> 
          <TouchableHighlight style={styles.customButton} onPress={this._onpress} >
            <Text>Add123</Text>
          </TouchableHighlight>
        </View>
          <FlatList style={styles.customFlatList}
            data={this.state.list}
            renderItem={({item}) => <Text style={styles.customTextItem}>{item}</Text>}
            keyExtractor={(item,index) => index.toString()}
            contentContainerStyle={styles.customTextItem} 
          />
      </View>
    );
  }

  _onchange = (text) => {
    this.setState({...this.state.list, newPost : text});
  }
  _onpress = () => {
    const newPost = this.state.newPost;
    this.setState({newPost : '', list: [...this.state.list, newPost]});
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,    
    backgroundColor: '#fff',
    paddingTop : 40
  },
  inputView: {
    marginBottom:20,
  },
  inputText: {
    flex:4,
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1
  },
  customButton: {
    flex:1,
    marginLeft:20,
    padding:10,
    backgroundColor:'gray',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10
  },
  customFlatList : { 
    borderWidth:0
    },
  customTextItem : {
    margin:5,
    padding:10,
    borderWidth: 2,
  },

});
