/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //two pointer i and j 

    //create map 
    // add elemets with freq 
    // iterate in maps, then if freq >1 , return true 
    //else false 


    let m = new Map();
    for (let i=0;i<nums.length;i++){
        if(m.has(nums[i])){
            // let prevfreq = m.get(nums[i]);
            // m.set(nums[i],prevfreq+1);
            return true;
        }
        else{
            m.set(nums[i],1);
        }
    }
    return false;

    // for (let [key,value] of m){
    //     if(value>1){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // } 
};