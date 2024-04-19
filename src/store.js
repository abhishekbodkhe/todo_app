import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// Load initial state from local storage if available
const loadInitialState = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        return { tasks: JSON.parse(savedTasks) };
    }
    return { tasks: [] };
};

const store = createStore(rootReducer, loadInitialState());

// Listen for state changes and save tasks to local storage
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
});

export default store;
