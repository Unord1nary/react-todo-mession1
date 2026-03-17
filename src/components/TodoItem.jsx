import { useState } from 'react'

function TodoItem({ todo, onToggle, onRemove, onEdit }) {
    // 수정 모드 
    const [isEditing, setIsEditing] = useState(false)
    // 수정 중인 입력값 임시 저장
    const [draft, setDraft] = useState(todo.value)

    // 수정 완료 > 실행
    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = draft.trim()  // 앞뒤 공백 제거
        if (!trimmed) return           // 빈값이면 처리하지 않음
        onEdit(todo.id, trimmed)       // 수정 반영
        setIsEditing(false)            // 수정 모드 종료
    }

    // 수정 취소 시 원래 값으로 되돌림
    const handleCancel = () => {
        setDraft(todo.value)
        setIsEditing(false)
    }

    return (
        <li className="mb-2.5 flex items-center gap-3 rounded-xl bg-[#041725] border border-[#0b2538] p-4 transition hover:translate-x-1 hover:bg-[#062335] hover:shadow-lg hover:border-sky-400">
            
            {/* 완료 체크박스 */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="h-4 w-4 shrink-0"
            />

            {isEditing ? (
                // 수정 모드
                <form onSubmit={handleSubmit} className="flex flex-1 gap-2">
                    {/* 수정 입력창 */}
                    <input
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        className="flex-1 rounded-lg border border-[#17324a] bg-[#031522] px-3 py-2 text-sm text-[#e0e6f1] outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                        autoFocus
                    />
                    {/* 저장 버튼 */}
                    <button
                        type="submit"
                        className="rounded-lg bg-sky-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-sky-500"
                    >
                        저장
                    </button>
                    {/* 취소 버튼 */}
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="rounded-lg border border-slate-600 bg-transparent px-3 py-1 text-sm font-medium text-slate-300 transition hover:bg-slate-700"
                    >
                        취소
                    </button>
                </form>
            ) : (
                // 일반 모드
                <>
                    {/* 할 일 내용 */}
                    <span
                        className={`flex-1 text-sm ${
                            todo.completed ? 'line-through text-slate-400' : 'text-slate-100'
                        }`}
                    >
                        {todo.id} : {todo.value}
                    </span>
                    {/* 수정 버튼 */}
                    <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="rounded-lg border border-transparent bg-amber-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-amber-500"
                    >
                        수정
                    </button>
                    {/* 삭제 버튼 */}
                    <button
                        type="button"
                        onClick={() => onRemove(todo.id)}
                        className="rounded-lg border border-transparent bg-red-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-red-500"
                    >
                        삭제
                    </button>
                </>
            )}
        </li>
    )
}

export default TodoItem