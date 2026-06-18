class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0, L = 0

        for (let R=0; R < prices.length; R++) {
            let sellPrice = prices[R]
            let buyPrice = prices[L]
            if(buyPrice > sellPrice) L = R
            else {
                profit = Math.max(profit, sellPrice-buyPrice)
            }
        }
        return profit
    }
}
