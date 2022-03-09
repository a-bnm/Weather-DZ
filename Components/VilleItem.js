import React from 'react'
import {StyleSheet , View , Text ,Image ,ImageBackground} from 'react-native'
import {getIconTemp} from '../Apifiles/WeatTApi'

class VilleItem extends React.Component{
   _firstCarToUpperCase(chaine){
     return(chaine[0].toUpperCase()+chaine.substr(1))
   }
  render(){
    console.log("hiiiiii")
    const ville=this.props.ville
    const w=ville.weather


    return(
        <View style={Apparence.fondp}>
          <View style={Apparence.ville_nom}>
             <Text style={Apparence.texte}>{ville.name+" , "+ville.sys.country} </Text>
          </View>
          <View style={Apparence.second_fond}>
            <View style={Apparence.pict_container}>
              <Image
                style={Apparence.pict}
                source={{uri:getIconTemp(w[0].icon)}}
               />
            </View>
            <Text style={Apparence.texte} >{ ville.main.temp+"C°"}</Text>
            <Text style={Apparence.ligne}>_____________________________</Text>
          </View>
          <View style={Apparence.third_fond}>
              <Text style={Apparence.texte1}>{this._firstCarToUpperCase(w[0].description)} </Text>
              <Text style={Apparence.texte1}>{"Vitesse du vent:  "+ville.wind.speed+"m/s"}</Text>
              <Text style={Apparence.texte1}>{"Direction du vent(en degrés): "+ville.wind.deg+"°"}</Text>
              <Text style={Apparence.texte1}>{"Densité des nuages: "+ville.clouds.all}</Text>
         </View>
         <View style={Apparence.temperature}>
             <Text style={Apparence.texte1}>{ "Temperature Maximale: "+ville.main.temp_max+"C°"}</Text>
             <Text style={Apparence.texte1}>{ "Temperature Minimale:  "+ville.main.temp_min+"C°"}</Text>
         </View>

    </View>



    )
  }
}

const Apparence=StyleSheet.create({
  fondp:{
    flex:1,
    justifyContent:"center",
    flexDirection:'column',
    backgroundColor:'grey'
  },

  second_fond:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    fontSize:100,
    paddingTop:40,
  },
  pict_container:{
    backgroundColor:'white',
    width:170,
    height:170,
    borderRadius:340/2,
    justifyContent:'center',
    alignItems:'center',
  },
  ligne:{
    color:"white",
    alignItems:'center'
  },
  third_fond:{
    flex:3,
    alignItems:'flex-start',
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10
  },
  ville_nom:{
    color:"white",
    alignItems:'flex-end'
  },
  pict:{
    height:150,
    width:150
  },
  texte:{
    color:'black',
    fontSize:25
  },
  texte1:{
    color:'white',
    fontSize:16,
    alignItems:'flex-start',
  },
  temperature:{
    alignItems:'flex-start',
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10
  }

})

export default VilleItem
