import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import urAgendaLogo from '../images/urAgenda.png';

export default function ScheduleHome() {
    const navigation = useNavigation();
    const [showActivities, setShowActivities] = useState(true);

    function handleNavigateToAddNewTask() {
        navigation.navigate('AddNewTask');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={urAgendaLogo} />
                <TouchableOpacity onPress={handleNavigateToAddNewTask}>
                    <Feather name="plus" size={25} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.pageContent}>
                <View style={styles.Day}>
                    <View style={styles.DayInformation}>
                        <Text style={styles.titleDay}>Monday</Text>

                        <View style={styles.dateAndButton}>
                            <Text style={styles.date}>15/05</Text>

                            <TouchableOpacity
                                onPress={() => setShowActivities(!showActivities)}
                            >
                                <Feather name="chevron-down" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.dayToDo}>
                        {!showActivities && (
                            <View style={styles.toDo}>
                                <Text style={styles.toDotitle}>
                                    Estudar
                                </Text>

                                <Text style={styles.toDoHours}>
                                    15:00 - 16:30
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#645244',
        alignItems: 'center',
    },

    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        top: 20,
    },

    pageContent: {
        top: 25,
        width: '100%',
    },

    Day: {
        flexDirection: 'column',
    },

    DayInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15,
    },

    titleDay: {
        left: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 18,
    },

    dateAndButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    date: {
        color: '#fff',
        marginRight: 10,
    },

    dayToDo: {
        top: 0,
    },

    toDo: {
        backgroundColor: '#B09A89',
        height: 30,
        paddingHorizontal: 15,
        marginTop: 10,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    toDotitle: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        color: '#fff',
    },

    toDoHours: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 15,
        color: '#fff',
    }
});  