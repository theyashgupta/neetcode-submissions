class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1
        while (left < right) {
            const currentSum = numbers[left] + numbers[right]
            if(currentSum > target) right--
            if(currentSum < target) left++
            if(currentSum==target) return [left+1, right+1]
        }
    }
}
