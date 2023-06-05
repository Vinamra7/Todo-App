// actions.js
export const updateTitle = (title) => {
    return {
        type: 'UPDATE_TITLE',
        title
    };
};

export const updateDescription = (description) => {
    return {
        type: 'UPDATE_DESCRIPTION',
        description
    };
};

const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = () => {
    return {
        type: ADD_TASK,
    };
};

export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_TASK,
        payload: taskId,
    };
};

export const updateTask = (taskId, updatedTask) => {
    return {
        type: UPDATE_TASK,
        payload: {
            taskId,
            updatedTask,
        },
    };
};
export const clearTasks = () => {
    return {
        type: 'CLEAR_TASKS'
    };
};