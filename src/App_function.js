import React, { useState } from 'react'
import "./App.css";
import List from './components/List';
import Form from './components/Form';

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");


  // 입력된 value 목록에 추가
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // 원래 있던 할 일에 새로운 할 일 더해주기
    if (value !== '') {
      setTodoData((prev) => [...prev, newTodo]);
      setValue("");
    }
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
      </div>
    </div>
  )
}
