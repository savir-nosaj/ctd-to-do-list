import ToDoListItem from "./ToDoListItem";

function ToDoList({todoList}) {

    return (
        <ul>
            {todoList.map((todo) => {
                return (
                    <ToDoListItem
                        key = {todo.id}
                        todo = {todo.title}
                    />
                )
            })}
        </ul>
    );
}

export default ToDoList;
