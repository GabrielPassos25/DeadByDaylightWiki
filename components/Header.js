import React, { useState } from 'react';
import {Image, Text, View,TouchableOpacity, Button} from 'react-native';

const Header = () =>{
    return(
        <View>
            <View style={{backgroundColor:'#585858', flexDirection: 'row', padding: 5}}>
                <Image style={{width:80,height:60, marginTop:25,marginRight:'auto',marginLeft:10}} source={{ uri: "https://cdn2.downdetector.com/static/uploads/logo/dead-by-daylight.png"}}></Image>
                <View>
                    <TouchableOpacity style={{marginLeft:'auto', marginRight:10}}>
                        <Image style={{width:30,height:30, marginTop:40}}source={{uri:'https://icon-library.com/images/three-bar-menu-icon/three-bar-menu-icon-3.jpg'}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}

export default Header;