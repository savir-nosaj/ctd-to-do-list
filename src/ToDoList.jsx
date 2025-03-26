function ToDoList() {
    const todos = [
        {id: 1, title: "Review resources"},
        {id: 2, title: "Take notes"},
        {id: 3, title: "Code out app"},
    ];
    return (
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    ) 
}

export default ToDoList
