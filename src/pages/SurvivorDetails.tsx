import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, Dimensions, ScrollView, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Collapsible from 'react-native-collapsible'
import { useNavigation, useRoute } from '@react-navigation/core';

import informations from '../libs/Data_Survivors'
import colors from '../styles/colors';

interface Survivor {
    name: string,
    gender: string,
    role: string,
    nationality: string,
    dlc: string,
    description_init: string,
    description_end: string,
    description_overview: string,
    perks: string,
    perk1_name: string,
    perk1_image: string,
    perk1_description: string,
    perk2_name: string,
    perk2_image: string,
    perk2_description: string,
    perk3_name: string,
    perk3_image: string,
    perk3_description: string,
    difficult: string,
    image: string,
    image_overview: string,
    lore: string,
    lore_image: string,
}

export function SurvivorDetails() {
    const navigation = useNavigation();
    const routes = useRoute();
    const {
        name,
        gender,
        role,
        nationality,
        dlc,
        description_init,
        description_end,
        description_overview,
        perks,
        perk1_name,
        perk1_image,
        perk1_description,
        perk2_name,
        perk2_image,
        perk2_description,
        perk3_name,
        perk3_image,
        perk3_description,
        difficult,
        image,
        image_overview,
        lore,
        lore_image,
    } = routes.params as Survivor;
    const [collapsed, setCollapsed] = useState(true); //Overview
    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };
    const [collapsed2, setCollapsed2] = useState(true); //Lore
    const toggleExpanded2 = () => {
        setCollapsed2(!collapsed2);
    };
    const [collapsed3, setCollapsed3] = useState(true); //Perks
    const toggleExpanded3 = () => {
        setCollapsed3(!collapsed3);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#29292b' }}>
            <View style={{ flex: 1, backgroundColor: '#29292b' }}>
                <ScrollView>
                    {/*Se????o Informa????es gerais*/}
                    <View>
                        <TouchableOpacity style={{ marginTop: 5, flexDirection: 'row', width: '100%', justifyContent: 'center' }} onPress={() => navigation.navigate('Survivors')}>
                            <Image style={styles.back_button} source={{ uri: "https://i.imgur.com/VimgyK5.png" }} />
                            <Text style={styles.back_text}>The Survivors</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#202020', padding: 20, marginLeft: 5, marginRight: 5, marginTop: 0, borderRadius: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 30, backgroundColor: '#181818', width: Dimensions.get('window').width - 20, textAlign: 'center' }}>{name}</Text>
                            <Image style={{ width: 130, height: 180 }} source={{ uri: image }} />
                            {/* View Pai informa????es*/}
                            <View style={{ flex: 1, flexDirection: 'column', marginTop: 5, width: '100%', alignItems: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ flex: 1, backgroundColor: '#585858', fontSize: 20, color: 'white', textAlign: 'center' }}>Gender</Text>
                                </View>
                                <Text style={{ flex: 1, flexWrap: 'wrap', fontSize: 18, color: 'white', marginTop: 5 }}>{gender}</Text>
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ flex: 1, backgroundColor: '#585858', fontSize: 20, color: 'white', textAlign: 'center' }}>Role</Text>
                                </View>
                                <Text style={{ flex: 1, flexWrap: 'wrap', fontSize: 18, color: 'white', marginTop: 5 }}>{role}</Text>
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ flex: 1, backgroundColor: '#585858', fontSize: 20, color: 'white', textAlign: 'center' }}>Nationality</Text>
                                </View>
                                <Text style={{ flex: 1, flexWrap: 'wrap', fontSize: 18, color: 'white', marginTop: 5 }}>{nationality}</Text>
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ flex: 1, backgroundColor: '#585858', fontSize: 20, color: 'white', textAlign: 'center' }}>DLC</Text>
                                </View>
                                <Text style={{ flex: 1, flexWrap: 'wrap', fontSize: 18, color: 'white', marginTop: 5 }}>{dlc}</Text>
                            </View>
                            <Text style={{ color: 'white', paddingLeft: 10, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 10 }}>{description_init} <Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>{dlc} </Text>{description_end}</Text>
                        </View>
                    </View>
                    {/*Se????o Informa????es Detalhadas*/}
                    <View style={{ backgroundColor: '#202020', padding: 10, marginLeft: 5, marginRight: 5, marginTop: -15, borderRadius: 10 }}>
                        <Text style={{ color: '#a6a105', maxWidth: Dimensions.get('window').width }}></Text>
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1 }} />
                        {/*Se????o Overview*/}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                            <Text style={{ color: 'white', paddingLeft: 15, fontSize: 25, marginTop: 15 }}>Overview</Text>
                            <TouchableOpacity style={{}} onPress={toggleExpanded}>
                                <Image style={{ width: 30, height: 30, marginTop: 10, marginRight: -10 }} source={{ uri: 'https://newcastlebeach.org/images/dropdown-icon-1.png' }}></Image>
                            </TouchableOpacity>
                        </View>
                        <Collapsible collapsed={collapsed} align="center">
                            <View style={{ marginTop: 5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <Image style={{ width: 90, height: 210, marginLeft: 20 }} source={{ uri: image_overview }} />
                                <View style={{ height: '90%', width: 1, backgroundColor: '#e2ce97', marginLeft: 10 }}></View>
                                <Text style={{ flex: 1, flexWrap: 'wrap', color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>{name} {description_overview}{"\n"}{"\n"}{perks}<Text style={{ fontWeight: 'bold', color: '#a1a41f' }}> {perk1_name}</Text><Text style={{ color: 'white' }}>,</Text> <Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>{perk2_name}</Text> <Text style={{ color: 'white' }}>&</Text> <Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>{perk3_name}</Text>.<Text style={{ color: 'white', paddingLeft: 25, fontSize: 14, textAlign: 'left', marginTop: 5 }}>{"\n"}{"\n"}Difficulty rating:<Text style={{ fontWeight: 'bold', color: difficult == 'Easy' ? colors.easy : difficult == 'Intermediate' ? colors.intermediate : colors.hard }}> {difficult}</Text></Text></Text>
                            </View>
                        </Collapsible>

                        {/*Se????o Perks*/}
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 5 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                            <Text style={{ color: 'white', paddingLeft: 15, fontSize: 25, marginTop: 15 }}>{name.split(" ")[0]}'s Perks</Text>
                            <TouchableOpacity style={{}} onPress={toggleExpanded3}>
                                <Image style={{ width: 30, height: 30, marginTop: 10, marginRight: -10 }} source={{ uri: "https://newcastlebeach.org/images/dropdown-icon-1.png" }}></Image>
                            </TouchableOpacity>
                        </View>
                        <Collapsible collapsed={collapsed3} align="center">
                            <View>
                                <Text style={{ color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>These are Perks which start off only appearing in {name.split(" ")[0]}'s <Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>Bloodweb.</Text></Text>
                                <Text style={{ color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>After achieving Level 30, Teachable versions of these Perks can be found:</Text>
                                <Text style={{ color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}><Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>??? {perk1_name}</Text> - Level 30;</Text>
                                <View style={{ marginTop: 5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <Image style={{ width: 70, height: 70, marginLeft: 20 }} source={{ uri: perk1_image }} />
                                    <View style={{ height: '90%', width: 1, backgroundColor: '#e2ce97', marginLeft: 10 }}></View>
                                    <Text style={{ flex: 1, flexWrap: 'wrap', color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>{perk1_description}</Text>
                                </View>
                                <Text style={{ color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5 }}><Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>??? {perk2_name}</Text> - Level 35;</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                    <Image style={{ width: 70, height: 70, marginLeft: 20 }} source={{ uri: perk2_image }} />
                                    <View style={{ height: '90%', width: 1, backgroundColor: '#e2ce97', marginLeft: 10 }}></View>
                                    <Text style={{ flex: 1, flexWrap: 'wrap', color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>{perk2_description}</Text>
                                </View>
                                <Text style={{ color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}><Text style={{ fontWeight: 'bold', color: '#a1a41f' }}>??? {perk3_name}</Text> - Level 40;</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                    <Image style={{ width: 70, height: 70, marginLeft: 20 }} source={{ uri: perk3_image }} />
                                    <View style={{ height: '90%', width: 1, backgroundColor: '#e2ce97', marginLeft: 10 }}></View>
                                    <Text style={{ flex: 1, flexWrap: 'wrap', color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>{perk3_description}</Text>
                                    {/*<Text style={{ flex: 1, flexWrap: 'wrap', color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>You know how to get the most out of your tools. Once per Trial, a depleted Item will refill <Text style={{ color: '#e8c252' }}>30</Text>/<Text style={{ color: '#199b1e' }}>40</Text>/<Text style={{ color: '#ac3ee3' }}>50</Text>% of its Charges after 10 seconds.{"\n"}"Architecture is the soul of civilisation." ??? Felix Richter </Text>*/}
                                </View>
                                <Text style={{ color: 'white', paddingLeft: 15, fontSize: 14, textAlign: 'justify', marginTop: 5, marginRight: 15 }}>Once obtained, other Survivors will be able to find {name.split(" ")[0]}'s Perks in their respective Bloodwebs from that point onwards.</Text>
                                <View style={{ borderLeftColor: '#e2ce97', borderLeftWidth: 1 }} />
                            </View>
                        </Collapsible>

                        {/*Se????o Lore*/}
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 5 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                            <Text style={{ color: 'white', paddingLeft: 15, fontSize: 25, marginTop: 15 }}>Lore</Text>
                            <TouchableOpacity style={{}} onPress={toggleExpanded2}>
                                <Image style={{ width: 30, height: 30, marginTop: 10, marginRight: -10 }} source={{ uri: 'https://newcastlebeach.org/images/dropdown-icon-1.png' }}></Image>
                            </TouchableOpacity>
                        </View>
                        <Collapsible collapsed={collapsed2} align="center">
                            <View style={{ marginTop: 0 }}>
                                <Image style={{ width: 355, height: 200, marginTop: 10, marginLeft: 20 }} source={{ uri: lore_image }}></Image>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>{lore}</Text>
                                {/*<Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>Growing up, Felix was socially awkward and introverted, preferring his imagination to the company of others. He had few friends so when he wasn't travelling with his parents, Felix was in his father's library devouring rare books, studying history and architecture, soaking up anything and everything he could on architectural movements throughout the centuries. His father hoped young Felix would learn to be more outgoing and hired every possible specialist to help improve his social skills. When these efforts failed, he threw in the proverbial towel and figured his son would learn when he was ready. He then joined young Felix in the library, where he helped him build elaborate wooden models of buildings while telling him wild stories about his secret club and their ancient battle against a dark and ominous force. Stories, Felix was sure, his father had made up to make his 'Imperiatti' group sound cooler than it actually was.</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>Felix sometimes wondered if his design sensibilities came from his summer trips to Dyer Island, a private island that boasted some of the world's finest homes and designs. Every summer, Felix would accompany his parents to the island, where members of The Imperiatti would encourage their children to network and forge lifelong connections. Felix didn't mingle well with the other teenagers, but he did make four friends who like himself didn't quite fit the 'high-society' mould. They were often ridiculed by other teens and disparagingly called 'The Pariahs', a name they liked and gladly adopted. Instead of practising public speaking and engaging in endless debates, The Pariahs spent most of their time exploring the ruins and mysteries of the island until one of their adventures took a turn for the worse.</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>Exploring an abandoned internment camp, they descended into what seemed to be an underground laboratory where they uncovered old, leather journals with illustrations and notes of inhumane experiments conducted on prisoners of the First Opium War held by the British East India Company. As they pushed through a locked door, they found a chamber scattered with human skeletons and dusty vials filled with an unknown serum. Before they could examine the contents, the ground seemed to shake beneath their feet and a hissing sound filled their ears. A strange fog suddenly appeared and giant claws seemed to burst from the ground as dark imagination mingled with reality to terrorise them. Before they understood what was happening, Felix's father and several other parents came to their rescue, using strange tools and objects to protect them. Felix stared at the scene in shock and disbelief. He wasn't sure if he was dreaming or living one of his father's ridiculous, supernatural stories. By the time he realised it wasn't a dream, it was all over. The Pariahs were safe, but their parents had mysteriously disappeared without a trace.</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>After the shock of his father's disappearance, Felix searched for any theory that could help him understand the phenomena he had encountered on the island. He exchanged notes with The Pariahs and other people he had met online who had also lost loved ones in a similar way. The tragedy had fostered a strong relationship between The Pariahs and for years they worked together to unravel the mystery of what had happened to their parents. But nothing made sense, and every lead they pursued hit a dead end. With time their efforts dwindled, and the five friends slowly grew apart, each going their separate ways, hoping to forget the nameless darkness that had robbed them of their parents.</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>Over the years, Felix proved to be an exceptional architect, though he found little inspiration working for others. He realised his father was right. His lack of social skills was holding him back. With dedication and purpose, he improved his diction and decorum and learned how to network or 'play-act' as he liked to call it. He created the perfect fa??ade to make himself more likeable and popular with potential clients. After working for several architectural firms, he established his firm with his colleague Lauren Golder. Both shared a similar vision and were philosophically opposed to formulaic modernist buildings, often experimenting with unusual materials, shapes and structures.</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>Felix continued to undermine traditional expectations in favour of the edgy and unconventional devices that set the architectural world abuzz. But even with all the accolades, he couldn't shake the feeling that he was a phony, like an actor who had learned a part instead of a true architect who had inspired the world with an impeccable design. During these moments of insecurity and self-doubt, he would distract himself with endless parties and drown his anxieties in alcohol, wishing his father was still around for some harsh advice and tempered wisdom.</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>Eventually, Felix's girlfriend announced that he was going to be a father. The news shook him to the core and, wanting to inspire his unborn child as much as his father inspired him, he quickly pulled his life together. What he needed was a project that would challenge him and cement his worth as an architect. As fate would have it, the perfect opportunity presented itself when old friends of his father commissioned his firm 'Richter and Golder' to build something new and unconventional on Dyer Island. The challenge excited and terrified Felix, who now drowned his anxieties with articles and books on parenting.</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>Within six months, the Dyer Restoration Project was underway, and as Felix surveyed the island, he suddenly heard a familiar voice calling out to him from beyond the shattered Victorian buildings and the crumbling ruins hiding dark stories long hidden and forgotten. Through a strange, gathering fog, he saw a form slowly take shape. His eyes widened, and his lips parted, but no words issued forth. Could it be? Was it possible? No... it couldn't be... it was... impossible... and yet...</Text>
                                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 14, textAlign: 'justify', marginTop: 10, marginRight: 5 }}>With dawning realisation, Felix staggered back as he watched his father emerge from the fog. His legs felt weak, and his rising heartbeat thrashed in his ears. It was him. It was really him. His unborn child would know his grandfather, and he could finally show him how much he had accomplished since he disappeared. They stared at one another for a long moment. Then his father gave him a look of disappointment, turned his back on him, and proceeded to walk away. Over his pounding heart, Felix chased after him and was never seen again.</Text>*/}
                            </View>
                        </Collapsible>
                        <View style={{ borderBottomColor: '#a6a105', borderBottomWidth: 1, marginTop: 10, marginBottom: 40 }} />
                    </View>
                </ScrollView>
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
                color: '#a6a105'
            }
        })

    }
});