import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import fonts from '../styles/fonts';

export default function Choice() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#29292b', paddingTop: 20 }}>
            <StatusBar backgroundColor='#29292b' />
            <ScrollView>
                <View style={{ flex: 1, paddingBottom: 70, backgroundColor: '#29292b', paddingTop: 20 }}>
                    <View style={{ marginTop: 15, marginLeft: 0 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 10 }} onPress={() => navigation.navigate('Killers')}>
                                <Text style={{ color: 'white', fontSize: 25, marginTop: 15, fontFamily: fonts.heading }}>The <Text style={{ textAlign: 'center', marginLeft: 5, fontSize: 25, color: '#a6a105' }}>Killers</Text></Text>
                                <Image style={{ width: 50, height: 50 }} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/06/IconHelpLoading_killer.png/revision/latest/scale-to-width-down/128?cb=20170926082027" }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 5 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ textAlign: 'justify', fontFamily: fonts.text, color: 'white', fontSize: 16, marginTop: 15, flexWrap: 'wrap', flex: 1, marginLeft: 15, marginRight: 15 }}>The Killers have been tasked by The <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Entity</Text> to hunt down and sacrifice every <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Survivor </Text>before they can escape. In order to achieve this objective, a Killer should do the following: {"\n"}{"\n"}• Patrol the area and find Survivors;{"\n"}{"\n"}• Chase, injure and catch Survivors before they escape.{"\n"}{"\n"}• Carry Survivors to a sacrificial Hook and hang them there for The Entity to consume.{"\n"}{"\n"}Meanwhile, Survivors will be attempting to repair 5 <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Generators</Text> in order to power the 2 <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Exit Gates</Text> and make their escape. Killers should do everything in their power to stop them. </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: fonts.text, marginTop: 15, flexWrap: 'wrap', flex: 1, marginLeft: 15, color: '#a6a105', marginRight: 15 }}>Check out the full list of Killers by clicking on the "The Killers" button at the top of the session.</Text>
                        </View>
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 15 }} />
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 0 }}>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }} onPress={() => navigation.navigate('Survivors')}>
                                <Text style={{ color: 'white', fontSize: 25, marginTop: 15, fontFamily: fonts.heading }}>The <Text style={{ textAlign: 'center', marginLeft: 5, fontSize: 25, color: '#a6a105' }}>Survivors</Text></Text>
                                <Image style={{ width: 50, height: 50 }} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/IconHelpLoading_survivor.png/revision/latest/scale-to-width-down/128?cb=20170926082103" }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 5 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: fonts.text, marginTop: 15, flexWrap: 'wrap', flex: 1, marginLeft: 15, marginRight: 15 }}>The Survivors' task is to try and escape from the <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Realms</Text> of the <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Entity </Text>in which they are trapped. In order to do so, Survivors must complete the following tasks: {"\n"}{"\n"}• Repair 5 <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Generators</Text> to power the 2 <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Exit Gates</Text>;{"\n"}{"\n"}• Open at least one of the Exit Gates and leave the Trial Grounds or escape through the <Text style={{ fontWeight: 'bold', color: '#e2ce97' }}>Hatch</Text>;{"\n"}{"\n"}Meanwhile, the<Text style={{ fontWeight: 'bold', color: '#e2ce97' }}> Killers</Text>  will be trying to locate, catch and hook Survivors in order to sacrifice them to The Entity.{"\n"}{"\n"}Even though Survivors are vulnerable, they have a very useful set of core abilities to hide and escape from the Killer. </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: fonts.text, marginTop: 15, flexWrap: 'wrap', flex: 1, marginLeft: 15, color: '#a6a105', marginRight: 15 }}>Check out the full list of Survivors by clicking on the "The Survivors" button at the top of the session.</Text>
                        </View>
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 15 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}