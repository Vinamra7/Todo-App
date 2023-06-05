// reducer.js
const initialState = {
    title: 'NFT Web App Prototype',
    description: 'Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..',
    tasks: []
};

const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE':
            return {
                ...state,
                title: action.title
            };
        case 'UPDATE_DESCRIPTION':
            return {
                ...state,
                description: action.description
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), task: 'Edit Task', checked: false }],
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            checked: !task.checked,
                        };
                    }
                    return task;
                }),
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskId) {
                        return {
                            ...task,
                            task: action.payload.updatedTask,
                        };
                    }
                    return task;
                }),
            };
        case 'CLEAR_TASKS':
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
};

export default reducer;



