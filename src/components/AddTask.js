import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/tasksSlice'

const AddTask = () => {
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const handleAddTask = () => {
        if (description.trim()) {
            dispatch(addTask(description))
            setDescription('')
        }
    }

    return (
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAddTask}>Ajouter</button>
        </div>
    )
}

export default AddTask