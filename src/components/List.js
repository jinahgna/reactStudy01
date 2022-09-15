import React from 'react'

export default function List({todoData, setTodoData}) {

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
        }
    const getStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px dotted #ccc",
            textDecoration: completed ? "line-through" : "none"
            }
        };

    // 완료된 내용 체크하여 상태 변경 해주기
    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
        if (data.id === id) {
            data.completed = !data.completed;
        }
        return data;
        });
        setTodoData(newTodoData);
    };
    // 할일 삭제
    const handleDelete = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    };


    return (
        <div>
            {todoData&&todoData.map((data)=> (
            <div style={getStyle(data.completed)} key={data.id}>
                <input 
                type="checkbox" 
                id={data.id}
                onChange={() => handleCompleteChange(data.id)}
                defaultChecked={false}/>
                <label htmlFor={data.id}>{data.title}</label>
                <button 
                style={btnStyle} 
                onClick={() => handleDelete(data.id)}>
                x
                </button>
            </div>
            ))}
        </div>
    )
}
