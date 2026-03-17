import { useTodoContext } from './context/TodoContext.jsx'
import TodoWriteForm from './components/TodoWriteForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
    // Context에서 todos 상태 가져오기  
    const { todos } = useTodoContext()
    // 전체 할 일 개수
    const total = todos.length
    // 완료된 할 일 개수
    const completed = todos.filter((todo) => todo.completed).length

    return (
        <div className="w-full max-w-md p-8 bg-[#041320] rounded-2xl shadow-2xl ring-1 ring-sky-900/70">
            <h2 className="mb-10 text-center text-2xl font-semibold">📌 나의 할 일</h2>
            <TodoWriteForm />
            <TodoList />
            <p className="mt-6 text-center text-sm text-slate-100">
                {total > 0 && completed === total ? '전부 완료했어요 😘' : `${total}개 중 ${completed}개를 완료했어요!`}
            </p>
        </div>
    )
}

export default App
