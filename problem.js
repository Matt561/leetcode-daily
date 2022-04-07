/** 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order. 
 * */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (map.hasOwnProperty(difference)) {
            return [map[difference], i];
        }
        
        map[nums[i]] = i;
    }    
};