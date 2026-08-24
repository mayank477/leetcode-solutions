/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    //create map 
    // add elemets with freq 
    // iterate in maps, then if freq >1 , return true 
    //else false 


    let m = new Map();
    for (let i=0;i<nums.length;i++){
        if(m.has(nums[i])){
            let prevfreq = m.get(nums[i]);
            m.set(nums[i],prevfreq+1);
        }
        else{
            m.set(nums[i],1);
        }
    }

    for (let [key,value] of m){
        if(value>1){
            return true;
        }
    } 
    return false;
};