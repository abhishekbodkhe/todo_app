import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './actions';

const TaskList = () => {
    // Access tasks from the Redux state
    const tasks = useSelector(state => state.tasks);
    // Create a dispatch function to dispatch actions
    const dispatch = useDispatch();

    // State to track the current filter for tasks
    const [filter, setFilter] = useState('all'); // Filter can be "all", "completed", or "incomplete"

    // Function to set the filter state
    const setFilterState = (newFilter) => {
        setFilter(newFilter);
    };

    // Filter tasks based on the filter state
    const filteredTasks = tasks.filter(task => {
        switch (filter) {
            case 'completed':
                return task.completed;
            case 'incomplete':
                return !task.completed;
            default:
                return true; // Show all tasks
        }
    });

    // Render tasks in a list format
    return (
        <div>
            {/* Buttons to set the filter state */}
            <div className="mb-3">
                <button className="btn btn-primary mr-2" onClick={() => setFilterState('all')}>
                    View All Tasks
                </button>
                <button className="btn btn-success mr-2" onClick={() => setFilterState('completed')}>
                    View Completed Tasks
                </button>
                <button className="btn btn-warning" onClick={() => setFilterState('incomplete')}>
                    View Incomplete Tasks
                </button>
            </div>

            <ul className="list-group">
                {filteredTasks.map(task => (
                    <li
                        key={task.id}
                        className={`list-group-item d-flex justify-content-between align-items-center ${
                            task.completed ? 'list-group-item-secondary' : ''
                        }`}
                    >
                        <div className="d-flex align-items-center">
                            {/* Checkbox to toggle task completion */}
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={task.completed}
                                onChange={() => dispatch(toggleTask(task.id))}
                            />
                            {/* Task text */}
                            <span
                                className={`task-text ${task.completed ? 'completed' : ''}`}
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                onClick={() => dispatch(toggleTask(task.id))}
                            >
                                {task.text}
                            </span>
                        </div>
                        {/* Delete button */}
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => dispatch(deleteTask(task.id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
