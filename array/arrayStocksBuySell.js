/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {    
        let currentProfit = prices[i] - minPrice;
        
        minPrice = minPrice > prices[i] ? prices[i] : minPrice;
        maxProfit = currentProfit > maxProfit ? currentProfit : maxProfit;
    }
    
    return maxProfit;
};