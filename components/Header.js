import React, { useState } from 'react';
import {Image, View,Text, TouchableOpacity, StyleSheet} from 'react-native';
import Survivors from './Survivors.js'
import Characters from './Characters.js'

const Header = () =>{
    var data = [["Home", "The Survivors", "The Killers", "Shrine of Secrets", "Pre-made Builds"]]
    const [estado,setarEstado] = useState('Home');
    if(estado == 'Home'){
        return(
            <View style={{backgroundColor:'#585858', flexDirection: 'row', padding: 5, justifyContent:'space-between'}}>
                <Image style={{width:80,height:60, marginTop:25,marginRight:'auto',marginLeft:10}} source={{ uri: "https://cdn2.downdetector.com/static/uploads/logo/dead-by-daylight.png"}}></Image>
                <TouchableOpacity >
                    <Text style= {{marginTop:50, color: '#a6a105', fontSize:16, textDecorationLine: 'underline', fontWeight:'bold'}}>Home</Text>
                </TouchableOpacity>
                <View style={{height:'30%', width:1, backgroundColor:'#e2ce97', marginLeft: 5, marginTop:45}}></View>
                <TouchableOpacity onPress={() => setarEstado('Characters')}>
                    <Text style= {{marginTop:50, color: 'white', marginLeft:5, fontSize:16}}>Characters</Text>
                </TouchableOpacity>
                <View style={{height:'30%', width:1, backgroundColor:'#e2ce97', marginLeft: 5, marginTop:45}}></View>
                <TouchableOpacity>
                    <Text style= {{marginTop:50, color: 'white', marginLeft:5, fontSize:16}}>Shrine of Secrets</Text>
                </TouchableOpacity>
                <View style={{height:'30%', width:1, backgroundColor:'#e2ce97', marginLeft: 5, marginTop:45}}></View>
                <TouchableOpacity>
                    <Text style= {{marginTop:50, color: 'white', marginLeft:5, fontSize:16, marginRight:5}}>Builds</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if(estado == 'Characters'){
        return(
            <View>
                <View style={{backgroundColor:'#585858', flexDirection: 'row', padding: 5, justifyContent:'space-between'}}>
                    <Image style={{width:80,height:60, marginTop:25,marginRight:'auto',marginLeft:10}} source={{ uri: "https://cdn2.downdetector.com/static/uploads/logo/dead-by-daylight.png"}}></Image>
                    <TouchableOpacity onPress={() => setarEstado('Home')}>
                        <Text style= {{marginTop:50, color: 'white', fontSize:16}}>Home</Text>
                    </TouchableOpacity>
                    <View style={{height:'30%', width:1, backgroundColor:'#e2ce97', marginLeft: 5, marginTop:45}}></View>
                    <Text style= {{marginTop:50, color: '#a6a105', marginLeft:5, fontSize:16, textDecorationLine: 'underline', fontWeight:'bold'}}>Characters</Text>
                    <View style={{height:'30%', width:1, backgroundColor:'#e2ce97', marginLeft: 5, marginTop:45}}></View>
                    <TouchableOpacity>
                        <Text style= {{marginTop:50, color: 'white', marginLeft:5, fontSize:16}}>Shrine of Secrets</Text>
                    </TouchableOpacity>
                    <View style={{height:'30%', width:1, backgroundColor:'#e2ce97', marginLeft: 5, marginTop:45}}></View>
                    <TouchableOpacity>
                        <Text style= {{marginTop:50, color: 'white', marginLeft:5, fontSize:16, marginRight:5}}>Builds</Text>
                    </TouchableOpacity>
                </View>
                <Characters></Characters>
            </View>
        )
    }
}

export default Header;