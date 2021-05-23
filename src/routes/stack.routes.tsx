import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();
const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: colors.black } }}>
        <stackRoutes.Screen name="Choice" component={AuthRoutes} />
        <stackRoutes.Screen name="Survivors" component={AuthRoutes} />
        <stackRoutes.Screen name="Killers" component={AuthRoutes} />
        <stackRoutes.Screen name="SurvivorDetails" component={AuthRoutes} />
    </stackRoutes.Navigator>
)

export default AppRoutes;