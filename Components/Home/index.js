import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Dimensions} from 'react-native';

var deviceWidth = Dimensions.get("window").width;
export default class Home extends Component {

  static navigationOptions={
    header:null
  }

  render() {
    return (
      <View style={styles.container}>

      <Image source={require('../../assets/musuem.png')} style={{position:'absolute',  left:0, right:0, bottom:0, width:deviceWidth,height:'100%' , resizeMode:'cover'}}/>
        <Image source={require('../../assets/waves.png')} style={styles.waves}/>
        <Text style={styles.header}>aMUSEUM.</Text>

        <View style={styles.menu}>
        <View style={styles.search}>
            <TextInput style={styles.searchBar}
            placeholder="Search for an artist"/>
        </View>
        <View style={styles.artists}>
        <TouchableWithoutFeedback onPress={ ()=> this.props.navigation.navigate('ArtistList')}>
            <View style={styles.name}>
              <Text style={{fontSize:14}}> Artists </Text>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.img}>
              <Image source={require('../../assets/pablo.png')} style={{ resizeMode:'cover', height:150}}/>
            </View>
          
        </View>
        <View style={styles.artists}>
          <View style={styles.name}>
            <Text style={{fontSize:14}}> Exhibits </Text>
          </View>
          <View style={styles.img}>
            <Image source={require('../../assets/exhibits.png')} style={{ resizeMode:'cover', height:150}}/>
          </View>
        </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  background:{
    flex:1,
    resizeMode:'cover', 
    width:'100%', 
    height:'100%',
  },
  artists:{
    flexDirection:'row',
    height:130,
    width:'90%',
    backgroundColor:'white',
    borderRadius:34,
    marginTop:30
  },
  name:{
    flex:1.5,
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:34
  },
  img:{
    flex:1,
    borderRadius:34,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:7
  },
  waves:{
    position:'absolute',
    top:0,
    right:0,
  },
  header:{
    fontSize:24,
    letterSpacing:5,
    color:'#FFC107',
    position:'absolute',
    top:75, 
    right:40
  },
  menu:{
    marginTop:150,
    justifyContent:'center',
    alignItems:'center'
  },
  searchBar:{
    width:300,
    height:40,
    backgroundColor:'white', 
    borderWidth:1,
    borderColor:'black', 
    borderRadius: 20,
    paddingLeft:20,
    marginBottom:40

  }



});


