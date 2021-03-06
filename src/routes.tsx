import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScheduleHome from './pages/ScheduleHome';
import AddNewTask from './pages/AddNewTask';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: {
                backgroundColor: '#f2f3f5'
            } }}>
                <Screen 
                    name="Home"
                    component={ScheduleHome}
                />

                <Screen 
                    name="AddNewTask"
                    component={AddNewTask}
                    options={{ 
                        headerShown: true,
                        header: () => <Header 
                            title="Adicionar nova tarefa"
                        />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}