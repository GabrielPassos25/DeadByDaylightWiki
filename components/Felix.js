import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible'
import {Image, Text, View,TouchableOpacity, Dimensions, ScrollView, FlatList, StyleSheet} from 'react-native';
import Header from './Header.js'
import Survivors from './Survivors.js'

const Felix = () =>{  
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
    const [estado,setarEstado] = useState('Felix');
    if(estado == 'Felix'){
        return(
            <View style={{paddingBottom:70, width: Dimensions.get('window').width, height:Dimensions.get('window').height,backgroundColor:'#29292b'}}>
                <ScrollView>
                {/*Seção Informações gerais*/}
                {/*TODO: ajeitar botão*/}
                <View style={{flexDirection:'row', width:'100%'}}>
                    <TouchableOpacity onPress={() => setarEstado('Sobreviventes')}>
                        <Image style={{width:30,height:30,marginTop:20}} source={{ uri: "https://i.imgur.com/VimgyK5.png"}}/>                      
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setarEstado('Sobreviventes')}>
                        <Text style={{marginTop:25, fontSize:20, marginLeft:-5, color:'#a6a105'}}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#202020',padding:20, marginLeft:5,marginRight:5,marginTop:0,borderRadius:10}}>
                    <View style={{alignItems:'center'}}> 
                        <Text style={{color:'white',fontSize:30,backgroundColor:'#181818',width: Dimensions.get('window').width - 20, textAlign:'center'}}>Felix Richter</Text>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2e/S23_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20200820001351"}}/>
                        {/* View Pai informações*/} 
                        <View style={{flexDirection:'column', marginTop:5}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>Gender</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>Male</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>Role</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>Visionary Architect</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>Nationality</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>German</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>DLC</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>Descend Beyond</Text>
                            </View>
                        </View>
                    <Text style={{color:'white', paddingLeft:18,fontSize:14, textAlign:'left', marginTop:20}}>He was introduced as the Survivor of <Text style={{fontWeight:'bold', color:'#a1a41f'}}>CHAPTER XVII: Descend Beyond</Text>, a Chapter DLC released on 8 September 2020. </Text>
                    </View>
                </View>
                {/*Seção Informações Detalhadas*/}
                <View style={{backgroundColor:'#202020',padding:10, marginLeft:5,marginRight:5,marginTop:-15,borderRadius:10}}>
                    <Text style={{color:'#a6a105', maxWidth:Dimensions.get('window').width}}></Text>
                    <View style={{borderBottomColor: '#a6a105',borderBottomWidth: 1}}/>
                    {/*Seção Overview*/}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight:20}}>
                        <Text style={{color:'white', paddingLeft:20,fontSize:25,marginTop:15}}>Overview</Text>
                        <TouchableOpacity style={{}} onPress = {toggleExpanded}>
                            <Image style={{width:30,height:30, marginTop:10, marginRight:-14}} source={{uri:'https://newcastlebeach.org/images/dropdown-icon-1.png'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <Collapsible collapsed={collapsed} align = "center">
                        <View style={{marginTop:0}}>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>Felix Richter is a visionary architect, able to use his relentless determination to form a plan and help other Survivors.  </Text>
                            <Text style={{paddingLeft:25, fontSize:14, textAlign:'left', marginTop: 5}}><Text style={{color:'white', paddingLeft:15,fontSize:14, textAlign:'left'}}>His personal Perks:</Text>
                            <Text style={{fontWeight:'bold', color:'#a1a41f'}}> Visionary</Text> <Text style={{ color:'white'}}>,</Text> <Text style={{fontWeight:'bold', color:'#a1a41f'}}>Desperate Measures</Text> <Text style={{ color:'white'}}>&</Text> <Text style={{fontWeight:'bold', color:'#a1a41f'}}>Build to Last</Text></Text>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>Difficulty rating:<Text style={{fontWeight:'bold', color:'#e8c252'}}> Intermediate</Text></Text>
                        </View>
                    </Collapsible>
    
                    {/*Seção Perks*/}
                    <View style={{borderBottomColor: '#a6a105',borderBottomWidth: 1, marginTop:5}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight:20}}>
                        <Text style={{color:'white', paddingLeft:20,fontSize:25,marginTop:15}}>Felix's Perks</Text>
                        <TouchableOpacity style={{}} onPress = {toggleExpanded3}>
                            <Image style={{width:30,height:30, marginTop:10, marginRight:-14}} source={{uri:'https://newcastlebeach.org/images/dropdown-icon-1.png'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <Collapsible collapsed={collapsed3} align = "center">
                        <View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>These are Perks which start off only appearing in Felix's <Text style={{fontWeight:'bold', color:'#a1a41f'}}>Bloodweb.</Text></Text>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>After achieving Level 30, Teachable versions of these Perks can be found:</Text>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}><Text style={{fontWeight:'bold', color:'#a1a41f'}}>• Visionary</Text> - Level 30;</Text>
                            <View style={{marginTop: 5,alignItems: 'center', flexDirection:'row', justifyContent: 'space-between', width: '100%'}}>
                                <Image style={{width:70,height:70, marginLeft: 20}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/Visionary.gif/revision/latest/scale-to-width-down/128?cb=20200926200344"}}/>
                                <View style={{height:'90%', width:1, backgroundColor:'#e2ce97', marginLeft: 10}}></View>
                                <Text style={{flex: 1,flexWrap: 'wrap',color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>You're remarkably focused on your means of escape. You see the Auras of Generators within <Text style={{color:'#e8c252'}}>32 metres</Text>. Anytime a Generator is completed, Visionary is disabled for <Text style={{color:'#e8c252'}}>20</Text>/<Text style={{color:'#199b1e'}}>18</Text>/<Text style={{color:'#ac3ee3'}}>16</Text> seconds.  </Text>
                            </View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}><Text style={{fontWeight:'bold', color:'#a1a41f'}}>• Desperate Measures</Text> - Level 35;</Text>
                            <View style={{alignItems: 'center', flexDirection:'row', justifyContent: 'space-evenly', width: '100%'}}>
                                <Image style={{width:70,height:70, marginLeft: 20}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/16/DesperateMeasures.gif/revision/latest/scale-to-width-down/128?cb=20200819181725"}}/>
                                <View style={{height:'90%', width:1, backgroundColor:'#e2ce97', marginLeft: 10}}></View>
                                <Text style={{flex: 1,flexWrap: 'wrap',color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>You refuse to fail, even during your darkest hour. Increases Healing and Unhooking speeds by <Text style={{color:'#e8c252'}}>10</Text>/<Text style={{color:'#199b1e'}}>12</Text>/<Text style={{color:'#ac3ee3'}}>14</Text>% for each injured, hooked or dying Survivor. {"\n"}"When they come with a wrecking ball, build stronger walls." — Felix Richter</Text>
                            </View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}><Text style={{fontWeight:'bold', color:'#a1a41f'}}>• Build to Last</Text> - Level 40;</Text>
                            <View style={{alignItems: 'center', flexDirection:'row', justifyContent: 'space-evenly', width: '100%'}}>
                                <Image style={{width:70,height:70, marginLeft: 20}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/13/BuiltToLast.gif/revision/latest/scale-to-width-down/128?cb=20200927081957"}}/>
                                <View style={{height:'90%', width:1, backgroundColor:'#e2ce97', marginLeft: 10}}></View>
                                <Text style={{flex: 1,flexWrap: 'wrap',color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>You know how to get the most out of your tools. Once per Trial, a depleted Item will refill <Text style={{color:'#e8c252'}}>30</Text>/<Text style={{color:'#199b1e'}}>40</Text>/<Text style={{color:'#ac3ee3'}}>50</Text>% of its Charges after 10 seconds.{"\n"}"Architecture is the soul of civilisation." — Felix Richter </Text>
                            </View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>Once obtained, other Survivors will be able to find Felix's Perks in their respective Bloodwebs from that point onwards.</Text> 
                            <View style={{borderLeftColor: '#e2ce97',borderLeftWidth: 1}}/>
                        </View>
                    </Collapsible>
    
                    {/*Seção Lore*/}
                    <View style={{borderBottomColor: '#a6a105',borderBottomWidth: 1, marginTop:5}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight:20}}>
                        <Text style={{color:'white', paddingLeft:20,fontSize:25,marginTop:15}}>Lore</Text>
                        <TouchableOpacity style={{}} onPress = {toggleExpanded2}>
                            <Image style={{width:30,height:30, marginTop:10, marginRight:-14}} source={{uri:'https://newcastlebeach.org/images/dropdown-icon-1.png'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <Collapsible collapsed={collapsed2} align = "center">
                        <View style={{marginTop:0}}>
                        <Image style={{width:355,height:200, marginTop:10, marginLeft:20}} source={{uri:'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/db/Felix_Lore1.jpg/revision/latest/scale-to-width-down/600?cb=20200827153328'}}></Image>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Felix Richter was born to Janos and Ursula Richter in Coburg, Germany, where the Richter family had deep connections and were among the most respected of its physicians. His parents, both members of an ancient society, were always out of the Richter manor at medical conferences or providing humanitarian aid around the world. Travelling exposed young Felix to new cultures, languages, and architecture unlike anything he had ever seen before. He wasn't sure when the architectural bug bit, but when it did, it bit hard, and he knew that despite his family's legacy, he would one day design buildings that would inspire the world. By 23, he was considered an architectural prodigy having won the Swiss Architect Medal and the German National Design Award. Yet despite his success, Felix couldn't shake the gnawing feeling that his success had more to do with luck and connections than talent and hard work.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Growing up, Felix was socially awkward and introverted, preferring his imagination to the company of others. He had few friends so when he wasn't travelling with his parents, Felix was in his father's library devouring rare books, studying history and architecture, soaking up anything and everything he could on architectural movements throughout the centuries. His father hoped young Felix would learn to be more outgoing and hired every possible specialist to help improve his social skills. When these efforts failed, he threw in the proverbial towel and figured his son would learn when he was ready. He then joined young Felix in the library, where he helped him build elaborate wooden models of buildings while telling him wild stories about his secret club and their ancient battle against a dark and ominous force. Stories, Felix was sure, his father had made up to make his 'Imperiatti' group sound cooler than it actually was.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Felix sometimes wondered if his design sensibilities came from his summer trips to Dyer Island, a private island that boasted some of the world's finest homes and designs. Every summer, Felix would accompany his parents to the island, where members of The Imperiatti would encourage their children to network and forge lifelong connections. Felix didn't mingle well with the other teenagers, but he did make four friends who like himself didn't quite fit the 'high-society' mould. They were often ridiculed by other teens and disparagingly called 'The Pariahs', a name they liked and gladly adopted. Instead of practising public speaking and engaging in endless debates, The Pariahs spent most of their time exploring the ruins and mysteries of the island until one of their adventures took a turn for the worse.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Exploring an abandoned internment camp, they descended into what seemed to be an underground laboratory where they uncovered old, leather journals with illustrations and notes of inhumane experiments conducted on prisoners of the First Opium War held by the British East India Company. As they pushed through a locked door, they found a chamber scattered with human skeletons and dusty vials filled with an unknown serum. Before they could examine the contents, the ground seemed to shake beneath their feet and a hissing sound filled their ears. A strange fog suddenly appeared and giant claws seemed to burst from the ground as dark imagination mingled with reality to terrorise them. Before they understood what was happening, Felix's father and several other parents came to their rescue, using strange tools and objects to protect them. Felix stared at the scene in shock and disbelief. He wasn't sure if he was dreaming or living one of his father's ridiculous, supernatural stories. By the time he realised it wasn't a dream, it was all over. The Pariahs were safe, but their parents had mysteriously disappeared without a trace.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>After the shock of his father's disappearance, Felix searched for any theory that could help him understand the phenomena he had encountered on the island. He exchanged notes with The Pariahs and other people he had met online who had also lost loved ones in a similar way. The tragedy had fostered a strong relationship between The Pariahs and for years they worked together to unravel the mystery of what had happened to their parents. But nothing made sense, and every lead they pursued hit a dead end. With time their efforts dwindled, and the five friends slowly grew apart, each going their separate ways, hoping to forget the nameless darkness that had robbed them of their parents.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Over the years, Felix proved to be an exceptional architect, though he found little inspiration working for others. He realised his father was right. His lack of social skills was holding him back. With dedication and purpose, he improved his diction and decorum and learned how to network or 'play-act' as he liked to call it. He created the perfect façade to make himself more likeable and popular with potential clients. After working for several architectural firms, he established his firm with his colleague Lauren Golder. Both shared a similar vision and were philosophically opposed to formulaic modernist buildings, often experimenting with unusual materials, shapes and structures.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Felix continued to undermine traditional expectations in favour of the edgy and unconventional devices that set the architectural world abuzz. But even with all the accolades, he couldn't shake the feeling that he was a phony, like an actor who had learned a part instead of a true architect who had inspired the world with an impeccable design. During these moments of insecurity and self-doubt, he would distract himself with endless parties and drown his anxieties in alcohol, wishing his father was still around for some harsh advice and tempered wisdom.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Eventually, Felix's girlfriend announced that he was going to be a father. The news shook him to the core and, wanting to inspire his unborn child as much as his father inspired him, he quickly pulled his life together. What he needed was a project that would challenge him and cement his worth as an architect. As fate would have it, the perfect opportunity presented itself when old friends of his father commissioned his firm 'Richter and Golder' to build something new and unconventional on Dyer Island. The challenge excited and terrified Felix, who now drowned his anxieties with articles and books on parenting.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Within six months, the Dyer Restoration Project was underway, and as Felix surveyed the island, he suddenly heard a familiar voice calling out to him from beyond the shattered Victorian buildings and the crumbling ruins hiding dark stories long hidden and forgotten. Through a strange, gathering fog, he saw a form slowly take shape. His eyes widened, and his lips parted, but no words issued forth. Could it be? Was it possible? No... it couldn't be... it was... impossible... and yet...</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>With dawning realisation, Felix staggered back as he watched his father emerge from the fog. His legs felt weak, and his rising heartbeat thrashed in his ears. It was him. It was really him. His unborn child would know his grandfather, and he could finally show him how much he had accomplished since he disappeared. They stared at one another for a long moment. Then his father gave him a look of disappointment, turned his back on him, and proceeded to walk away. Over his pounding heart, Felix chased after him and was never seen again.</Text>
                        </View>
                    </Collapsible>
                    <View style={{borderBottomColor: '#a6a105',borderBottomWidth: 1, marginTop:10, marginBottom:40}}/>
                </View>
                </ScrollView>
            </View>
        )
    }
    else if(estado == 'Sobreviventes'){
        return(
            <View style={{backgroundColor:'#29292b'}} style={StyleSheet.absoluteFill}>
              <Header></Header>
              <Survivors></Survivors>
            </View>
          )
    }
}

export default Felix;