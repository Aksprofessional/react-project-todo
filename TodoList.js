import React, { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const item = {
      id:0,
      text:input,
      completed:false
    }
    
    setTodoList(prev=>[...prev,item])
  }

    return (
      <div>
        <input type='text' placeholder='Enter todo' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={(t)=>addTodo()}>Add</button>
        <ul>
          {todoList.map(t =>
            <li key={t.id}>
              <input type='checkbox'/>
              <span>{t.text}</span>
             <button>Delete</button>
            </li>)}
        </ul>
      </div>
    );
}

export default TodoList;
