class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map()
        for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i]
            if(myMap.has(difference)) return [i, myMap.get(difference)]
            myMap.set(nums[i], i)
        }
    }
}
