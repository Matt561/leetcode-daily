/** 
 * You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
 * 
 * At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
 * 
 * An integer x - Record a new score of x.
 * "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
 * "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
 * "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
 * Return the sum of all the scores on the record. 
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    const stack = [];
    let total = 0;
    
    for (let i = 0; i < ops.length; i++) {
         
        const current = parseInt(ops[i]);
        const stackLength = stack.length;
        const last = stack[stackLength - 1];
        const secondLast = stack[stackLength - 2];

        switch (true) {
            case Number.isInteger(current):
                stack.push(current);  
                total += current;
                break;
            case ops[i] === '+':
                total += last + secondLast;
                stack.push(last + secondLast);
                break;
            case ops[i] === 'D':
                total += last * 2;
                stack.push(last * 2);
                break;
            case ops[i] === 'C':
                total -= last;
                stack.pop();
                break;
        }        
    }
    
    return total;
}; 