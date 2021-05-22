import React, {Component} from 'react';
import {StyleSheet, Text, View,  Flatlist} from 'react-native';

//importação de arquivos
import api from './src/ser/api';
import prop from './src/index.js';


class App extends Component{
  constructor(props){
    super(props);

    //local de armazenamento
    this.state ={}
    prop=[]
  }
}

//iniciar o App

ComponentDidMount(){
  const replay = api.get('swagger/api#api') 
  this.setState({
    prop:replay.data
  })
  render(){
    return(
      <View style={style.container}>
      <Flatlist
      data={this.state.prop}
      keyExtractor={item=>item.id.toString()}
      renderItem={(item)=><Prop data={item}/>}
      />
      </View>
    )
  }
}
