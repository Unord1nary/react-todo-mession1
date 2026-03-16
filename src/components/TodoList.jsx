import { useTodoContext } from '../context/TodoContext.jsx'
import TodoItem from './TodoItem.jsx'

function TodoList() {
    const { todos, toggleTodo, removeTodo } = useTodoContext()

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo} />
            ))}
        </ul>
    )
}

export default TodoList
