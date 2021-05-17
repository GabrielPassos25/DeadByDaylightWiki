import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Survivors } from '../pages/Survivors'
import { Killers } from '../pages/Killers'

import colors from '../styles/colors';
import Choice from '../pages/Choices';
const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator initialRouteName='Home' tabBarOptions={{ activeTintColor: colors.yellow, inactiveTintColor: colors.white, labelPosition: 'beside-icon', style: { borderTopColor: colors.yellow, backgroundColor: colors.black_dark, paddingVertical: Platform.OS === 'ios' ? 20 : 0, height: 75 } }}>
            <AppTab.Screen name="Survivors" component={Survivors} options={{ tabBarIcon: (({ size, color }) => { return (<Image style={{ width: size, height: size }} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/IconHelpLoading_survivor.png/revision/latest/scale-to-width-down/128?cb=20170926082103" }} />) }) }} />
            <AppTab.Screen name="Home" component={Choice} options={{ tabBarIcon: (({ size, color }) => (<MaterialIcons name="home" size={size} color={color} />)) }} />
            <AppTab.Screen name="Killers" component={Killers} options={{ tabBarIcon: (({ size, color }) => { return (<Image style={{ width: size, height: size }} source={{ uri: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/06/IconHelpLoading_killer.png/revision/latest/scale-to-width-down/128?cb=20170926082027" }} />) }) }} />
        </AppTab.Navigator>
    )
}

export default AuthRoutes