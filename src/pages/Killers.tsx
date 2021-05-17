import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image, Text, View, TouchableOpacity, Dimensions, ScrollView, SafeAreaView, StyleSheet, StatusBar, Platform, FlatList } from 'react-native';
import informations from '../libs/Data_Killers'
import fonts from '../styles/fonts';

const color_difficult = ['#199b1e', '#e8c252', '#d41c1c']
let color_killer = ''
const setThings = (difficult) => {
    if (difficult === 'Easy') {
        color_killer = color_difficult[0]
    }
    else if (difficult === 'Intermediate') {
        color_killer = color_difficult[1]
    }
    else {
        color_killer = color_difficult[2]
    }
}

export function Killers() {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(item.name.split(" ")[0])}>
                <View style={{ marginTop: 5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 5 }}>
                    {
                        setThings(item.difficult)
                    }
                    <Image style={{ width: 130, height: 180, marginLeft: 20 }} source={{ uri: item.image }} />
                    <Text style={{ flex: 1, flexWrap: 'wrap', color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 20, marginBottom: 10, fontFamily: fonts.text }}><Text style={{ fontWeight: 'bold' }}>{item.name}</Text> {item.description}{"\n"}{"\n"}{item.perks}<Text style={{ fontWeight: 'bold', color: '#a1a41f' }}> {item.perk1}</Text><Text style={{ color: 'white' }}>, </Text><Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>{item.perk2}</Text> <Text style={{ color: 'white' }}>&</Text> <Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>{item.perk3}</Text>.<Text style={{ color: 'white', paddingLeft: 25, fontSize: 14, textAlign: 'left', marginTop: 5 }}>{"\n"}{"\n"}Difficulty rating:<Text style={{ fontWeight: 'bold', color: color_killer }}> {item.difficult}</Text></Text></Text>
                </View>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1 }} />
        </View>
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#29292b' }}>
            <StatusBar backgroundColor='#29292b' />
            <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#29292b' }}>
                <View>
                    <View>
                        <TouchableOpacity style={{ marginTop: 5, flexDirection: 'row', width: '100%', justifyContent: 'center' }} onPress={() => navigation.navigate('Home')}>
                            <Image style={styles.back_button} source={{ uri: "https://i.imgur.com/VimgyK5.png" }} />
                            <Text style={styles.back_text}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 25, marginTop: 15, fontFamily: fonts.heading }}>The <Text style={{ textAlign: 'center', marginLeft: 5, fontSize: 25, color: '#a6a105' }}>Killers</Text></Text>
                        <Image style={{ width: 50, height: 50 }} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/06/IconHelpLoading_killer.png/revision/latest/scale-to-width-down/128?cb=20170926082027" }} />
                    </View>
                </View>
                <View style={{ flex: 1, borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 10 }} />
                <FlatList
                    data={informations}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
                <View style={{ marginBottom: 120, backgroundColor: '#29292b' }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    back_button: {
        ...Platform.select({
            ios: {
                width: 30,
                height: 30,
                marginTop: 10,
                marginLeft: 5,
            },
            android: {
                width: 30,
                height: 30,
                marginTop: 10,
                marginLeft: 5,

            }
        })
    },
    back_text: {
        ...Platform.select({
            ios: {
                flex: 1,
                flexWrap: 'wrap',
                fontSize: 20,
                textAlign: 'left',
                marginTop: 15,
                color: '#a6a105',
                fontFamily: fonts.text
            },
            android: {
                flex: 1,
                flexWrap: 'wrap',
                fontSize: 20,
                textAlign: 'left',
                marginTop: 10,
                color: '#a6a105',
                fontFamily: fonts.text
            }
        })
    },
    description: {
        ...Platform.select({
            ios: {
                alignItems: 'center',
                flex: 2,
                marginVertical: 20,
                paddingTop: 10,
                backgroundColor: 'red',
            },
            android: {
                alignItems: 'center',
                flex: 2,
                marginVertical: 5,
                paddingTop: 10
            }
        })
    }
});