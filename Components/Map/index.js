import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput , TouchableWithoutFeedback, Picker } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';


export default class Map extends Component {

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
        ],
        artists:'Artists', 
        exhibitions:'Exhibitions',
        movements:'Movements', 
        periods:"Periods", 
        open: true
      }
  }


  toggleSwitch = () =>{
      this.setState({open:!this.state.open})
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
          <Text style={{fontSize:18, marginLeft:20, color:'black'}}>Home</Text>
        </View>
        </TouchableWithoutFeedback>
      <Image source={require('../../assets/smallWaves.png')} style={{position:'absolute', top:0, right:-1}}/>
      <Image source={require('../../assets/smallBottomWaves.png')} style={{position:'absolute', bottom:-15, left:-15}}/>
        <View style={styles.search}>
            <TextInput style={styles.searchBar}
            placeholder="Search for an artist"/>
        </View>
        


            <View style={{height:400, width:300, backgroundColor:'white', flexDirection:'column', borderRadius:21}}>
            <View style={{height:50, width:'100%', flexDirection:'row' }}>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                    <View style={{width:15, height: 15 ,backgroundColor:'#F48221', borderRadius:7}}></View>
                    <Text style={{fontSize:14, marginLeft:10}}>Picasso</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                    <View style={{width:15, height: 15 ,backgroundColor:'#0095DB', borderRadius:7}}></View>
                    <Text style={{fontSize:14, marginLeft:10}}>Bosch</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                    <View style={{width:15, height: 15 ,backgroundColor:'#FEDC01', borderRadius:7}}></View>
                    <Text style={{fontSize:14, marginLeft:10}}>El Greco</Text>
                </View>
            </View>
            <View style={{height:350, width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Image source={ require('../../assets/map.png')}/>
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


