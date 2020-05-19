import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    
    const [todoList, setListItems] = useState([]);

    const getTodoList = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let toDoList = await res.json();
        setListItems(toDoList);
    }

    useEffect(() => {
        getTodoList();
    }, []);

    return (
        <div className="container">
            {todoList.map((tdli, index) => <TodoItem key={index} {...tdli} />)}
        </div>
    )
}

export default TodoList;