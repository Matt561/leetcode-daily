/**
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
 * If x == y, both stones are destroyed, and
 * If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * At the end of the game, there is at most one stone left.
 * Return the smallest possible weight of the left stone. If there are no stones left, return 0.
 **/

/**
 * @param {number[]} stones
 * @return {number}
 */

 var lastStoneWeight = function(stones) {
    
    const stoneSort = (a, b) => a - b;
    
    const gameRound = (stones) => {
        stones.sort(stoneSort);
        
        const stoneX = stones[stones.length - 1];
        const stoneY = stones[stones.length - 2];
        
        stones.pop();
        stones.pop();            
        
        smashRocks(stoneX, stoneY, stones);
    };
    
    const smashRocks = (stoneX, stoneY, stones) => {
        const newStone = (stoneX > stoneY)
            ? (stoneX - stoneY)
            : (stoneY - stoneX);   
            
        stones.push(newStone);
    }
    
    // Game loop
    while(true) {
        if (stones.length == 0) { return 0; }
        
        if (stones.length === 1) { return stones[0]; }

        if (stones.length === 2) {
            stones.sort(stoneSort);
            return (stones[1] - stones[0]);
        }
        
        gameRound(stones);
    }
};
