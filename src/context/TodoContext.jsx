import { createContext, useContext } from 'react'
import { useTodos } from '../hooks/useTodos.js'

// 상태와 함수들을 담을 Context 생성
const TodoContext = createContext(null)

export function TodoProvider({ children }) {
    // useTodos 훅으로 상태와 함수 가져오기
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodos()

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}>
            {children} 
        </TodoContext.Provider>
    )
}

export function useTodoContext() {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error('useTodoContext 호출 오류')
    }
    return context
}

export default TodoProvider