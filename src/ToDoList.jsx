import ToDoListItem from "./ToDoListItem";

function ToDoList({todoList}) {

    return (
        // code to add ternary statement - will continue
        <ul>
            {todoList.map(todo => <ToDoListItem key = {Date.now()} todo = {todo}/>)}
        </ul>
    );
}

export default ToDoList;
