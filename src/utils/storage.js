/**
 * localStorage에서 데이터 불러오기
 * @param {string} key
 * @returns {unknown} 파싱된 값 또는 null
 */
export function getStorage(key) {
    try {
        const stored = localStorage.getItem(key)
        if (stored == null) return null
        return JSON.parse(stored)
    } catch (e) {
        console.error('로컬 저장소에서 불러오는 중 오류가 발생했습니다.', e)
        return null
    }
}

/**
 * localStorage에 데이터 저장
 * @param {string} key
 * @param {unknown} data
 */
export function setStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        console.error('로컬 저장소에 저장하는 중 오류가 발생했습니다.', e)
    }
}
