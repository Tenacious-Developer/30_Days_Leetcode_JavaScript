/**

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.

*/

var expect = function(val) {
    return {
        toBe: function(val1) {
            if (val === val1) {
                return true;
            } else {
                throw new Error("Not Equal"); 
            }
        },

        notToBe: function(val1) {
            if (val !== val1) {
                return true;
            } else {
                throw new Error("Equal");
            }

        }

    }
};

/**

throw explicitly throw an exception, interrupt the normal flow of the program, and transfer control to an associated catch block
new Error() This is an expression that creates a new instance of the Error class. 

throw new Error("Something went wrong"): 
Create a new instance of the Error class with the error message "Something went wrong".
Throw that instance as an exception, interrupting the normal flow of the program.

*/



// Link of the Program: https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
