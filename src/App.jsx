import { useTodoContext } from './context/TodoContext.jsx'
import TodoWriteForm from './components/TodoWriteForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodoContext()

    return (
        <div className="w-full max-w-md p-8 bg-[#041320] rounded-2xl shadow-2xl ring-1 ring-sky-900/70">
            <h2 className="mb-10 text-center text-2xl font-semibold">📌 나의 할 일</h2>
            <TodoWriteForm />
            <TodoList />
        </div>
    )
}

export default App
