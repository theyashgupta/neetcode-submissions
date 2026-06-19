class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const hashMap = new Map()
        let length = 0, L = 0, maxF = 0

        for (let R = 0; R < s.length; R++) {
            hashMap.set(s[R], (hashMap.get(s[R]) || 0) + 1)
            maxF = Math.max(maxF, hashMap.get(s[R]))
            while(R-L+1 - maxF > k) {
                hashMap.set(s[L], hashMap.get(s[L]) - 1)
                L++
            }
            length = Math.max(length, R - L+1)
        }

        return length
    }
}
