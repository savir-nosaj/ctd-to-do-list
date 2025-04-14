import { useRef } from 'react';

function ToDoForm ({onAddTodo}) {
    const todoTitleInput = useRef("");
    
    function handleAddTodo(event){
        event.preventDefault();
        const title = event.target.title.value;
        event.target.title.value = "";
        onAddTodo(title);
        todoTitleInput.current.focus();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input id="todoTitle" name="title" ref={todoTitleInput} type="text"/>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default ToDoForm;
