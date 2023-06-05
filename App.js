// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Image, PixelRatio } from 'react-native';
import store from './store';
import Title from './components/Title';
import Description from './components/Description';
import Task from './components/Task';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const TaskDetails = () => {
    return <Text style={styles.top}>Task details</Text>;
};

const App = () => {
    return (
        <Provider store={store}>
            <KeyboardAwareScrollView>
                <View>
                    <TaskDetails />
                    <Title />
                    <Description />
                    <Image source={require('./assets/avatar.png')} style={styles.ava} alt='avatar' />
                    <Task />
                </View>
            </KeyboardAwareScrollView>
        </Provider>
    );
};


const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        width: '25%',
        height: 24,
        top: 20,
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
        color: '#111322',
    },
    ava: {
        width: 84,
        height: 24,
        left: 30,
        top: 16,
        marginBottom: 25
    }
});

export default App;
