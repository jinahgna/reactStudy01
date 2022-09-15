import React, { useState } from 'react'
import "./App.css";
import List from './components/List';

export default function App() {

  const {todoData, setTodoData} = useState([]);
  const {value, setValue} = useState("");

  // 할일 input text에 입력
  const handleChange = (e) => {
    setValue(e.target.value)
  };

  // 입력된 value 목록에 추가
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData}/>
        
        <form style={{display:'flex', marginTop: '20px'}} onSubmit={ handleSubmit }>
          <input 
            type="text" 
            name="value" 
            style={{ flex:'10', padding:'5px'}} 
            placeholder="해야할 일을 입력하세요." 
            value={ value } 
            onChange={ handleChange }/>
          <input 
            type="submit" 
            value="입력" 
            className="btn" 
            style={{ flex:1 }}/>
        </form>
      </div>
    </div>
  )
}
