import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import  Icon  from 'react-native-vector-icons/Ionicons';
import Home from './Components/Home/index'
import Painting from './Components/Painting/index'
import ArtistLists from './Components/ArtistsLists/index' 
import Artist from './Components/Artist/index'
import Filter from './Components/Filters/index'
import Map from './Components/Map/index'

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Settings</Text>
      </View>
    );
  }
}


const StackArtists = createStackNavigator({
  Home: {screen : Home}, 
  Painting : {screen: Painting},
  ArtistList: {screen: ArtistLists},
  Artist:{screen:Artist},
  Map:{screen:Map}
}, { initialRouteName:'Home'})


const AppNav = createBottomTabNavigator({
  Home:{screen:StackArtists,
  navigationOptions:{
    
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor})=>(
      <Icon  name="ios-home" color={tintColor} size={30}/>
    )
  }},
  Games: { screen: Filter, 
  navigationOptions:{
    tabBarLabel:'Settings', 
    tabBarIcon: ({tintColor})=>(
      <Icon  name="logo-game-controller-b" color={tintColor} size={30}/>
    )
  }}, 
  Camera: { screen: Map, 
    navigationOptions:{
      tabBarLabel:'Settings', 
      tabBarIcon: ({tintColor})=>(
        <Icon  name="ios-camera" color={tintColor} size={30}/>
      )
    }},
  Favourites: { screen: Settings, 
      navigationOptions:{
        tabBarLabel:'Settings', 
        tabBarIcon: ({tintColor})=>(
          <Icon  name="ios-heart" color={tintColor} size={30}/>
        )
      }},
  Map: { screen: Settings, 
        navigationOptions:{
          tabBarLabel:'Settings', 
          tabBarIcon: ({tintColor})=>(
            <Icon  name="ios-map" color={tintColor} size={30}/>
          )
        }}
}, 
  {
    order:['Home', 'Games', 'Camera', 'Favourites', 'Map'],
    initialRouteName: 'Home',
    tabBarOptions:{
      showLabel:false,
      activeTintColor:'white',
      inactiveTintColor:'grey',
      style:{
        backgroundColor:'#212121'
      }
    },
 

  })

export default createAppContainer(AppNav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
