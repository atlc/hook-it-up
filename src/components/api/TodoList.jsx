import React, { useState, useEffect } from 'react';

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
            {todoList.map(tdl => (
                <>
                    <div className="row" key={tdl.id}>
                        <ul className="list-group">
                            <li className={`list-group-item font-weight-bold bg-${tdl.completed ? 'success' : 'danger'}`}>Todo: {tdl.title}</li>
                            <li className="list-group-item">Status: {tdl.completed ? '' : 'in'}complete</li>
                            <li className="list-group-item">User: {tdl.userId}</li>
                            <li className="list-group-item">Task ID: {tdl.id}</li>
                        </ul>
                    </div>
                    <hr />
                </>
            ))}
        </div>
    )
}

export default TodoList;