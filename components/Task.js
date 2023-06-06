// Task.js

import React from 'react';
import {
    View, Text,
    TextInput, TouchableOpacity,
    StyleSheet, Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, updateTask, clearTasks } from '../src/actions/index';

const Task = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTask());
    };

    const handleClearTasks = () => {
        dispatch(clearTasks());
    };

    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    const handleUpdateTask = (taskId, updatedTask) => {
        dispatch(updateTask(taskId, updatedTask));
    };

    const radio = (checked) => {
        const src = checked ? require('../assets/filled.png') : require('../assets/unfilled.png');
        return <Image source={src} style={styles.radio} alt='chk' />;
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                <Text style={styles.top}>Task List</Text>
                <TouchableOpacity onPress={handleClearTasks}>
                    <Image source={require('../assets/delete.png')} style={styles.del} alt='del' />
                </TouchableOpacity>
            </View>
            {tasks.map((task) => (
                <View key={task.id} style={styles.taskTile}>
                    <TouchableOpacity onPress={() => handleToggleTask(task.id)}>
                        {radio(task.checked)}
                    </TouchableOpacity>
                    <TextInput style={styles.taskinput}
                        value={task.task}
                        onChangeText={(text) => handleUpdateTask(task.id, text)}
                        editable={!task.checked}
                    />
                </View>
            ))}
            <TouchableOpacity onPress={handleAddTask} style={{ flexDirection: 'row', marginTop: 6 }}>
                <Image source={require('../assets/plus.png')} style={styles.addi} alt='add' />
                <Text style={styles.add}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Task;

const styles = StyleSheet.create({
    taskTile: {
        fontFamily: 'Inter',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        height: 50
    },
    add: {
        marginLeft: 22,
        fontSize: 17,
    },
    addi: {
        marginTop: 2.5,
        width: 20,
        height: 20,
        marginLeft: 53.5
    },
    taskinput: {
        fontFamily: 'Inter',
        marginLeft: 10,
        fontSize: 18,
    },
    radio: {
        width: 25,
        height: 25,
        marginLeft: 20
    },
    del: {
        width: 20,
        height: 20,
        marginLeft: 235,
        marginTop: 2.5
    },
    top: {
        fontFamily: 'Inter',
        fontSize: 17,
        marginLeft: 30,
    }
});
