/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let m = new Map();
    m.set("I",1);
    m.set("V",5);
    m.set("X",10);
    m.set("L",50);
    m.set("C",100);
    m.set("D",500);
    m.set("M",1000);
    
    let sum = 0;
    for(let i=0;i<s.length;i++){
        let current = m.get(s[i]);
        let next = m.get(s[i+1]);
        if(s[i+1] && current<next){
            sum = sum - current;
        }
        else{
            sum=sum+current;
        }
    }
    return sum;
};