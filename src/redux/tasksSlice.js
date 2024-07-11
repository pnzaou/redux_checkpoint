import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        list: [],
        filter: 'ALL'
    },
    reducers: {
        addTask: (state, action) => {
            state.list.push({id: Date.now(), description: action.payload, isDone: false})
        },
        toggleTask: (state, action) => {
            const task = state.list.find(task => task.id === action.payload)
            if(task) {
                task.isDone = !task.isDone
            }
        },
        editTask: (state, action) => {
            const task = state.list.find(task => task.id === action.payload.id)
            if(task) {
                task.description = action.payload.description
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions

export default tasksSlice.reducer