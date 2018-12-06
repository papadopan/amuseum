import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput , TouchableWithoutFeedback, Picker } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';




export default class Filter extends Component {

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
      {/* <TouchableWithoutFeedback onPress={ ()=> this.props.navigation.navigate('Home')}>
        <View style={{flexDirection:'row' , position:'absolute', top:10, left:10}}>
          <Icon name="ios-arrow-back" size={24} color="black"/>
          <Text style={{fontSize:18, marginLeft:20, color:'black'}}>Artists</Text>
        </View>
        </TouchableWithoutFeedback> */}
      <Image source={require('../../assets/smallWaves.png')} style={{position:'absolute', top:0, right:-1}}/>
      <Image source={require('../../assets/smallBottomWaves.png')} style={{position:'absolute', bottom:-15, left:-15}}/>
        <View style={styles.search}>
            <TextInput style={styles.searchBar}
            placeholder="Search for an artist"/>
        </View>
        
        <View style={{borderWidth:1, borderBottomWidth:0, borderTopLeftRadius:21,borderTopRightRadius:21,  borderColor:'black', width:300}}>
            <Picker
                mode="dropdown"
                selectedValue={this.state.artists}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) => this.setState({artists: itemValue})}>
                <Picker.Item label="Artists" value="artists" />
                <Picker.Item label="Pablo Picasso" value="pablo">

                </Picker.Item>
                <Picker.Item label="Rembrandt" value="Rembrandt" />
                <Picker.Item label="Salvador Dali" value="Salvador Dali" />
                <Picker.Item label="Andy Warhol" value="Andy Warho" />
                
            </Picker>
        </View>
        <View style={{borderWidth:1, borderBottomWidth:0 ,borderColor:'black', width:300}}>
            <Picker
                mode="dropdown"
                selectedValue={this.state.exhibitions}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) => this.setState({exhibitions: itemValue})}>
                <Picker.Item label="Exhibitions" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>
        <View style={{borderWidth:1, borderBottomWidth:0 ,borderColor:'black', width:300}}>
            <Picker
                mode="dropdown"
                selectedValue={this.state.periods}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) => this.setState({periods: itemValue})}>
                <Picker.Item label="Periods" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>
        <View style={{borderWidth:1, borderColor:'black', borderBottomLeftRadius:21, borderBottomRightRadius:21 , width:300}}>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.movements}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({movements: itemValue})}>
                    <Picker.Item label="Movements" value="java">
                    </Picker.Item>
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>

            <View style={{marginTop:20, backgroundColor:'#FFC107',width:153, height:42, borderRadius:21, justifyContent:'center'}}>
            <TouchableWithoutFeedback onPress={ ()=> this.props.navigation.navigate('Artist')} >
                <Text style={{textAlign:"center", color:'black'}}>Apply Filters</Text>
            </TouchableWithoutFeedback>
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


