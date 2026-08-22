/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res=[];
    let sum=0;
    nums.sort((a,b)=> a-b);
    for(let i=0;i<nums.length-2;i++){
        let left = i+1;
        let right=nums.length-1;
        //duplicate
        if (i>0 &&nums[i]==nums[i-1]){
            continue;
        }
        while (left<right){
            sum = nums[i]+nums[left]+nums[right];
            if (sum == 0){
                res.push([nums[i],nums[left],nums[right]]);
                left++;
                right--;
            }
            if(sum<0){
                left++;
            }
            if(sum>0){
                right--;
            }
        }
    }
    return res
};