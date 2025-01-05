---
title: leetcode刷题-力扣教你学炒股系列
subtitle: 
layout: post
date: 2025-01-04
author: heavenmei
categories:
  - Post
description: 
tags:
  - Code
image:
---
## 前言
股票问题一共6道：

[121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)

[122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

[123. 买卖股票的最佳时机 III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)

[188. 买卖股票的最佳时机 IV](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)

[309. 买卖股票的最佳时机含冷冻期](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

[714. 买卖股票的最佳时机含手续费](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

先消化通用解法再找优质其他解法


## 通用解法
> 动态规划
> 参考： https://leetcode.cn/circle/discuss/qiAgHn/

每天可能的操作只有：**买入**、**卖出**、**休息**

$DP[i][k][0/1]$: 第 *i* 天结束时， 最多交易 *k* 次 且交易后持有 *0/1* 份股票时，最大收益。

$$
DP[i][k] = 
\begin{cases} 
0: Max( DP[i-1][k][0], DP[i-1][k][1] + prices[i] ), \\
\text{i天结束后未持有: (休息， 卖出 不影响交易数)} \\ \\
1:Max(DP[i-1][k][1], DP[i-1][k-1][0] - prices[i]),\\
\text{i天结束后持有: (休息， 买入 影响交易数) }
\end{cases}

$$

其中，$i \ge 1$, **k** 根据题目而定。边界条件为：

$DP[0][k][0] = DP[i][0][0] = 0$, 表示第0天或者交易0次，后还未持有则收益为0

$DP[0][k][1] = DP[i][0][1] = -Infinity$, 表示第0天或交易0次，后持有则收益为负

时间复杂度为 $O(n)$ 和空间复杂度为 $O(n)$

### [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
**Easy**

给定一个数组 `prices` ，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天的价格。

你只能选择 **某一天** 买入这只股票，并选择在 **未来的某一个不同的日子** 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 `0` 。

**题解**

**k = 1** 的情况
$$
DP[i][k] = 
\begin{cases} 
0: Max( DP[i-1][1][0], DP[i-1][1][1] + prices[i] ), \\

1:Max(DP[i-1][1][1], DP[i-1][0][0] - prices[i]),\\
\end{cases}
$$
 推导后，$DP[i-1][0][0] = 0$ 省略k 级数组，结果为
$$
DP[i] = 
\begin{cases} 
0: Max( DP[i-1][0], DP[i-1][1] + prices[i] ), \\

1:Max(DP[i-1][1], DP[i-1][0] - prices[i]),\\
\end{cases}
$$



```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let dp = new Array(len);
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < len; i++) {
    dp[i] = new Array(2).fill(0);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  return dp[len - 1][0];
};
```


### [122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)
**Medium**

给你一个整数数组 `prices` ，其中 `prices[i]` 表示某支股票第 `i` 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 **最多** 只能持有 **一股** 股票。你也可以先购买，然后在 **同一天** 出售。

返回 _你能获得的 **最大** 利润_ 。

**题解**

**k = Infinity** 的情况, 因此可以直接 k 级数组。推导结果为：

$$
DP[i] = 
\begin{cases} 
0: Max( DP[i-1][0], DP[i-1][1] + prices[i] ), \\

1:Max(DP[i-1][1], DP[i-1][0] - prices[i]),\\
\end{cases}
$$

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let dp = new Array(len);
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < len; i++) {
    dp[i] = new Array(2).fill(0);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);

  }
  return dp[len - 1][0];
};
```



### [123. 买卖股票的最佳时机 III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)
**Hard**

给定一个数组，它的第 `i` 个元素是一支给定的股票在第 `i` 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 **两笔** 交易。

**题解**
**k = 2** 的情况
$$
DP[i][k] = 
\begin{cases} 
0: Max( DP[i-1][k][0], DP[i-1][k][1] + prices[i] ), \\
1:Max(DP[i-1][k][1], DP[i-1][k-1][0] - prices[i]),\\
\end{cases}

$$


```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let dp = new Array(len);

  dp[0] = Array.from({ length: 3 }, () => [0, -prices[0]]);

  for (let i = 1; i < len; i++) {
    dp[i] = Array.from({ length: 3 }, () => new Array(2).fill(0));

    dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);
    dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i]);

    dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i]);
    dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i]);
  }

  return dp[len - 1][2][0];
};

```


### [188. 买卖股票的最佳时机 IV](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)
**Hard**

给你一个整数数组 `prices` 和一个整数 `k` ，其中 `prices[i]` 是某支给定的股票在第 `i` 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 `k` 笔交易。也就是说，你最多可以买 `k` 次，卖 `k` 次。

**题解**
**k = 任意值** 的情况, 通用解法

$$
DP[i][k] = 
\begin{cases} 
0: Max( DP[i-1][k][0], DP[i-1][k][1] + prices[i] ), \\
1:Max(DP[i-1][k][1], DP[i-1][k-1][0] - prices[i]),\\
\end{cases}

$$
```js
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const len = prices.length;
  let dp = new Array(len);

  dp[0] = Array.from({ length: k + 1 }, () => [0, -prices[0]]);

  for (let i = 1; i < len; i++) {
    dp[i] = Array.from({ length: k + 1 }, () => new Array(2).fill(0));
    dp[i][0] = [0, -prices[0]];

    for (let j = 1; j <= k; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
    }
  }
  return dp[len - 1][k][0];
};


```


### [309. 买卖股票的最佳时机含冷冻期](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
**Medium**

给定一个整数数组`prices`，其中第  `prices[i]` 表示第 `i` 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

**题解**
**k = Infinity** 但有CD 的情况。由于存在冷却期，因此*买入*时要考虑是否超过了冷静期。转义方程修改为：

$$
DP[i] = 
\begin{cases} 
0: Max( DP[i-1][0], DP[i-1][1] + prices[i] ), \\
\\
1:Max(DP[i-1][1], DP[i-2][0] - prices[i]),\\
\text{i天结束后持有: (休息， 买入 且超过冷静期 -影响交易数) }
\end{cases}

$$

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let dp = new Array(len);
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < len; i++) {
    dp[i] = new Array(2).fill(0);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(
      dp[i - 1][1],
      i >= 2 ? dp[i - 2][0] - prices[i] : -prices[i]
    );

  }
  return dp[len - 1][0];
};
```



### [714. 买卖股票的最佳时机含手续费](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

**Medium**

给定一个整数数组 `prices`，其中 `prices[i]`表示第 `i` 天的股票价格 ；整数 `fee` 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

**题解**

**k = Infinity** 但要考虑手续费（成本）的情况。在*卖出*时要考虑手续费的

$$
DP[i] = 
\begin{cases} 
0: Max( DP[i-1][0], DP[i-1][1] + prices[i] - fee ), \\
\text{i天结束后未持有: (休息， 卖出 -不影响交易数)} \\\\
1:Max(DP[i-1][1], DP[i-1][0] - prices[i]),\\

\end{cases}

$$

```js
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const len = prices.length;
  let dp = new Array(len);
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < len; i++) {
    dp[i] = new Array(2).fill(0);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[len - 1][0];
};
```



## 其他解法

### [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
找最小成本，最大化收益


```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cost = prices[0];
    let profile = 0;

    for(let i = 0; i < prices.length;i++){
        cost = Math.min(cost,prices[i]);
        profile = Math.max(profile,prices[i]-cost)
    }
    return profile;
};
```




### [122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)
贪心：求所有正斜率的总和

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(0, prices[i] - prices[i - 1]);
  }
  return profit;
};
```




