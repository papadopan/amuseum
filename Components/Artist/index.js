import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Dimensions , ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native';
import { Header, Title, Body, Right, Left} from 'native-base'
import  Icon  from 'react-native-vector-icons/Ionicons';



var deviceWidth = Dimensions.get("window").width;

export default class Painting extends Component {

    constructor(){
        super()
        this.state={
            data:[
                {img : require('../../assets/gu.png'), key:'1', title:'Guernica'}, 
                {img : require('../../assets/gui.png'), key:'2', title:'The old guitarist'}, 
                {img : require('../../assets/les.png'), key:'3', title:'Les mademoi'} ,
                {img : require('../../assets/gui.png'), key:'4', title:'The old guitarist'}, 
                {img : require('../../assets/les.png'), key:'5', title:'Les Mademoi'}, 
                {img : require('../../assets/gu.png'), key:'6', title:'Guernica'}, 
            ]
        }
    }

  press= () =>{

  }


  static navigationOptions={
    title:'Pablo Picasso',
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
      <View style={styles.container}>
      <ScrollView>
      <View style={styles.headerImage}>
        <View style={styles.painting}> 
          <Image source={require('../../assets/pablito.png')}  style={{resizeMode:'cover',flex:1, height:200, width:deviceWidth}}/>
        </View>
    
      </View>

      <View style={styles.text}>
        <Text>
        Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.
        </Text>
        <Text style={{marginTop:10, fontSize:18, color:'black'}}>Exhibits</Text>    
        <View style={{width:deviceWidth, height:1, backgroundColor:'#707070'}}></View>
             <FlatList
             style={{marginTop:10}}
                horizontal={true}
                data={this.state.data}
                renderItem = {( {item}) => 
                <TouchableWithoutFeedback onPress={ ()=> this.props.navigation.navigate('Painting')}>
                  <View>
                      <Image  source={item.img}/>  
                      <Text style={{textAlign:"center"}}>{item.title}</Text> 
                  </View>
                </TouchableWithoutFeedback>
                }
            /> 

      </View>

  </ScrollView>
      
    </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:3,
    paddingRight:3
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
    position:'relative',
    margin:0,
    padding:0
  },
  heart:{
    position:'absolute',
    bottom:-25,
    left:'40%'
  },
  text:{
    marginTop:20,
    flex:1
  }



});


