import { useState } from 'react'

function TodoItem({ todo, onToggle, onRemove, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft] = useState(todo.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = draft.trim()
        if (!trimmed) return
        onEdit(todo.id, trimmed)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setDraft(todo.value)
        setIsEditing(false)
    }

    return (
        <li className="mb-2.5 flex items-center gap-3 rounded-xl bg-[#041725] border border-[#0b2538] p-4 transition hover:translate-x-1 hover:bg-[#062335] hover:shadow-lg hover:border-sky-400">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="h-4 w-4 shrink-0"
            />
            {isEditing ? (
                <form onSubmit={handleSubmit} className="flex flex-1 gap-2">
                    <input
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        className="flex-1 rounded-lg border border-[#17324a] bg-[#031522] px-3 py-2 text-sm text-[#e0e6f1] outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                        autoFocus
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-sky-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-sky-500"
                    >
                        저장
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="rounded-lg border border-slate-600 bg-transparent px-3 py-1 text-sm font-medium text-slate-300 transition hover:bg-slate-700"
                    >
                        취소
                    </button>
                </form>
            ) : (
                <>
                    <span
                        className={`flex-1 text-sm ${
                            todo.completed ? 'line-through text-slate-400' : 'text-slate-100'
                        }`}
                    >
                        {todo.id} : {todo.value}
                    </span>
                    <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="rounded-lg border border-transparent bg-amber-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-amber-500"
                    >
                        수정
                    </button>
                    <button
                        type="button"
                        onClick={() => onRemove(todo.id)}
                        className="rounded-lg border border-transparent bg-red-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-red-500"
                    >
                        X
                    </button>
                </>
            )}
        </li>
    )
}

export default TodoItem
