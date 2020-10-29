import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AddNewTask() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Adicionar nova tarefa
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },

    header: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTitle: {
        fontFamily: 'Archivo_400Regular',
        color: '#000',
    }
})