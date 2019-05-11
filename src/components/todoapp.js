/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import '../css/todo.css';

const TodoApp = () => {
  const helmetContext = {};
  const [task, setTask] = useState(['item 1', 'item2']);
  const [todo, setTodo] = useState('');
  const tasks = task.map((item, index) => {
    const Task = (
      <li
        className="unchecked"
        key={Math.random()}
        onClick={() => {
          const newTodos = task
            .filter((_, i) => i !== index);
          setTask(newTodos);
        }}
      >
        <span>Delete</span>
        {item}
      </li>
    );
    return Task;
  });
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Todo App | React Tools</title>
        <meta name="description" content="Todo App built in React JS." />
      </Helmet>
      <div className="taskMain">
        <form autoComplete="off" action="" onSubmit={(e) => { todo !== '' ? setTask([...task, todo]) : alert("Can't be blank"); setTodo(''); e.preventDefault(); }}>
          <input className="taskInput" type="text" name="tasktext" value={todo} onChange={(e) => { setTodo(e.target.value); }} placeholder="Enter your Task Here" />
        </form>
        <button type="button" className="dark-button" onClick={() => { todo !== '' ? setTask([...task, todo]) : alert("can't be blank"); setTodo(''); }}>Add</button>
        <ul className="tasks">
          {tasks}
        </ul>
      </div>
    </HelmetProvider>
  );
};

export default TodoApp;
