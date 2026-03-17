import { useTodoContext } from '../context/TodoContext.jsx'

function TodoWriteForm() {
    // TodoContext에서 addTodo 함수 가져오기
    const { addTodo } = useTodoContext()

    // 폼 제출 시 실행되는 함수
    const handleSubmit = (e) => {
        e.preventDefault()                  // 페이지 새로고침 방지
        const form = e.target               // 폼 요소 가져오기
        const value = form.todo?.value?.trim() ?? ''  // 입력값 가져오고 앞 뒤 공백 제거
        if (!value) return                   // 값이 없으면 아무 것도 안함
        addTodo(value)                        // 입력값을 추가
        form.reset()                          // 폼 초기화
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            {/* 할 일 입력 인풋 */}
            <input
                type="text"
                name="todo"
                placeholder="할 일을 입력하세요..."
                autoComplete="off"
                className="flex-1 rounded-lg border border-[#17324a] bg-[#031522] px-4 py-3 text-[#e0e6f1] outline-none transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
            {/* 제출 버튼 */}
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