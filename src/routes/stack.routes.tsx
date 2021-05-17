import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SurvivorDetails from '../pages/SurvivorDetails';

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';
import Choice from '../pages/Choices';

const stackRoutes = createStackNavigator();
const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: colors.black } }}>
        <stackRoutes.Screen name="Choice" component={AuthRoutes} />
        <stackRoutes.Screen name="Survivors" component={AuthRoutes} />
        <stackRoutes.Screen name="Killers" component={AuthRoutes} />
        <stackRoutes.Screen name="SurvivorDetails" component={SurvivorDetails} />
    </stackRoutes.Navigator>
)

export default AppRoutes;