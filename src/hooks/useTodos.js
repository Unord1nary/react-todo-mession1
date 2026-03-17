import { useState, useRef, useEffect } from 'react'
import { getStorage, setStorage } from '../utils/storage.js'

// 스토리지에 저장된 데이터가 없을 때 사용할 기본 할 일 목록
const defaultTodos = [
    { id: 3, value: '저녁 식사하기', completed: false },
    { id: 2, value: '프로그래머스 알고리즘 풀기', completed: true },
    { id: 1, value: 'Velog 작성하기', completed: false },
]

export function useTodos() {
    // 로컬스토리지에서 할 일 목록을 불러옴
    const loadTodos = () => {
       const parsed = getStorage('todos')
       // 저장된 데이터가 없거나 빈 배열이면 기본 목록을 반환
       if (!Array.isArray(parsed) || parsed.length === 0) return defaultTodos
       return parsed
      }
    // 마지막으로 사용된 id를 추적 (렌더링과 무관하게 최신 값 유지)
    const lastId = useRef(3)
    // 할 일 목록 상태 (초기값은 loadTodos로 불러옴)
    const [todos, setTodos] = useState(loadTodos)

    // todos가 변경될 때마다 현재 최대 id를 lastId에 동기화
    useEffect(() => {
        const maxId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0)
        lastId.current = maxId
    }, [todos])

    // todos가 변경될 때마다 로컬스토리지에 저장
    useEffect(() => {
        setStorage('todos', todos)
    }, [todos])

    // 새로운 할 일을 목록 맨 앞에 추가
    const addTodo = (value) => {
        setTodos([{ id: lastId.current + 1, value, completed: false }, ...todos])
        lastId.current += 1
    }

    // 특정 id의 할 일을 목록에서 제거
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // 특정 id의 할 일 완료 상태를 토글
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    }

    // 특정 id의 할 일 내용을 수정
    const editTodo = (id, value) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, value } : todo)))
    }

    return { todos, addTodo, removeTodo, toggleTodo, editTodo }
}
