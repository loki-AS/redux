import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from "../features/Todo"

const Todo = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todo.value)

  const [todo, setTodo] = useState("")
  const [newtodo, setNewTodo] = useState("")
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter Todo.." value={todo} onChange={e => setTodo(e.target.value)} />
        <button
        onClick={() => {
          dispatch(
            addTodo({
              id: todoList[todoList.length - 1].id + 1,
              todo,
            })
          )
        }}
        >Add</button>
      </div>
      <div className="displayUsers">
        {todoList.map(m => (
          <div key={m.id}>
            <h1>{m.todo}</h1>
              <input type="text" placeholder='Update todo' onChange={e => setNewTodo(e.target.value)} />
              <button
              onClick={() => {
                dispatch(
                  updateTodo({id:m.id, todo:newtodo})
                )
              }}
              >Update</button>
              <button
                onClick={() => {
                  dispatch(deleteTodo({ id: m.id }));
                }}
              >Delete</button>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Todo