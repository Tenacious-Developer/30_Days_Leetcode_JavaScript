/**

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.

*/


// 1 Methods
var createCounter = function(n) {
    let count = n; // can update let value
    return function() {
        const current_value = count; // can't update const value
        count += 1;
        return current_value;

    };
};




// 2 Methods
var createCounter = function(n) {
    
    return function() {
        return n++;  // if value of n is 10 then it will assign in n here then incremented by 1 so retun assign value 10 first time, 
                            //due to closure it will remember the last incremented value of parametre n i.e 11.
    };
};





// Link of the Question =  https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
