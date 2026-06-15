class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Hash data structure
        const check = new Set();
        for (const i of nums) {
            if (check.has(i)) return true;
            check.add(i);
        }
        return false;
    }
}
