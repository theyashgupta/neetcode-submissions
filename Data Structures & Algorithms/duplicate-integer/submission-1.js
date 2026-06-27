class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const check = new Set()
        for (let i in nums) {
            if(check.has(nums[i])) return true
            check.add(nums[i])
        }
        return false
    }
}
