class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Create hash map for first string 
        // key will be string 
        // value will be the count first 1 second instance +1 = 2

        // Second string check map and start reducing 
        // if all zero then anagram = true else false 

        const check = new Map()
        if (s.length != t.length) return false

        for (const i of s) {
            if(check.has(i)) check.set(i, check.get(i) + 1)
            else check.set(i, 1)
        }

        for (const i of t) {
            if(check.has(i)) {
                check.set(i, check.get(i) - 1)
                if (check.get(i) < 0) return false
            }
            else return false
        }

        for (const [key, value] of check) {
            if (value !== 0) return false
        }

        return true
    }
}
