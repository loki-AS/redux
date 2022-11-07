import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name:"todo",
    initialState:{ value: [{id:1,todo:"Eat"},{id:2,todo:"Sleep"},{id:3,todo:"Walk"},{id:4,todo:"Dance"},{id:5,todo:"Jump"} ]},
    reducers:{
        addTodo:(state, action) => {
            state.value.push(action.payload)
        },
        deleteTodo:(state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo:(state, action) => {
            state.value.map(todo => {
                if(todo.id === action.payload.id){
                    todo.todo = action.payload.todo
                }
            })
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer