import React, { useState } from 'react';
import {Image, Text, View,TouchableOpacity, Button, Dimensions, ScrollView, StyleSheet} from 'react-native';
import Header from './Header.js'
import Felix from './Felix.js'
const Survivors = () =>{
    const [estado,setarEstado] = useState('Sobreviventes');
    if(estado == 'Sobreviventes'){
        return(
            <View style={{paddingBottom:70, width: Dimensions.get('window').width, height:Dimensions.get('window').height,backgroundColor:'#29292b'}}>
                <ScrollView>
                <View style ={{flex:1, flexDirection:'row',padding:10, justifyContent:'center', marginTop:10}}>
                    <Text style={{color:'white',fontSize:25,marginTop:15}}>The <Text style={{textAlign:'center', marginLeft:5, fontSize:25, color: '#a6a105'}}>Survivors</Text></Text>
                    <Image style={{width:50,height:50}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/IconHelpLoading_survivor.png/revision/latest/scale-to-width-down/128?cb=20170926082103"}}/>          
                </View>
                <View style={{borderBottomColor: '#a6a105',borderBottomWidth: 1, marginTop:10, paddind:20}}/>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <TouchableOpacity>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/S01_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164239"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Dwight Fairfield</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/77/S02_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164249"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Meg Thomas</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/65/S03_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164234"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Claudette Morel</Text>
                    </View>
                </View>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cb/S04_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164244"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Jake Park</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/14/S05_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164259"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Nea Karlsson</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/S06_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164309"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Laurie Strode</Text>
                    </View>
                </View>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/S07_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164319"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Ace Visconti</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/66/S08_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164326"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Bill Overbeck</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/S09_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164421"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Feng Min</Text>
                    </View>
                </View>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/57/S10_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164450"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>David King</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b2/S11_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164337"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Quentin Smith</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/15/S12_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164348"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>David Tapp</Text>
                    </View>
                </View>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/19/S13_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164359"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Kate Denson</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/S14_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164409"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Adam Francis</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b9/S15_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164507"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Jeff Johansen</Text>
                    </View>
                </View>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d7/S16_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164524"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Jane Romero</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/78/S17_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164518"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Ash Williams</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0e/S18_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164545"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Nancy Wheeler</Text>
                    </View>
                </View>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/S19_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164551"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Steve Harrington</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/35/S20_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164558"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Yui Kimura</Text>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3d/S21_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164613"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Zarina Kassir</Text>
                    </View>
                </View>
                <View style ={{flex:1, flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/38/S22_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200721164624"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Cheryl Mason</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => setarEstado('Felix')}>
                            <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2e/S23_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200820001351"}}/>
                            <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Felix Richter</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/45/S24_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20210307122333"}}/>
                        <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', marginLeft:5, fontSize:18, color: '#a6a105'}}>Élodie Rakoto</Text>
                    </View>
                </View>
                <View style={{flex:1, alignItems:'center', marginTop:10}}>
                    <Image style={{width:130,height:180, flexDirection:'column', justifyContent: 'center'}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/79/S25_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20210307122429"}}/>
                    <Text style={{width:120, backgroundColor:'#585858', textAlign:'center', fontSize:18, color: '#a6a105'}}>Yun-Jin Lee</Text>
                </View>
                <View style={{marginBottom:40}}/>
                </ScrollView>
            </View>
        )    
    }
    else if(estado == 'Felix'){
        return(
            <View style={{backgroundColor:'#29292b'}} style={StyleSheet.absoluteFill}>
                <Header></Header>
                <Felix></Felix>
            </View>
        )
    }
}

export default Survivors;