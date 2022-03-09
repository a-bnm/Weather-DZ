import React from 'react'
import {StyleSheet ,View ,TextInput ,Button ,FlatList,Text, ActivityIndicator,ImageBackground} from 'react-native'
import VilleItem from './VilleItem'
import {getWeatherOfCity,getDailyForecastWeather} from '../Apifiles/WeatTApi'

class Recherche extends React.Component{
  constructor(props){
    super(props)
    this.state={
      villes:[],
      previsions:[],
      lati:0,
      long:0,
      Loading:false,
      searchedCity:""
    }

  }


  _textInputChanged(chaine){
    this.setState({ searchedCity: chaine})
  }

  _ChargerMeteoVille(){

     if(this.state.searchedCity.length>0){
       this.setState({Loading: true})

       getWeatherOfCity(this.state.searchedCity).then(data => {
         this.setState({ villes:Array(data),
                         Loading :false
                      })

       })
       console.log(this.state.searchedCity+"   "+this.state.villes)
     }

  }
  _ChargerPrevisionMeteo(){
    this.setState({Loading:true})
    getWeatherOfCity().then(data => {
      this.setState({
        lati: data.coord.lat,
        long: data.coord.lon,
        villes:Array(data),

                         }),
      console.log(this.state.lati+" and   "+this.state.long)
    }

    )
     getDailyForecastWeather(this.state.lati,this.state.long).then(data => {
       this.setState({
         previsions: Array(data.daily),
         Loading:false
       })
    })

  }

  _AffichageIconeChargement(){

    if(this.state.Loading){
      return(
        <View style={Apparence.loading}>
           <ActivityIndicator size="large" color='#536872'/>
        </View>
      )
    }
  }


   render () {

     return(
      <View style={Apparence.main_container}>

          <View style={Apparence.Style_Recherche}>
              <TextInput style={Apparence.zone_saisie}
                         placeholder="Cherchez le nom de votre ville"
                         onChangeText={(texte)=>this._textInputChanged(texte)}
                         onSubmitEditting={(texte) => this._textInputChanged(texte)}
                         />
              <Button color='#536872' title="Chercher" onPress={ () => {this._ChargerMeteoVille()}}/>
          </View>
          <View>
             <FlatList
                style={flex=1}
                data={this.state.villes}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) =>{
                   <VilleItem   ville={item}/>}
                }
             />
          </View>
          {this._AffichageIconeChargement()}

      </View>
     )
   }
}

const Apparence=StyleSheet.create({
   main_container:{
     flex:1,
   },
   Style_Recherche:{
     paddingTop : 20,
     backgroundColor:"white"

   },
   zone_saisie:{
     borderWidth:2,
     borderColor:'black',
     paddingLeft:7
   },
   loading:{
     position:'absolute',
     left:0,
     right:0,
     top:100,
     bottom:0,
     alignItems:'center',
     justifyContent:'center',

   }

})


export default Recherche
