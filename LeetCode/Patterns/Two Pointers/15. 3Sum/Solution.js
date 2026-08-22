/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //create a new resultant array,res
    //let sum=0
    //run a for loop from 0->n-2
    //initialize two pointers left and right 
    // left=nums[i+1]
    //right=nums.length-1
    //while left<right 
    //if (nums[i]+left=right==0)
        //result.push(nums[i],left,right)
    // if(left <right && nums[i]==left)
        //left++
    // if(left<right && nums[i]==right)
        // right--;
    // left++;
    // right--
    // return sum

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
    // console.log(res);
    return res
};