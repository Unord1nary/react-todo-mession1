import { useTodoContext } from '../context/TodoContext.jsx'
import TodoItem from './TodoItem.jsx'

function TodoList() {
    const { todos } = useTodoContext()

    return (
        <ul>
            {/* todos 반복하면서 TodoItem 컴포넌트로 값을 렌더링 */}
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}  // React에서 리스트 렌더링 시 고유 key 필요
                    todo={todo}    // 할 일 객체 전달
                />
            ))}
        </ul>
    )
}

export default TodoList