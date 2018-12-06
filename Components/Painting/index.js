import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Dimensions , TouchableOpacity} from 'react-native';
import { Header, Title, Body, Right, Left} from 'native-base'
import  Icon  from 'react-native-vector-icons/Ionicons';


var deviceWidth = Dimensions.get("window").width;

export default class Painting extends Component {

  static navigationOptions={
    title:'Guernica',
    headerStyle:{
      backgroundColor:'#212121',
      
    },
    headerTitleStyle:{
      color:'white'
    },
    headerTintColor:'white'
  }

  render() {
    return (
      <View >
      <View style={styles.headerImage}>
        <View style={styles.painting}> 
          <Image source={require('../../assets/guernica.png')}  style={{resizeMode:'cover',flex:1, height:'100%', width:deviceWidth}}/>
        </View>
        <View style={styles.heart}>
        <Image source={require('../../assets/heart.png') }/>
        </View>
      </View>

      <View style={styles.text}>
        <Text>
        Guernica (Basque pronunciation: [ɡerˈnika]) is a large 
        oil painting on canvas by Spanish artist Pablo Picasso 
        completed in June 1937, at his home on Rue des 
        Grands Augustins, in Paris. 
        </Text>
        <Text>

        The painting, now in the Museo Reina Sofia in Madrid, 
        was done with a palette of gray, black, and white, and
        is regarded by many art critics as one of the most 
        moving and powerful anti-war paintings in history. 
        Standing at 3.49 meters (11 ft 5 in) tall and 7.76 meters 
        (25 ft 6 in) wide, the painting shows the suffering of 
        people and animals 
        wrenched by violence and chaos. 
                </Text>
      <TouchableOpacity 
      onPress={()=> this.props.navigation.navigate('Map')}
      style={{
        width:208,
        height:42,
        borderRadius:21,
        backgroundColor:'#FFC107', 
        justifyContent:'center', 
        alignItems: 'center', 
        marginLeft:80
      }}>
        <Text style={{textAlign:"center"}}>Find on map</Text>
        </TouchableOpacity>
      </View>


  
      
    </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#322',
  },
  background:{
    flex:1,
    resizeMode:'cover', 
    width:'100%', 
    height:'100%',
  },
  painting:{
    height:300,
    width:deviceWidth, 
  },
  headerImage:{
    position:'relative'
  },
  heart:{
    position:'absolute',
    bottom:-25,
    left:'40%'
  },
  text:{
    marginTop:20,
    paddingRight:20, 
    paddingLeft:20, 
    flex:1
  }



});


