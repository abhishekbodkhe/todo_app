import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const TaskInput = () => {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskText.trim()) {
            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false,
            };
            dispatch(addTask(newTask));
            setTaskText('');
        }
    };

    return (
        <div className="mb-3 bg-blue-50">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={taskText}
                    onChange={e => setTaskText(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleAddTask();
                        }
                    }}
                    placeholder="Add a new task"
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleAddTask}>
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskInput;
