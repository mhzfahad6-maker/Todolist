import React, { useState } from 'react'




const ToDoList = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const addTodo = () => {
    if (!input.trim()) return
    setData([...data, input])
    setInput('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onDelete = (index) => {
    const newData = [...data]
    newData.splice(index, 1)
    setData(newData)
  }
  const editTodo = (index) => {
    setInput(data[index]);
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} placeholder='enter' onChange={(event) => setInput(event.target.value)} />
        <button type='button' onClick={addTodo}>ADD</button>
         
        <div>
          <ul>
            {
              data.map((value, index) => (
                <li key={index}>{value} <button onClick={() => onDelete(index)} >delete</button> <button onClick={() => editTodo(index)}>edit</button></li>
                
              ))
            }
          </ul>
        </div>
      </form>
     
    </div>
  ) 
}

export default ToDoList