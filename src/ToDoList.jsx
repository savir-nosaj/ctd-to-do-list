import ToDoListItem from "./ToDoListItem";

function ToDoList({todoList}) {

    return (
        <ul>
            {todoList.map(todo => <ToDoListItem key = {Date.now()} todo = {todo}/>)}
        </ul>
    );
}

export default ToDoList;
