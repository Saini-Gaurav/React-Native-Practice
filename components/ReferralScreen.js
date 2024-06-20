import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const ReferralScreen = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/referral.png')}
                style={styles.headerImage}
            />
            <Text style={styles.heading}>Add Referral</Text>
            <TextInput
                placeholder="Enter Referral Id"
                style={[styles.input, isFocused && styles.inputFocused]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                keyboardType='numeric'
            />
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton}>
                <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 30,
    },
    headerImage: {
        width: width,
        height: width * 0.7, 
        resizeMode: 'contain',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 40,
    },
    input: {
        width: '100%',
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    inputFocused: {
        borderColor: '#2254E0',
    },
    nextButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#2254E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 70,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    skipButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    skipButtonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ReferralScreen;
