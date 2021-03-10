import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible'
import {Image, Text, View,TouchableOpacity, Dimensions, ScrollView, Platform, StyleSheet} from 'react-native';

const Yun = () =>{  
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
    const [estado,setarEstado] = useState('Yun');
    if(estado == 'Yun'){
        return(
            <View style={{paddingBottom:70, width: Dimensions.get('window').width, height:Dimensions.get('window').height,backgroundColor:'#29292b'}}>
                <ScrollView>
                {/*Seção Informações gerais*/}
                <View style={{marginTop: 5,alignItems: 'center', flexDirection:'row', width: '100%'}}>
                    <TouchableOpacity onPress={() => setarEstado('Sobreviventes')}>
                        <Image style ={styles.back_button} source={{ uri: "https://i.imgur.com/VimgyK5.png"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setarEstado('Sobreviventes')}>
                        <Text style={styles.back_text}>Voltar</Text>
                        </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#202020',padding:20, marginLeft:5,marginRight:5,marginTop:0,borderRadius:10}}>
                    <View style={{alignItems:'center'}}> 
                        <Text style={{color:'white',fontSize:30,backgroundColor:'#181818',width: Dimensions.get('window').width - 20, textAlign:'center'}}>Yun-Jin Lee</Text>
                        <Image style={{width:130,height:180}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/79/S25_charSelect_portrait.png/revision/latest/scale-to-width-down/150?cb=20210307122429"}}/>
                        {/* View Pai informações*/} 
                        <View style={{flexDirection:'column', marginTop:5}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>Gender</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>Female</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>Role</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>Music Producer</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>Nationality</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>Korean</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Text style={{backgroundColor:'#585858',fontSize:20,color:'white',width:190, textAlign:'center'}}>DLC</Text>
                                <Text style={{fontSize:18,color:'white',marginLeft:30}}>All-Kill</Text>
                            </View>
                        </View>
                    <Text style={{color:'white', paddingLeft:18,fontSize:14, textAlign:'left', marginTop:20}}>She will be introduced as the Survivor of <Text style={{fontWeight:'bold', color:'#ff6363'}}>CHAPTER XIX: All-Kill</Text>, a Chapter DLC to be released in March 2021. </Text>
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
                        <View style={{marginTop: 5,alignItems: 'center', flexDirection:'row', justifyContent: 'space-between', width: '100%'}}>
                                <Image style={{width:90,height:180, marginLeft: 20}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2a/S25_storeBackground.png/revision/latest/scale-to-width-down/150?cb=20210302191717"}}/>
                                <View style={{height:'90%', width:1, backgroundColor:'#e2ce97', marginLeft: 10}}></View>
                                <Text style={{flex: 1,flexWrap: 'wrap',color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>Yun-Jin Lee is a self-interested music producer, able to advance her goals during turbulent times.{"\n"}{"\n"}Her personal Perks:<Text style={{fontWeight:'bold', color:'#a1a41f'}}> Fast Track</Text> <Text style={{ color:'white'}}>,</Text> <Text style={{fontWeight:'bold', color:'#a1a41f'}}>Smash Hit</Text> <Text style={{ color:'white'}}>&</Text> <Text style={{fontWeight:'bold', color:'#a1a41f'}}>Self-Preservation</Text>.<Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>{"\n"}{"\n"}Difficulty rating:<Text style={{fontWeight:'bold', color:'#199b1e'}}> Easy</Text></Text></Text>
                        </View>
                    </Collapsible>
    
                    {/*Seção Perks*/}
                    <View style={{borderBottomColor: '#a6a105',borderBottomWidth: 1, marginTop:5}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight:20}}>
                        <Text style={{color:'white', paddingLeft:20,fontSize:25,marginTop:15}}>Yun-Jin Lee's Perks</Text>
                        <TouchableOpacity style={{}} onPress = {toggleExpanded3}>
                            <Image style={{width:30,height:30, marginTop:10, marginRight:-14}} source={{uri:'https://newcastlebeach.org/images/dropdown-icon-1.png'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <Collapsible collapsed={collapsed3} align = "center">
                        <View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>These are Perks which start off only appearing in Yun-Jin's <Text style={{fontWeight:'bold', color:'#a1a41f'}}>Bloodweb.</Text></Text>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>After achieving Level 30, Teachable versions of these Perks can be found:</Text>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}><Text style={{fontWeight:'bold', color:'#a1a41f'}}>• Fast Track</Text> - Level 30;</Text>
                            <View style={{marginTop: 5,alignItems: 'center', flexDirection:'row', justifyContent: 'space-between', width: '100%'}}>
                                <Image style={{width:70,height:70, marginLeft: 20}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/03/FastTrack.gif/revision/latest/scale-to-width-down/128?cb=20210302204251"}}/>
                                <View style={{height:'90%', width:1, backgroundColor:'#e2ce97', marginLeft: 10}}></View>
                                <Text style={{flex: 1,flexWrap: 'wrap',color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>Sometimes the sacrifice of others is necessary to get ahead.{"\n"}{"\n"}Whenever another Survivor is hooked, you gain<Text style={{color:'#e8c252'}}> 1</Text>/<Text style={{color:'#199b1e'}}>2</Text>/<Text style={{color:'#ac3ee3'}}>3</Text> Token(s).{"\n"}{"\n"}You consume all Tokens after a Great <Text style={{color:'#e2ce97'}}>Skill Check</Text> on a <Text style={{color:'#e2ce97'}}>Generator</Text>.{"\n"}{"\n"}Each Token consumed grants an additional Progression bonus of <Text style={{color:'#e8c252'}}> 1%</Text> for Great Skill Checks when repairing Generators. </Text>
                            </View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}><Text style={{fontWeight:'bold', color:'#a1a41f'}}>• Smash Hit</Text> - Level 35;</Text>
                            <View style={{alignItems: 'center', flexDirection:'row', justifyContent: 'space-evenly', width: '100%'}}>
                                <Image style={{width:70,height:70, marginLeft: 20}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f2/SmashHit.gif/revision/latest/scale-to-width-down/128?cb=20210302204322"}}/>
                                <View style={{height:'90%', width:1, backgroundColor:'#e2ce97', marginLeft: 10}}></View>
                                <Text style={{flex: 1,flexWrap: 'wrap',color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>When your rival makes a mistake, you seize the opportunity. {"\n"}{"\n"}After stunning the Killer with a <Text style={{color:'#e2ce97'}}>Pallet</Text>, break into a sprint a<Text style={{color:'#e8c252'}}> 150%</Text> of your normal running speed for a maximum of <Text style={{color:'#ff8800'}}> 3 seconds</Text>.{"\n"}{"\n"}Causes the <Text style={{color:'#e2ce97'}}>Exhausted</Text> status Effect for <Text style={{color:'#e8c252'}}>60</Text>/<Text style={{color:'#199b1e'}}>50</Text>/<Text style={{color:'#ac3ee3'}}>40</Text> seconds.{"\n"}{"\n"}Smash Hit cannot be used when Exhausted.{"\n"}{"\n"}You do not recover from Exhaustion while running.</Text>
                            </View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}><Text style={{fontWeight:'bold', color:'#a1a41f'}}>• Self-Preservation</Text> - Level 40;</Text>
                            <View style={{alignItems: 'center', flexDirection:'row', justifyContent: 'space-evenly', width: '100%'}}>
                                <Image style={{width:70,height:70, marginLeft: 20}} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/45/SelfPreservation.gif/revision/latest/scale-to-width-down/128?cb=20210302204349"}}/>
                                <View style={{height:'90%', width:1, backgroundColor:'#e2ce97', marginLeft: 10}}></View>
                                <Text style={{flex: 1,flexWrap: 'wrap',color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>Life's unforgiving. The more confirmation you get of that, the more prepared you become.{"\n"}{"\n"}Whenever another Survivor within <Text style={{color:'#e2ce97'}}>12 metres</Text> of you is hit with a Basic or Special Attack, Self-Preservation activates.{"\n"}{"\n"}Your <Text style={{color:'#e2ce97'}}>Scratch Marks </Text>are hidden for <Text style={{color:'#e8c252'}}>6</Text>/<Text style={{color:'#199b1e'}}>8</Text>/<Text style={{color:'#ac3ee3'}}>10</Text> seconds.</Text>
                            </View>
                            <Text style={{color:'white', paddingLeft:25,fontSize:14, textAlign:'left', marginTop:5}}>Once obtained, other Survivors will be able to find Yun-Jin Lee's Perks in their respective Bloodwebs from that point onwards.</Text> 
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
                        <Image style={{width:355,height:200, marginTop:10, marginLeft:20}} source={{uri:'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/22/Yun-Jin_Lore1.jpg/revision/latest/scale-to-width-down/600?cb=20210302220224'}}></Image>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Resilient and ambitious, Yun-Jin was born into a life of hardship finding success in the music industry after years of effort and self-sacrifice.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>As a child Yun-Jin was fascinated by sound, mimicking drums, and hitting keys on the piano. When she turned ten, however, she lost her instruments. Her family was heavily in debt and did not make the payments in time. The creditors took everything they owned, including the house. Yun-Jin held her four-year-old sister tightly as she cried. They moved into a windowless, two-bedroom basement. Since her parents worked day and night to pay their debt, Yun-Jin became her sister's caretaker. Every night she sang until they both fell asleep.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>At seventeen, the renowned record label Mightee One Entertainment came to her high school to audition talent. She was rejected as an idol trainee but obtained an unpaid internship at the studio. For the following years, she created some of the studio's biggest hits, without any credit or recognition. To get her dues, she emerged in the public eye wearing flamboyant fashion and put soundbites into her songs that looped her artist name, Magnum Opus. Fans began to recognize her songs and she became the producer of NO SPIN, a poorly performing boy band who needed her special touch.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Dissatisfied with NO SPIN's commercial sound, she sought a rogue element to make the band stand out. Through her contacts in talent shows she found the edgy, raw sound of Ji-Woon Hak. She re-launched NO SPIN with Ji-Woon as its newest member. Within hours their first video was a viral sensation.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Their success cemented Yun-Jin’s reputation as a shrewd producer. Adorned in high fashion to attend luxurious events, Yun-Jin's harsh, impoverished childhood seemed far behind her. She moved into a penthouse and dined with socialites in skyline restaurants with breathtaking views of Seoul.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>The success of the first album broke records, setting the bar high for NO SPIN's second. As they were recording new tracks, the fire alarm suddenly blared. Concerned for her safety, Yun-Jin hurried to evacuate the building and left the dallying staff behind. Only when she bolted out into the street that she realized NO SPIN was nowhere amongst the coughing crowd. A goliath of flames engulfed the building, slowly tamed by the steady streams of fire hoses.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>All members of NO SPIN perished in the fire except one: Ji-Woon. The album was ruined. The band was over. She would be shelved while Ji-Woon would rot away as an instructor for idol trainees. But she refused to be a victim who watched helplessly as vultures swooped in to take what was hers.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Unknown to Mightee One Entertainment, she created new tracks to re-launch Ji-Woon's career. She pushed him to tap into his grief and create a song exploring the pangs of sudden loss. The music video showed Ji-Woon saying goodbye to each member of NO SPIN. Yun-Jin cleverly launched the song under Ji-Woon's newly adopted stage name: The Trickster. He would embody both fear and awe like the legendary dokkaebi spirits.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Ji-Woon's song was a global phenomenon, its universal themes of grief and guilt resonating internationally. Together, Yun-Jin and The Trickster toured the world. Success greeted them on every shore. Yet disturbingly, so did a series of eccentric murders. This connection unsettled Yun-Jin as she noticed that the tour dates coincided with the victims' time of death. She was weary after the loss of NO SPIN and anxious to preserve her artist, so she increased the Trickster's security detail. What if the serial killer was an unhinged fan fixated on the Trickster, inspired by the artist's morbid songs?</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Returning to Seoul, Yun-Jin worked with Ji-Woon on his new material. When she entered the studio at the brink of dawn, she was surprised to see Ji-Woon already there. He seemed exhausted, like he had worked all night. When she listened to his track, she discovered a bizarre intro filled with shrieks and snares. It was too experimental for her taste.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>A week later, another death was reported. The body showed traces of torture and was arranged in the same flamboyant style as previous murders, this time diamond Cufflinks gouged into the eyes victim's eyes. The following day, the victim was on every television channel. A video from the victim's social media showed her squealing, surprised when her boyfriend handed her a heart-shaped, birthday cake. Yun-Jin's stomach churned. That voice. So familiar. And yet, she had never met the victim.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>The next morning, her heart froze when she listened to the Trickster's opening track. The shrieks in his song matched the victim's squeal. Did he sample the victim's birthday video? No, that was impossible: he had recorded this song before the murder was reported. She stared at Ji-Woon on the other side of the booth's glass window. He was NO SPIN's only survivor. Everyone else was dead. Not to mention the eccentric murders that matched his tour dates. Death trails that seemed to converge… to him.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>If he caused… this, no artist would survive the scandal. Yun-Jin's career, no, her life would be over. All she had would be destroyed. A wave of nausea surged over her. Heart racing, she rushed to the restroom. Wild thoughts blazed through her mind as she splashed icy water over her face. There had to be a simpler explanation. Perhaps she was overworked. Or maybe, she did not trust her success. Her mind was fabricating this suspicion because disaster was easier to trust than success. It was all in her head. She returned to the recording booth, eager to put her worries behind her.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Months later, pressure came from Mightee One Entertainment executives. Revenue was down and they blamed the Trickster since they disapproved the violent themes in his music and the knife tricks he pulled during performances. While Yun-Jin was furious they scapegoated her artist, she agreed that Ji-Woon's sound was too niche to generate profit. She told Ji-Woon she fought them off but was ultimately outnumbered. Because of her initial fury, he believed her to be on his side. They were given three months to create and perform the next hit for Mightee One.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Months flew by and the time came for Yun-Jin to take a seat at the executives' private show. She was confident about her song but as soon as the music started, she knew something was amiss.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Dense, foul smoke permeated the room. Yun-Jin coughed and gasped for air. But the more she coughed, the more she inhaled. Her body sank in the chair, her limbs heavy and numb, and her eyes widened as she watched, terrified, a nightmare come to life.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>The Trickster was a whirlwind of blood, slashing, stabbing, and chopping limbs. The executives were carved up like meat. They could not run. They were stuck, like Yun-Jin, paralyzed. A boiling rage swelled in her gut. How could she have denied her instincts? The fire. The murders on tour. It was him. It had always been him. And she had known from the start. Now her career was over, and so was Mightee One. Everyone she had worked with, her colleagues, her friends, dying before her eyes. Everything she had, taken from her once more.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>No, she would not let him. He would pay. He would know her suffering. Suddenly, dark coils of black fog rose from the ground and she was... somewhere else.</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>Bright lights flashed and blinded her. A spotlight found her in the darkness. Then a crowd erupted, chanting her name. "Magnus Opus! Magnus Opus!"</Text>
                        <Text style={{color:'white', paddingLeft:20,fontSize:14, textAlign:'left', marginTop:10}}>She smiled and welcomed the darkness within.</Text>
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

export default Yun;

const styles = StyleSheet.create({
    back_button: {
      ...Platform.select({
        ios: {
            width:30,
            height:30,
            marginTop: 10
        },
        android: {
            marginTop: 5
        }
      })
    },
    back_text: {
        ...Platform.select({
            ios: {
                flex: 1,
                flexWrap: 'wrap',
                color:'white',
                fontSize:20, 
                textAlign:'left', 
                marginTop:15, 
                color: '#a6a105'
            },
            android: {
                flex: 1,
                flexWrap: 'wrap',
                color:'white',
                fontSize:15, 
                textAlign:'left', 
                marginTop:10, 
                color: '#a6a105'
            }
          })
        
    }
  });