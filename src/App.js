import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './style.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="container mt-4">
                <h1 className="mb-4">React To-Do App</h1>
                <TaskInput />
                <TaskList />
            </div>
        </Provider>
    );
};

export default App;
