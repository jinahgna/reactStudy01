import React, {Component} from "react";
import "./App.css";

// class component 로 작업한 todoList
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  }
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: completed ? "line-through" : "none"
    }
  };
  // state: 상태관리
  state = {
    todoData : [],
    value: "",
  };
  // 할일 삭제
  handleDelete = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData});
  };
  // 할일 input text에 입력
  handleChange = (e) => {
    this.setState({ value: e.target.value});
  };
  // 입력된 value 목록에 추가
  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기 (전개 연산자)
    this.setState({ todoData: [...this.state.todoData, newTodo], value: ""})
  };
  // 완료된 내용 체크하여 상태 변경 해주기
  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
  }

  render() {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          {this.state.todoData.map((data,index)=> (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input 
                type="checkbox" 
                id={data.id}
                onChange={() => this.handleCompleteChange(data.id)}
                defaultChecked={false}/>
              <label htmlFor={data.id}>{data.title}</label>
              <button 
                style={this.btnStyle} 
                onClick={() => this.handleDelete(data.id)}>
                x
                </button>
            </div>
          ))}
          
          <form style={{display:'flex', marginTop: '20px'}} onSubmit={ this.handleSubmit }>
            <input 
              type="text" 
              name="value" 
              style={{ flex:'10', padding:'5px'}} 
              placeholder="해야할 일을 입력하세요." 
              value={ this.state.value } 
              onChange={ this.handleChange }/>
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
}


// import './App.css';

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default App;
