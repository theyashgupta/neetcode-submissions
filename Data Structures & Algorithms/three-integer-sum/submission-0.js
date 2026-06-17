class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // we will define map
        // for loop on i nums[i] become target
        // - nums[i] = nums[j] + nums[k] 
        //  const j = i+1, const k = nums.length - 1

        const sortedNums = nums.sort((a, b) => a - b)
        const ans = []
        for (let i = 0; i < sortedNums.length - 2; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            let j = i+1
            let k = sortedNums.length-1
            const target = -sortedNums[i]
            while (j < k) {
                const currentSum = sortedNums[j] + sortedNums[k]
                if (currentSum > target) k--
                else if (currentSum < target) j++
                else {
                    ans.push([sortedNums[i],sortedNums[j],sortedNums[k]])
                    while (j < k & sortedNums[j]===sortedNums[j+1]) j++
                    while (j < k & sortedNums[k]===sortedNums[k-1]) k--
                    j++
                    k--
                }
            }
        }
        return ans
    }
}
