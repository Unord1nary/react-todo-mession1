import { createContext, useContext } from 'react'
import { useTodos } from '../hooks/useTodos.js'

const TodoContext = createContext(null)

export function TodoProvider({ children }) {
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
