import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
    title: string;
}

export default function Header({ title } : HeaderProps) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#000" />
            </BorderlessButton>
            
            <Text style={styles.title}>{title}</Text> 
        
            <View />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Archivo_600SemiBold',
        color: '#000',
        fontSize: 16,
    }
})