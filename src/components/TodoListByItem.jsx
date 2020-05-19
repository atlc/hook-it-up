import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoListByItem = (props) => {

    let url = props.match.params.id;
    const [todoList, setListItems] = useState([]);

    useEffect(() => {
        const getTodoList = async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/todos/' + url);
            let list = await res.json();
            setListItems(list);
        }
        getTodoList();
    }, [url]);

    return (
        <div className="container">
            <TodoItem {...todoList} />
        </div>
    )
}

export default TodoListByItem;