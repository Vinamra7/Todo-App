// Title.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateTitle } from '../src/actions/index';

const Title = ({ title, updateTitle }) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        // Load the saved title from AsyncStorage when the component mounts
        const loadTitle = async () => {
            try {
                const savedTitle = await AsyncStorage.getItem('title');
                if (savedTitle !== null) {
                    updateTitle(savedTitle);
                }
            } catch (error) {
                // Handle error
            }
        };
        loadTitle();
    }, []);

    useEffect(() => {
        // Save the title to AsyncStorage whenever it changes
        const saveTitle = async () => {
            try {
                await AsyncStorage.setItem('title', title);
            } catch (error) {
                // Handle error
            }
        };
        saveTitle();
    }, [title]);

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Task Title</Text>
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                value={title}
                onChangeText={updateTitle}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 60,
    },
    title: {
        fontFamily: 'Inter',
        marginTop: '5%',
        fontSize: 15,
        left: 25,
    },
    input: {
        fontFamily: 'Inter',
        marginLeft: '4.5%',
        marginTop: 10,
        width: '80%',
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    focusedInput: {
        borderColor: '#111322',
        borderWidth: 1,
        borderRadius: 5
    }
});

export default connect(
    state => ({
        title: state.title
    }),
    {
        updateTitle
    }
)(Title);
