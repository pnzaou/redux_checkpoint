import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task'
import { setFilter } from '../redux/tasksSlice';

const ListTask = () => {
    const { list, filter } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const filteredTasks = list.filter(task => {
        if (filter === "DONE") return task.isDone;
        if (filter === "NOT_DONE") return !task.isDone
        return true
    })
    return (
        <div>
            <div>
                <button onClick={() => dispatch(setFilter('ALL'))}>Tout</button>
                <button onClick={() => dispatch(setFilter('DONE'))}>Terminée</button>
                <button onClick={() => dispatch(setFilter('NOT_DONE'))}>En cours</button>
            </div>
            {filteredTasks.map(task => (
                <Task key={task.id} task={task}/>
            ))}
        </div>
    );
}

export default ListTask;
