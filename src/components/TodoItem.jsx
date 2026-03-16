function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <li className="mb-2.5 flex items-center gap-3 rounded-xl bg-[#041725] border border-[#0b2538] p-4 transition hover:translate-x-1 hover:bg-[#062335] hover:shadow-lg hover:border-sky-400">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="h-4 w-4 shrink-0"
            />
            <span className={`flex-1 text-sm ${todo.completed ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                {todo.id} : {todo.value}
            </span>
            <button
                type="button"
                onClick={() => onRemove(todo.id)}
                className="rounded-lg border border-transparent bg-red-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-red-500"
            >
                X
            </button>
        </li>
    )
}

export default TodoItem
