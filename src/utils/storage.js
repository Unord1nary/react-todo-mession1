export function getStorage(key) {
    try {
        const stored = localStorage.getItem(key); // localStorage에서 문자열 가져오기
        if (stored == null) return null;          // 값이 없으면 null 반환
        return JSON.parse(stored);                // JSON 문자열을 객체/배열 등으로 변환 후 반환
    } catch {
        // 파싱 중 오류 발생 시 null 반환
        return null;
    }
}

 /* localStorage에 데이터를 저장하는 함수 */
export function setStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data)); // 객체/배열 등을 JSON 문자열로 변환 후 저장
    } catch {
       console.log("저장 중 오류 발생")  // 저장 중 오류 발생 시 콘솔에 로그를 남김
    }
}