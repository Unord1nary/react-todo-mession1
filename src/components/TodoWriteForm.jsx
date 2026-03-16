import { useTodoContext } from '../context/TodoContext.jsx'

function TodoWriteForm() {
    const { addTodo } = useTodoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const value = form.todo?.value?.trim() ?? ''
        if (!value) return
        addTodo(value)
        form.reset()
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                name="todo"
                placeholder="할 일을 입력하세요..."
                autoComplete="off"
                className="flex-1 rounded-lg border border-[#17324a] bg-[#031522] px-4 py-3 text-[#e0e6f1] outline-none transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
            <button
                type="submit"
                className="rounded-lg bg-gradient-to-br from-[#007acc] to-[#005e99] px-4 py-3 font-medium text-white transition hover:bg-[#0894ff] hover:-translate-y-0.5 hover:shadow-lg"
            >
                등록
            </button>
        </form>
    )
}

export default TodoWriteForm
