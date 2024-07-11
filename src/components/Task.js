import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/tasksSlice';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newDescription, setNewDescription] = useState(task.description)
    const dispatch = useDispatch()

    const handleToggleTask = () => {
        dispatch(toggleTask(task.id))
    }

    const handleEditTask = () => {
        dispatch(editTask({id: task.id, description: newDescription}))
        setIsEditing(false)
    }

    return (
        <div>
            {isEditing ? (
                <>
                    <input 
                        type='text' 
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleEditTask}>Enregister</button>
                </>
            ) : (
                <>
                    <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                        {task.description}
                    </span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleToggleTask}>
                        {task.isDone ? 'Undo' : 'Done'}
                    </button>
                </>
            )}
        </div>
    );
}

export default Task;
