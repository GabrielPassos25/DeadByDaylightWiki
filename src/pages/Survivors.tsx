import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image, Text, View, TouchableOpacity, Dimensions, ScrollView, SafeAreaView, StyleSheet, StatusBar, Platform, FlatList } from 'react-native';
import informations from '../libs/Data_Survivors'
import fonts from '../styles/fonts';

const color_difficult = ['#199b1e', '#e8c252', '#d41c1c']
let color_survivor = ''
const setThings = (difficult) => {
    if (difficult === 'Easy') {
        color_survivor = color_difficult[0]
    }
    else if (difficult === 'Intermediate') {
        color_survivor = color_difficult[1]
    }
    else {
        color_survivor = color_difficult[2]
    }
}
export function Survivors() {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('SurvivorDetails', {
                name: item.name,
                gender: item.gender,
                role: item.role,
                nationality: item.nationality,
                dlc: item.dlc,
                description_init: item.description_init,
                description_end: item.description_end,
                description_overview: item.description_overview,
                perks: item.perks,
                perk1_name: item.perk1_name,
                perk1_image: item.perk1_image,
                perk1_description: item.perk1_description,
                perk2_name: item.perk2_name,
                perk2_image: item.perk2_image,
                perk2_description: item.perk2_description,
                perk3_name: item.perk3_name,
                perk3_image: item.perk3_image,
                perk3_description: item.perk3_description,
                difficult: item.difficult,
                image: item.image,
                image_overview: item.image_overview,
                lore: item.lore,
                lore_image: item.lore_image,

            })}>
                <View style={{ marginTop: 5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 5 }}>
                    {
                        setThings(item.difficult)
                    }
                    <Image style={{ width: 130, height: 180, marginLeft: 20 }} source={{ uri: item.image }} />
                    <Text style={{ flex: 1, fontFamily: fonts.text, flexWrap: 'wrap', color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 20, marginBottom: 10 }}><Text style={{ fontWeight: 'bold' }}>{item.name}</Text> {item.description_init}{item.description_end}{"\n"}{"\n"}{item.perks}<Text style={{ fontWeight: 'bold', color: '#a1a41f' }}> {item.perk1_name}</Text><Text style={{ color: 'white' }}>, </Text><Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>{item.perk2_name}</Text> <Text style={{ color: 'white' }}>&</Text> <Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>{item.perk3_name}</Text>.<Text style={{ color: 'white', paddingLeft: 25, fontSize: 14, textAlign: 'left', marginTop: 5 }}>{"\n"}{"\n"}Difficulty rating:<Text style={{ fontWeight: 'bold', color: color_survivor }}> {item.difficult}</Text></Text></Text>
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
                        <Text style={{ color: 'white', fontSize: 25, marginTop: 15, fontFamily: fonts.heading }}>The <Text style={{ textAlign: 'center', marginLeft: 5, fontSize: 25, color: '#a6a105' }}>Survivors</Text></Text>
                        <Image style={{ width: 50, height: 50 }} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/IconHelpLoading_survivor.png/revision/latest/scale-to-width-down/128?cb=20170926082103" }} />
                    </View>
                </View>
                <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 10 }} />
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
                marginLeft: 5
            },
            android: {
                width: 30,
                height: 30,
                marginTop: 10,
                marginLeft: 5
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
                color: '#a6a105'
            },
            android: {
                flex: 1,
                flexWrap: 'wrap',
                fontSize: 20,
                textAlign: 'left',
                marginTop: 10,
                color: '#a6a105',
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