# TodoApp

간단한 **React + Vite + Tailwind** 기반 할 일 관리 애플리케이션입니다.

## ✅ 주요 기능

| 기능              | 설명                                                  |
| ----------------- | ----------------------------------------------------- |
| 할 일 추가        | 텍스트 입력 후 등록 버튼 클릭 시 리스트에 항목 추가   |
| 할 일 삭제        | 항목의 삭제 버튼 클릭 시 해당 항목 제거               |
| 완료 체크         | 체크박스 클릭 시 완료 여부 토글 (스타일 변환 포함)    |
| localStorage 저장 | 추가/삭제/체크 시 변경된 상태를 `localStorage`에 저장 |
| 초기 로드         | 앱 실행 시 `localStorage`에서 데이터를 불러와 렌더링  |

## 📁 컴포넌트 구조

```
src/
├─ components/
│  ├─ TodoItem.jsx      # 할 일 항목 UI (체크박스 + 삭제 버튼)
│  ├─ TodoList.jsx      # 할 일 목록 렌더링
│  └─ TodoWriteForm.jsx # 입력 폼 + 등록 버튼
├─ context/
│  └─ TodoContext.jsx   # Context + Provider (전역 상태 제공)
├─ hooks/
│  └─ useTodos.js       # todo 상태 및 로직 (localStorage 동기화 포함)
├─ utils/
│  └─ storage.js        # localStorage 읽기/쓰기 유틸
├─ index.css            # Tailwind CSS 베이스 스타일
└─ App.jsx              # 루트 UI (레이아웃 + 컴포넌트 조합)
```

### 수정하기 및 현재 목표의 갯수 (상태) 확인 기능 추가 예정

### 상태/기능 로직 위치

- **로컬 상태 + localStorage 동기화**: `src/hooks/useTodos.js`
- **전역 컨텍스트**: `src/context/TodoContext.jsx`
- **UI/스타일**: Tailwind CSS 유틸리티 클래스 (컴포넌트 내부)

## 🛠 기술 스택

- **React 19** (함수형 컴포넌트 + Hooks)
- **Vite** (빠른 개발 서버, 빌드)
- **Tailwind CSS v4** (유틸리티 스타일링)
- **localStorage** (로컬 상태 영속화)

## 🚀 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`로 접속합니다.

## 🧩 빌드 & 배포

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## 🧹 정리 (클린업)

- `dist/`는 빌드 결과물로 언제든 삭제해도 되며, 재빌드 시 다시 생성됩니다.
- `node_modules/`는 `npm install`로 다시 설치할 수 있습니다.
