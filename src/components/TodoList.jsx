import { useTodoContext } from '../context/TodoContext.jsx'
import TodoItem from './TodoItem.jsx'

function TodoList() {
    // TodoContext에서 상태와 함수 가져오기
    const { todos, toggleTodo, removeTodo, editTodo } = useTodoContext()

    return (
        <ul>
            {/* todos 반복하면서 TodoItem 컴포넌트로 값을 렌더링 */}
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}       // React에서 리스트 렌더링 시 고유 key 필요
                    todo={todo}         // 할 일 객체 전달
                    onToggle={toggleTodo} // 완료 상태 토글 함수 전달
                    onRemove={removeTodo} // 삭제 함수 전달
                    onEdit={editTodo}     // 내용 수정 함수 전달
                />
            ))}
        </ul>
    )
}

export default TodoList