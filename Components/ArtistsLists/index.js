import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Dimensions , TouchableWithoutFeedback, FlatList} from 'react-native';
import { Header, Title, Body, Right, Left} from 'native-base'
import  Icon  from 'react-native-vector-icons/Ionicons';



export default class ArtistsList extends Component {

  constructor(){
      super()
      this.state={
          data:[
            {name:'Salvador Dali', key:'1'}, 
            {name:'Pablo Picasso', key:'2'},
            {name:'Vincent Van Gogh', key:'3'},
            {name:'Claude Monet', key:'4'},
            {name:'Leonardo Da Vinci', key:'5'},
            {name:'Remrandt', key:'6'},
            {name:'Andy Warhol', key:'7'},
            {name:'Frida Kahlo', key:'8'},
        ]
      }
  }


  static navigationOptions={
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableWithoutFeedback onPress={ ()=> this.props.navigation.navigate('Home')}>
        <View style={{flexDirection:'row' , position:'absolute', top:10, left:10}}>
          <Icon name="ios-arrow-back" size={24} color="black"/>
          <Text style={{fontSize:18, marginLeft:20, color:'black'}}>Artists</Text>
        </View>
        </TouchableWithoutFeedback>
      <Image source={require('../../assets/smallWaves.png')} style={{position:'absolute', top:0, right:-1}}/>
      <Image source={require('../../assets/smallBottomWaves.png')} style={{position:'absolute', bottom:-15, left:-15}}/>
        <View style={styles.search}>
            <TextInput style={styles.searchBar}
            placeholder="Search for an artist"/>
        </View>

        
            <FlatList
                data={this.state.data}
                style={{borderTopLeftRadius:50}}
                renderItem = {( {item}) => 
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Artist')}>
                      <Text style={styles.list}>{item.name}</Text>
                    </TouchableWithoutFeedback>
                    
                }
            />
        

        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 

  },
  searchBar:{
    width:300,
    height:40,
    backgroundColor:'white', 
    borderWidth:1,
    borderColor:'black', 
    borderRadius: 20,
    paddingLeft:20,
    marginBottom:40, 
    marginTop:100

  }, 
  list:{
    width :267,
    height: 50,
    borderWidth:1,
    borderColor:'#707070', 
    textAlign:'center', 
    paddingTop:15, 
    backgroundColor:'white', 
    fontSize:16, 

  }
  
});

