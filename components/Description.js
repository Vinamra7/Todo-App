// Description.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateDescription } from '../src/actions/index';

const Description = ({ description, updateDescription }) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        // Load the saved description from AsyncStorage when the component mounts
        const loadDescription = async () => {
            try {
                const savedDescription = await AsyncStorage.getItem('description');
                if (savedDescription !== null) {
                    updateDescription(savedDescription);
                }
            } catch (error) {
                // Handle error
            }
        };
        loadDescription();
    }, []);

    useEffect(() => {
        // Save the description to AsyncStorage whenever it changes
        const saveDescription = async () => {
            try {
                await AsyncStorage.setItem('description', description);
            } catch (error) {
                // Handle error
            }
        };
        saveDescription();
    }, [description]);

    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Descriptions</Text>
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                value={description}
                onChangeText={updateDescription}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                multiline={true}
                spellCheck={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    descriptionContainer: {
        marginTop: 5,
    },
    description: {
        fontFamily: 'Inter',
        marginTop: '0.5%',
        fontSize: 15,
        left: 25,
    },
    input: {
        fontFamily: 'Inter',
        marginLeft: '4.5%',
        marginTop: 8,
        width: '90%',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: '400',
    },
    focusedInput: {
        fontFamily: 'Inter',
        borderColor: '#111322',
        borderWidth: 1,
        borderRadius: 5
    }
});

export default connect(
    state => ({
        description: state.description
    }),
    {
        updateDescription
    }
)(Description);
