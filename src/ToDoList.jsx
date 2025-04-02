import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    const todos = [
        {id: 1, title: "Review resources"},
        {id: 2, title: "Take notes"},
        {id: 3, title: "Code out app"},
    ];
    return (
        <ul>
            {todos.map((item) => {
                return (
                    // create instance of component
                    <ToDoListItem
                        // pass props
                        key = {item.id}
                        todo = {item.title}
                    />
                );
            })}
        </ul>
    );
}

export default ToDoList
