import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const TodoItem = (props) => {

    const [todoItem, setTodoItem] = useState(props);

    useEffect(() => {
        setTodoItem(props);
      }, [props]);

    return (
        <>
            <div className="row" key={todoItem.id}>
                <ul className="list-group">
                    <li className={`list-group-item text-white font-weight-bold bg-${todoItem.completed ? 'success' : 'danger'}`}>{todoItem.title ? 'To do: '+ todoItem.title : 'Loading'}</li>
                    <li className="list-group-item">Description: {todoItem.id ? todoItem.title : 'LOADING'}</li>
                    <li className="list-group-item">Status: {!todoItem.id ? 'LOADING' : todoItem.completed ? 'complete' : 'incomplete'}</li>
                    <li className="list-group-item">User: {todoItem.id ? todoItem.userId : 'LOADING'}</li>
                    <li className="list-group-item">Task ID: {todoItem.id ? todoItem.id : 'LOADING'}</li>
                    <li className="list-group-item">
                        <Button variant="dark" href={`/todo/${todoItem.id}`} style={{margin: "10px"}}>Todo Item By Itself</Button>
                        <Button variant="dark" href={`/todo/`} style={{margin: "10px"}}>All Todo Items</Button>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    );
}

export default TodoItem;