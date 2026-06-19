class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let length = 0, L = 0
        const hashMap = new Map()
        
        for(let R=0; R<s.length; R++) {
            if(hashMap.has(s[R]))
                L = Math.max(L, hashMap.get(s[R]) + 1)
            hashMap.set(s[R], R)
            length = Math.max(length, R - L + 1)
        }
        return length
    }
}
