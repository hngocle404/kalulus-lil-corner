---
title: Derivatives notes
date created: Saturday, 13th January 2024, 00:10:18
last modified: Friday, 10th January 2025, 01:32:54
area:
  - school
class: western sydney
tags:
  - finance
  - derivatives
---
# Derivatives notes

## Chapter 1. Basics
### Basic derivatives
>**Futures and forward contracts** are agreements to buy or sell an asset at a certain time in the future for a certain price.
**Futures** contracts are traded on an exchange
**Forward** contracts are traded in the over-the-counter market.

>**Options** trade both on exchanges and in the over-the-counter market. 2 types:
>1. A **call** option gives the holder the right to buy an asset by a certain date for a certain price.
>2. A **put** option gives the holder the right to sell an asset by a certain date for a certain price.

> [!quote]+ Example - option price chart
> Suppose that a March call option on a stock with a strike price of $50 costs $2.50 and is held until March. Under what circumstances will the holder of the option make a gain? Under what circumstances will the option be exercised? Draw a diagram showing how the profit on a long position in the option depends on the stock price at the maturity of the option.
> * Call = ability to BUY
> * If high price, ill buy at low predet price. So spot increases (->) -> boom at 50 PLUS premium -> perk up profits
> * Low price -> no exercise -> straight line lose at x = -2.5
> ![[Pasted image 20240114031854.png]]
>
>
> Suppose that a June put option on a stock with a strike price of $60 costs $4 and is held until June. Under what circumstances will the holder of the option make a gain? Under what circumstances will the option be exercised?
> * Put = ability to sell -> good if prices go down
> * At spot = 60 (-4 premium since holder) = 56 -> exercise -> profits perk up
> * Spot rate higher than that (<-) = profits = negative at 4, not exercised options
> * Chart for the holder:
> ![[Pasted image 20240113012227.png]]
> * Chart for the seller:
> ![[Pasted image 20240113012159.png]]

### Long vs. short positions

A trader who enters into a **long futures position** is agreeing to **BUY** the underlying asset for a certain price at a certain time in the future.

A trader who enters into a **short futures position** is agreeing to **SELL** the underlying asset for a certain price at a certain time in the future.

### OTC vs exchange traded
>The **over-the-counter** market is a telephone- and computer-linked network of financial institutions, fund managers, and corporate treasurers where 2 participants can enter into any mutually acceptable contract.
* When a market maker quotes a bid and an offer, the **bid** is the price at which the market maker is prepared to **BUY** and the **offer** is the price at which the market maker is prepared to **SELL**.

>An **exchange-traded** market is a market organized by an exchange where traders either meet physically or communicate electronically and the contracts that can be traded have been defined by the exchange.
### Participants in the markets

Three main types of participants in the markets: hedgers, speculators, and arbitrageurs.

* **Hedging** = when it has an exposure to the price of an asset and takes a position in futures or options markets to offset the exposure.
* **Speculation** = the company has no exposure to offset. It is betting on the future movements in the price of the asset.
* **Arbitrage** involves taking a position in two or more different markets to lock in a profit.

>**Hedgers** are in the position of facing risk associated with the price of an asset.
 * They use futures, forward, or option contracts to reduce or eliminate this risk.

>**Speculators** wish to bet on future movements in the price of an asset.
* Futures, forward, and option contracts can give them extra leverage; that is, the contracts can increase both the potential gains and potential losses in a speculative investment.

>**Arbitrageurs** are in business to take advantage of a discrepancy between prices in two different markets.
* If, for example, they see the futures price of an asset getting out of line with the spot price, they will take offsetting positions in the two markets to lock in a profit.
## Chapter 2. Future and forward markets
### Opening & closing futures positions

A very high proportion of the futures contracts that are traded **do not lead to the delivery of the underlying asset**.

* This is because traders **usually enter into offsetting contracts to close out their positions before the delivery period is reached**. However, it is the possibility of final delivery that drives the determination of the futures price.

>**Closing a position** = enter into an OPPOSITE trade to the original one that opened the position
### Contract specifications

The most important aspects of the design of a new futures contract are

* the specification of the underlying asset
* the size of the contract
* the delivery arrangements
* the delivery months

The specification of contracts is an important activity for a futures exchange. The two sides to any contract must know

* what can be delivered
* where delivery can take place
* when delivery can take place
* details on the trading hours
* how prices will be quoted
* maximum daily price movements

Some contracts, such as those on stock indices, are settled in cash rather than by delivery of the underlying asset.

New contracts must be approved by the Commodity Futures Trading Commission before trading starts.

### Convergence of future & spot prices; arbitrage opportunities

As we approach the delivery period -> futures price coverge to spot price. Otherwise -> **arbitrage opportunity**

![[Pasted image 20240118155416.png]]

==If future P > spot P==

1. Sell (SHORT) futures contract promising to sell the asset at HIGH
2. Buy the asset at LOW
3. Deliver the asset to the futures contract buyer, earning HIGH

-> Since future inflow from selling > spot outflow from buying -> profit
-> As traders exploit this arbitrage opportunity, the futures price
will fall.

==If future < spot P==

1. Buy a future promising to buy the asset at LOW
2. Wait until delivery
3. Buy the asset at LOW, cheaper than buying asset now at HIGH

-> Prices would consequently rise

If the **futures price < spot price** during the delivery period, there is no similar perfect arbitrage strategy.

* An arbitrageur can take a long futures position but cannot force immediate delivery of the asset. The decision on when delivery will be made is made by the party with the short position.

Nevertheless companies interested in acquiring the asset will find it attractive to enter into a long futures contract and wait for delivery to be made.

### Operation of margin accounts
**Layer 1. Client & broker**
>**Daily settlement / marking to market**
>* the broker will require the investor to deposit funds in a margin account - must be deposited at the time the contract is entered into is known as the **initial margin**.
>* at the end of each trading day, the margin account is adjusted to reflect the investor’s gain or loss.

> [!NOTE] Example: calculation
> Suppose, for example, that by the end of June 5 the futures price has dropped from $1,650 to $1,641.
> * The investor has a loss of $1,800 (= 200  $9), because the 200 ounces of December gold, which the investor contracted to buy at $1,650, can now be sold for only $1,641.
> * The balance in the margin account would therefore be reduced by $1,800 to $10,200.
> * Similarly, if the price of December gold rose to $1,659 by the end of June 5, the balance in the margin account would be increased by $1,800 to $13,800.
> * A trade is first settled at the close of the day on which it takes place. It is then settled at the close of trading on each subsequent day.

**Layer 2. broker vs clearing house**
When there is a decrease in the futures price so that the margin account of an investor with a long position is reduced by $1,800, the investor’s broker has to pay the exchange clearing house $1,800 and this money is passed on to the broker of an investor with a short position.

**Maintenance margin**
The investor is entitled to withdraw any balance in the margin account in excess of the initial margin. To ensure that the balance in the margin account never becomes negative, a **maintenance margin**, which is somewhat lower than the initial margin, is set.

**Variation margin**
If the balance in the margin account falls < the maintenance margin, the investor **receives a margin call and is expected to top up the margin account to the initial margin level the next day**.
* The extra funds deposited are known as a **variation margin**.
* If the investor does not provide the variation margin, the broker closes out the position. In the case considered above, **closing out the position would involve neutralising the existing contract** by selling 200 ounces of gold for delivery in December.

**Extra info**
* Most brokers pay investors interest on the balance in a margin account, making the balance not represent a true cost if the interest rate is competitive.
	* Investors can deposit securities, treasury bills (at 90% face value), or shares (at 50% market value) to satisfy initial margin requirements, with subsequent margin calls requiring cash.
* Unlike forward contracts, futures contracts are settled daily. Daily gains or losses are added to or subtracted from the margin account balance.
* Minimum margin levels = set by the exchange clearing house, with individual brokers having the discretion to require more margin.
* Minimum levels depend on the variability of the underlying asset's price, and maintenance margin is typically about 75% of the initial margin.
* Margin requirements variation: Depend on the trader's objectives, with bona fide hedgers often having lower margin requirements than speculators due to perceived lower risk of default.

**Clearing house & clearin margin**
>**Clearing house** = intermediary in futures transactions, guaranteeing performance and having members who contribute to a default fund.
* Brokers, if not members, must channel their business through a clearing house member.
* Clearing house tracks daily transactions to calculate the net position of each member.
* Brokers maintain margin with a clearing house member, who, in turn, maintains a clearing margin account with the clearing house.

>**Clearing margin account**: Adjusted for gains and losses daily, with an original margin but **no maintenance margin**.
* Balance must be maintained at the original margin multiplied by the number of outstanding contracts.
* Clearing margin calculation: the exchange clearing house calculates the clearing margin based on the number of contracts outstanding, using either a **gross basis** (sum of long and short positions) or a **net basis** (offsetting long and short positions). Most exchanges currently use net margining.
### OTC market
>**OTC market** = where companies agree to derivatives transactions without involving an exchange.

**Collateral**
- Credit risk is inherent in OTC derivatives, and defaults can result in losses for the party with a positive net value.
- Collateral agreements between companies, such as A and B, are used to mitigate credit risk.
- Collateral arrangements may be one-way or two-way, involving the posting of cash or marketable securities with daily valuation.
- Two-way agreements may require **posting variation margin** based on daily changes in transaction values.

**Clearing houses**
* Prior to the 2007 credit crisis, most OTC trades operated through bilateral agreements with collateral but had higher credit risk than exchange-traded markets.
* Regulators, post-2007 crisis, sought to reduce systemic risk by making OTC markets more like exchange-traded markets.
* Legislation mandates the use of **central clearing parties (CCPs)** for standard OTC transactions to reduce credit risk.
* CCPs act as **intermediaries**, becoming the counterparty to both sides of an OTC transaction and managing credit risk through initial and daily variation margin requirements.
	* CCPs are similar to exchange clearing houses.
	* Once it has been agreed between two parties A and B, a standard OTC derivative transaction is presented to a CCP.
	* Assuming the CCP accepts the transaction, it becomes the counterparty to both A and B. (This is similar to the way the clearing house for a futures exchange becomes the counterparty to the two sides of a futures trade).
	* For example, if the transaction is a forward contract where A has agreed to buy an asset from B in one year for a certain price, the clearing house agrees to
	1. Buy the asset from B in one year for the agreed price, and
	2. Sell the asset to A in one year for the agreed price.

=> It takes on the credit risk of both A and B. It manages this risk by requiring an initial margin and a daily variation margin from each of them.

A move from bilateral agreements -> centralised clearing through a CCP

![[Pasted image 20240120141926.png]]

### Market quotes

Table 2.2. Futures Quotes for CME Group Contracts on Commodities - **July 13, 2012**

| **Gold, 100 oz, $ per oz** | Open | High | Low | Prior Settlement | Last Trade | Change | Volume |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Aug. 2012 | 1571.2 | 1596.5 | 1565.6 | 1565.3 | 1589.7 | +24.4 | 115,296 |
| Sept. 2012 | 1570.4 | 1597.5 | 1567.1 | 1566.4 | 1590.2 | +23.8 | 303 |
| Oct. 2012 | 1574.0 | 1598.3 | 1570.0 | 1567.6 | 1593.6 | +26.0 | 726 |
| Dec. 2012 | 1576.5 | 1601.0 | 1570.7 | 1570.0 | 1596.0 | +26.0 | 11,283 |
| June 2013 | 1598.0 | 1604.6 | 1598.0 | 1576.1 | 1604.6 | +28.5 | 250 |
| **Crude Oil, 1,000 barrels, $ per barrel** | **Open** | **High** | **Low** | **Prior Settlement** | **Last Trade** | **Change** | **Volume** |
| Aug. 2012 | 85.86 | 87.61 | 85.58 | 86.08 | 87.28 | +1.20 | 223,698 |
| Sept. 2012 | 86.33 | 88.00 | 85.95 | 86.46 | 87.68 | +1.22 | 87,931 |
| Dec. 2012 | 87.45 | 89.21 | 87.39 | 87.73 | 88.94 | +1.21 | 31,701 |
| Dec. 2013 | 88.85 | 90.15 | 88.78 | 88.92 | 89.95 | +1.03 | 11,128 |
| Dec. 2014 | 87.20 | 87.74 | 87.20 | 86.98 | 87.74 | +0.76 | 2,388 |
| **Corn, 5,000 bushels, cents per bushel** | **Open** | **High** | **Low** | **Prior Settlement** | **Last Trade** | **Change** | **Volume** |
| Sept. 2012 | 730.00 | 748.00 | 726.50 | 731.25 | 742.25 | +11.00 | 78,317 |
| Dec. 2012 | 731.25 | 749.00 | 727.25 | 732.25 | 742.25 | +10.00 | 179,010 |
| Mar. 2013 | 733.00 | 748.25 | 729.00 | 734.50 | 743.50 | +9.00 | 22,588 |
| May 2013 | 731.00 | 744.25 | 726.75 | 732.75 | 739.75 | +7.00 | 4,548 |
| July 2013 | 728.00 | 739.00 | 721.00 | 728.75 | 733.50 | +4.75 | 7,874 |
| Dec. 2013 | 618.75 | 626.50 | 613.75 | 618.25 | 626.00 | +7.75 | 4,260 |
| **Soybeans, 5,000 bushels, cents per bushel** | **Open** | **High** | **Low** | **Prior Settlement** | **Last Trade** | **Change** | **Volume** |
| Aug. 2012 | 1572.00 | 1600.00 | 1571.50 | 1572.50 | 1596.00 | +23.50 | 19,194 |
| Sept. 2012 | 1544.50 | 1574.00 | 1544.50 | 1545.50 | 1570.00 | +24.50 | 7,024 |
| Nov. 2012 | 1528.00 | 1561.50 | 1526.50 | 1529.00 | 1552.75 | +23.75 | 98,526 |
| Jan. 2013 | 1527.75 | 1557.25 | 1523.75 | 1526.00 | 1548.00 | +22.00 | 11,621 |
| Mar. 2013 | 1486.25 | 1508.00 | 1482.25 | 1481.25 | 1500.25 | +19.00 | 6,226 |
| May 2013 | 1432.25 | 1453.25 | 1428.00 | 1430.25 | 1449.00 | +18.75 | 5,234 |
| **Wheat, 5,000 bushels, cents per bushel** | **Open** | **High** | **Low** | **Prior Settlement** | **Last Trade** | **Change** | **Volume** |
| Sept. 2012 | 845.75 | 865.75 | 842.00 | 846.75 | 846.25 | ±0.50 | 41,301 |
| Dec. 2012 | 859.00 | 877.75 | 856.00 | 859.75 | 861.50 | +1.75 | 29,450 |
| Mar. 2013 | 868.00 | 885.75 | 865.00 | 869.00 | 870.00 | +2.00 | 6,972 |
| May 2013 | 865.00 | 881.00 | 863.00 | 864.50 | 867.00 | +2.50 | 2,339 |
| July 2013 | 824.50 | 840.00 | 824.25 | 826.75 | 832.50 | +5.75 | 4,118 |
| **Live Cattle, 40,000 lbs, cents per lb** | **Open** | **High** | **Low** | **Prior Settlement** | **Last Trade** | **Change** | **Volume** |
| Aug. 2012 | 116.900 | 117.600 | 116.300 | 117.025 | 117.225 | +0.200 | 23,117 |
| Oct. 2012 | 121.450 | 121.650 | 120.525 | 121.650 | 121.600 | ±0.050 | 18,427 |
| Dec. 2012 | 124.900 | 125.000 | 124.050 | 124.975 | 124.950 | ±0.025 | 6,561 |
| Feb. 2013 | 128.500 | 128.500 | 127.525 | 128.550 | 128.500 | ±0.050 | 2,450 |
| Apr. 2013 | 131.225 | 131.400 | 130.300 | 131.375 | 131.250 | ±0.125 | 1,615 |

**Prices**
- Prices are presented as the opening, highest, and lowest prices for the day
* The opening price is representative of the prices at which contracts were trading immediately after the start of trading on July 13, 2012.

| **Gold, 100 oz, $ per oz** | Open | High | Low | Prior Settlement | Last Trade | Change | Volume |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Aug. 2012 | **1571.2** | **1596.5** | **1565.6** | 1565.3 | 1589.7 | +24.4 | 115,296 |
| Sept. 2012 | 1570.4 | 1597.5 | 1567.1 | 1566.4 | 1590.2 | +23.8 | 303 |

* For the August 2012 gold contract, the **opening price** on July 13, 2012 was $1,571.2 per ounce.
* The **highest price** during the day was $1,596.5 per ounce and
* The **lowest price** during the day was $1,565.6 per ounce.

**Settlement prices**
>**settlement price** is the price used for calculating daily gains and losses and margin requirements.
>= the price at which the contract traded immediately before the end of a day’s trading session
>= aka close

| **Gold, 100 oz, $ per oz** | Open | High | Low | Prior Settlement | Last Trade | Change | Volume |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Aug. 2012 | 1571.2 | 1596.5 | 1565.6 | **1565.3** | **1589.7** | **+24.4** | **115,296** |

* $1,565.3 = settlement price the previous day (i.e., July 12, 2012).
* 1,589.7 = most recent trading price (closing today)
* +24.4 = price change from the previous day’s settlement price.


> [!NOTE] Calculating the amount gained
> For a trader with a long position, the positive price change of 1565.3 -> 1589.7 = 24.4 is a **gain** (bc buy -> price increases -> profit cos bought at cheaper price).
> Times 100 oz cos that was the price per oz -> earn 2440 today
>
> Similarly, the margin account of a trader with a short (sell) position would lose this amount 2,440 on July 13.

**Trading volume and open interest**
>**Open interest** = total number of outstanding contracts (long = short positions)
**Trading volume** = number of contracts traded in a day
- If there is a large amount of trading by day traders (i.e., traders who enter into a position and close it out on the same day) the volume of trading in a day can be greater than either the beginning-of-day or end-of-day open interest.

Usually 1 party opens, 1 party closes at the same time -> open interest remains at 0. But if both the long and short parties are closing out existing positions -> **the resultant change in the open interest is -1**

**Patterns of futures**
>**Normal market** = futures prices tend to increase as the maturity of the contracts extends into the future.
>* This means that contracts with later expiration dates have higher prices compared to those with earlier expiration dates.
>* For example, if you observe a series of futures prices for different months, and as you move from near-term to far-term contracts, the prices generally go up, it indicates a normal market.
- Gold and live cattle futures prices follow an **increasing function of maturity**, known as a **normal market**; as you move from August 2012 to June 2013 in the contracts, the prices generally increase.

>**Inverted market** = Futures prices tend to decrease as the maturity of the contracts extends into the future.
>* This means that contracts with later expiration dates have lower prices compared to those with earlier expiration dates.
>* For example, if you observe a series of futures prices for different months, and as you move from near-term to far-term contracts, the prices generally go down, it indicates an inverted market.
- Soybean futures prices exhibit a decreasing function of maturity, termed an **inverted market**.

Some commodities, like crude oil, corn, and wheat, may show mixed patterns, combining elements of both normal and inverted markets on a specific date (e.g., July 13, 2012).

### Pricing
#### Currency

In futures markets prices are quoted as the **number of U.S. dollars per unit of foreign currency** for the

* British pound
* euro
* Australian dollar
* New Zealand dollar

For other major currencies, spot and forward rates are quoted as the **number of units of foreign currency per U.S. dollar**.

#### Price limits and position limits
>**Limit down** = in a day the price moves down from the last day's close by an amonut = daily price limit
>**Limit up** = move up by the limit
>Usually ceases trading

Goal of daily price limits: prevent too much volatility due to speculative excesses

>**Position limit** = max # of contracts a speculator may hold -> prevent speculators from exercising undue influence
### Delivery
- Most futures contracts don't result in the physical delivery of the underlying asset; they are typically closed out early.
- **The potential for delivery, however, DOES influences futures prices**.

>**Delivery period:** = Defined by the exchange and varies across contracts.
- Investor A, holding the short position, decides when to deliver.
- Investor A's broker issues a notice of intention to deliver to the exchange clearing house, specifying the number of contracts, delivery location, and grade (for commodities).

**Selection of delivery party**
- The exchange selects a long position holder to accept delivery.
- Not necessarily the original counterparty (e.g. investor B); positions may have been closed out through multiple trades.
- The notice is usually passed to the party with the **oldest outstanding long position**.

**Delivery process:**
- For commodities, taking delivery often involves accepting a warehouse receipt and immediate payment.
- Costs associated with livestock care in livestock futures.
- Financial futures are usually settled by wire transfer.
- Price paid is typically the most recent settlement price, adjusted for grade and location if specified by the exchange.
- The entire delivery process takes around two to three days.

**Critical Days:**
- First Notice Day: The first day for submitting a notice of intention to make delivery.
- Last Notice Day: The last day for submitting such a notice.
- Last Trading Day: Usually a few days before the last notice day.
- Investors with long positions aim to close out contracts before the first notice day to avoid the risk of delivery.

**Cash Settlement:**
- Some financial futures, like stock index futures, are settled in cash due to the impracticality of delivering the underlying asset (e.g., a portfolio of 500 stocks for S&P 500 futures).
- All outstanding contracts are closed on a predetermined day.
- Final settlement price is set equal to the spot price of the underlying asset at the open or close of trading on that day.
### Types of trader & order
#### Traders
>**Commission merchant** = trades on behalf of a client & charges a commission vs.
>**Local** trades on their own behalf

Inidividual traders:

* hedgers
* speculators
	* **scalpers** - very short terms, e.g. a few minutes
	* **day traders** - less than 1 trading day
	* **position traders** - longer
* arbitrageurs
#### Orders
>**Market order** = carry out trade immediately at best price available

>**Limit order** = specifies a specific price -> only execute at this or higher (if selling) or lower (if buying) to prevent loss/maximise profit

>**Stop order** = **stop-loss order** = slightly less favourable than market conditions - once limit is reached -> market order straight away
>e.g. market is currently 35, stop order at 30 -> once it decreases if it hits 30 sell straight away
>goal: close out a position if unfavourable price movements take place -> limit the possible amount of loss

>**Stop-limit order** = order becomes a limit order as soon as a bid/offer is made at a price =/< favourable than stop price

> [!quote] Example: stop-limit order
> * market is currently 25
> * stop-order to buy = stop of 40, limit at 41
> * the moment theres a bid/offer at 40 -> limit order (buy immediately as long as it's not above 41)

> [!quote] Example: a stop-limit order to sell at 20.30 with a limit of 20.10:
> = as soon as there is a bid at 20.30 the contract should be sold providing this can be done at 20.10 or a higher price.

>A **market-if-touched order** is executed at the best available price after a trade occurs at a specified price or at a price more favorable than the specified price.
>* In effect, an MIT becomes a market order once the specified price has been hit.
>* An MIT is also known as a **board order**.

==Comparing market if touched and stop order==

Consider an investor who has a long position in a futures contract and is issuing instructions that would lead to closing out the contract.

* A stop order is designed to place a limit on the loss that can occur in the event of unfavorable price movements.
* By contrast, a market-if-touched order is designed to ensure that profits are taken if sufficiently favorable price movements occur.

==Examples==

**Stop order to sell at $2** = used by investors - order to sell at the best available price once a price of $2 or less is reached -> used to limit losses/protect gains from an existing long position

* if the market price falls to $2 or below, a market order to sell will be triggered

**Limit order to sell at $2** = order to sell at a price of $2 or more -> used to instruct a broker that a short position should be taken, providing it can be done at a price more favorable than $2
* you are instructing your broker to sell your asset at a price of $2 or more, but not at a lower price
* used by traders who want to ensure that they only sell at a certain price or better


















### Forwards vs futures

| attribute | forward | futures |
| ---- | ---- | ---- |
| private arrangement | private | traded on exchanges |
| standardisation | not standardised | standardised |
| specified delivery date | usually one specified date | range of delivery dates |
| settlement | at the end of the contract | settled daily |
| delivery or final cash settlement | usually takes place | usually closed out prior to maturity |
| credit risk | some credit risk | virtually no credit risk |
| price quotes | same as spot:<br>- same as future for big currencies: AUD, NZ, euro, pound = **x US / FOR** <br>- other currencies: **x FOR / US** | number of U.S. dollars per unit of the foreign (**x US / FOR**) |

==Example==

Investor A takes a long/buy position in a 90-day forward contract on £1 million.

* The forward price is 1.6000 dollars per pound.

Investor B takes a long position in 90-day futures contracts on £1 million.

* The futures price is also 1.6000 dollars per pound.

At the end of the 90 days, the exchange rate proves to be 1.7000. The result of this is that investors A and B each make a total gain equal to (1.7 - 1.6)\*1,000,000 = 100,000

* Investor A’s gain is made entirely on the 90th day.
* Investor B’s gain is realised day by day over the 90-day period. On some days investor B may realize a loss, whereas on other days he or she will realise a gain.

> [!NOTE] **FORWARDS = 1 LUMP SUM, FUTURES = MARKED TO MARKET DAILY**

## Chapter 5. Determining forward and future prices
### 1. INVESTMENT vs CONSUMPTION assets
>**Investment assets** = held for investment by a significant number of investors
>**Consumption assets** = held primarily for consumption and not usually for investment purposes

**We CAN use arbitrage arguments to determine the forward and futures prices of an INVESTMENT asset from its spot price and other observable market variables. We CANNOT do this for CONSUMPTION assets.**
### 2. Short selling
>**Shorting** is the act of selling an asset that the investor does not currently own.
>Aka. Selling borrowed assets with the hope of **profitting from a decline in their price**.
1. The investor instructs a broker to short a specific quantity of shares, for instance, 500 shares of company X.
2. The broker **borrows the specified shares from an owner and sells them in the market**. This action is executed in the same manner as a regular market sale.
3. At a later stage, the investor **closes the short position** by buying back the same quantity of shares in the market. These purchased shares replace the borrowed ones, thus closing the short position.

The investor profits if the stock price declines and incurs a loss if it rises.

* If the broker has to return the borrowed shares and none are available, the investor must close the position, even if they aren't ready to do so.

Lending fees may also be charged for shorting.

* An investor with a short position is obligated to pay the broker any income, such as dividends or interest, that would typically be received on the shorted securities.

> [!warning] Net gain from shorting
> * investor shorts 500 shares in April at $120 per share
> * closes the position in July at $100 per share
> * Net gain =
> 	* 500\*120 = 60000 inflow in April - CF from selling
> 	* 500 inflow in May - dividends
> 	* 500\*100 = 50000 outflow in July - CF from buying the shares back

An investor is required to maintain a **margin account** with the broker

* This account, consisting of cash or marketable securities, serves as a guarantee that the investor won't abandon the short position if the share price increases.
* An **initial margin** is necessary, and additional margin may be required in the event of adverse price movements.
* The margin account, which **earns interest**, should NOT represent a cost to the investor, as it can be covered by the proceeds of the asset sale.
### 3. Assumptions
1. **No Transactions Costs:** Market participants are assumed to face no transactions costs when engaging in trades. This simplifies our analysis and allows us to focus on the core principles of forward and futures contracts.
2. **Uniform Tax Rate:** Participants are subject to the same tax rate on all net trading profits. This assumption streamlines our considerations, assuming a consistent tax environment across market participants.
3. **Equal Borrowing and Lending Rates:** Participants can borrow and lend money at the same risk-free rate of interest. This simplifying assumption ensures a level playing field for market participants in terms of financing their trading activities.
4. **Arbitrage Opportunities:** Participants actively take advantage of arbitrage opportunities as they arise in the market. This assumption reflects the proactive nature of key market participants, particularly large derivatives dealers, in exploiting profitable discrepancies.

**Notation**
- **T:** Time until delivery date in a forward or futures contract, measured in years.
- **S0:** Current price of the asset underlying the forward or futures contract.
- **F0:** Current forward or futures price.
- **r:** Zero-coupon risk-free rate of interest per annum, expressed with continuous compounding, applicable to an investment maturing at the delivery date (T years in the future).
	* the rate at which money is borrowed or lent with certainty of repayment, excluding credit risk.
	* Traditionally, financial institutions have used LIBOR as a proxy for the risk-free rate. However, events during the credit crisis starting in 2007 prompted a search for alternative indicators.
### 4. FORWARD PRICE valuation (investment assets only)
#### Case 1. No income generating assets

Given: **forward contract on INVESTMENT ASSET**

* price = P0
* no income
* time to contract delivery = T
* risk free rate = r
* forward price = F0

> [!warning] Forward and spot price formula - NO INCOME
> **F = S . e^(rT)**
> Forward price = Spot price . e^(risk free rate . time to delivery of f/f contract)
> All units = in year

==Example== spot price = 40, rfr = 5%

**If F > Se(rt) -> arbitrageurs can buy the asset and short forward contracts**

* TIME 0: arbitrageur borrows $40 at 5% interest -> buy 1 share -> shorts/sells a forward contract to sell that 1 share in 3 months
* TIME M: upon contract maturity -> arb delivers the share -> receives $43 -> use 40.5 to repay loan
* => PROFIT = 2.5 (in 43 out 40.5)

**If F < Se(rt) -> arbitrageurs can short the asset and enter into long forward contracts**
* TIME 0: abg shorts/sells 1 share -> gain proceed -> invest this proceed at 5% for 3 months -> takes a long position / buy a 3 month forward contract
* TIME M: the proceed invested grows to 40.5 in 3 months -> contract matures, abg pays 39 for the share -> close position
* => PROFIT = 1.5 (in 40.5 out 39)

![[Pasted image 20240125010759.png]]

Under what circumstances do arbitrage opportunities such as those in Table 5.2 not exist?

* The first arbitrage works when the forward price is greater than $40.50
* The second arbitrage works when the forward price is less than $40.50
* => We deduce that, **for there to be no arbitrage, the forward price must be exactly $40.50**

The thing is, given the info in the example, F = 40 . e^(0.05 . 0.25) = 40.50

> [!quote] 4-month forward contract to buy a zero-coupon bond that will mature 1 year from today. (This means that the bond will have 8 months to go when the forward contract matures!); current price = $930; 4-month risk-free rate of interest (continuously compounded) is 6% PA.
> Forward price = 930 . e^(6% . 4/12) = 948.79

Even if short sales are not universally possible for all investment assets, it doesn't impede the derivation of equation F = S...

* The ability to short the asset is not essential
* What matters is the presence of a significant number of investors holding the asset purely for investment.
*  If the forward price is too low, they will find it attractive to sell the asset and take a long position/buy in a forward contract
* The adjustment of forward prices ensures the absence of arbitrage opportunities.
#### Case 2. Income generating assets - known cash income
> [!warning] Forward and spot price formula - KNOWN INTEREST INCOME PAYMENTS
> **F = (S - I) . e^(rT)**
> Forward price = (Spot price - PV of income) . e^(risk free rate . time to delivery of f/f contract)
> All units = in year

* spot price current = 900
* 9 month maturity
* expected coupon payment of 40 after 4 months
* contnsly compounded rfr of 3% for 4 months, 4% for 9 months pa

**If F > (S - I) . e^(rT) -> arbitrageurs can buy the asset and short forward contracts**
- Action now:
    - Borrow $900 from 2 sources: $39.60 for 4 months and $860.40 for 9 months
    - Buy 1 unit of the asset and enter into a forward contract to sell it in 9 months for $910
- Action in 4 months:
    - Receive $40 of income on the asset
    - Use $40 to repay the first loan with interest
- Action in 9 months:
    - Sell the asset for $910
    - Use $886.60 to repay the second loan with interest
    - Close the short position
- **Profit:** $23.40

**If F < (S - I) . e^(rT) -> arbitrageurs can short the asset and enter into long forward contracts**
- Action now:
    - Short 1 unit of the asset to realize $900
    - Invest $39.60 for 4 months and invest $860.40 for 9 months
    - Enter into a forward contract to buy the asset in 9 months for $870
- Action in 4 months:
    - Receive $40 from the 4-month investment
    - Pay income of $40 on the asset
- Action in 9 months:
    - Receive $886.60 from the 9-month investment
    - Buy the asset for $870
    - Close the short position
- **Profit:** $16.60

> [!quote] Forward price = \[ 900 - 40.e^(-3% . 4/12) ] . e^(4% . 9/12) = 948.79

![[Pasted image 20240125012726.png]]

* If the forward price is greater than $886.60, the arbitrageur can execute the first strategy (buying the bond, shorting a forward contract) and make a profit.
* If the forward price is less than $886.60, the arbitrageur can execute the second strategy (shorting the bond, entering into a long forward contract) and make a profit.
=> If there are no arbitrage opportunities, both strategies should not result in a profit. Therefore, the forward price must be precisely $886.60 to eliminate any possibility of arbitrage profits, ensuring equilibrium in the market.

> [!quote] Consider a 10-month forward contract on a $50 stock; assume a continuously compounded 8% risk-free interest rate for all maturities, and anticipate $0.75 dividends per share at three, six, and nine months. Find F.
> PV of income/dividend = I = $0.75 . e^(-8% . 3/12)  +  $0.75 . e^(-8% . 6/12)  +  $0.75 . e^(-8% . 9/12) = 2.162
> Forward price = (50 - 2.162) . e^(8% . 10/12) = 51.14
> => If the forward price were less than this, an arbitrageur would short the stock spot and buy forward contracts.
> => If the forward price were greater than this, an arbitrageur would short forward contracts and buy the stock in the spot market.
#### Case 3. Income generating assets - known yield
>**Known dividends yield** = dividends per year as a percentage of the stock price at the time when dividends are paid are known

We now consider the situation where the asset underlying a forward contract provides a **known yield** rather than a known cash income. This means that the **income is known when expressed as a percent of the asset’s price at the time the income is paid**.

> [!warning] Forward and spot price formula - KNOWN YIELD
> **F = S . e^\[(r-q)T]**
> Forward price = Spot price     .      e^\[(rfr - avg yield pa) . time to delivery of f/f contract]
> All units = in year

>[!quote] S = 25, r = 10%, T = 6 months, yield = 4% pa **WITH SEMIANNUAL COMPOUNDING**
>- Calculate the yield, q = 0.0396 (from 4% per annum with semiannual compounding)
>- F = 25 e^\[(10% - 0.0396) . 6/12] = $25.77
=> If the forward price is less than this, arbitrageurs would short the stock spot and buy forward contracts.
=> If the forward price is greater than this, arbitrageurs would short forward contracts and buy the stock in the spot market.

> [!warning] Converting yield pa: semiannual/annual compounding -> continuous compounding
> Let n be the frequency of compounding per year
> **CONTINUOUS RATE = n . ln(1 + GIVEN RATE / n)**
> Yield is 4% pa semiannual compounding
> -> 0.04/2 = 0.02
> -> 0.02 + 1 = 1.02
> -> ln(1.02) = 0.01980
> -> ln(1.02) x 2 = 0.0396 = 3.96%
### 5. FORWARD CONTRACTS valuation

When a forward contract is initiated, its **value is zero**. Banks are required to value forward contracts in their trading books **daily**.

> [!warning] Value of LONG (BUY) forward contract today f
> **f = (F - K) . e^(-r . T)**
> * forward contract value = 0 initially
> * as time passes, both F and f change
> * K = delivery price

> [!warning] Value of SHORT (SELL) forward contract today f
> **f = (K - F) . e^(-r . T)**

==example==

Long future contract (promise to BUY) on a 0 dividend stock.

* 6 months to maturity
* rfr  = 10% pe, continuously compounding
* stock price is 25 (S0)
* delivery price 24 (K)

Find value of forward contract price F

= S . e^(rT) = 25 . e^(0.1 * 6/12) = 26.28

Value of forward contract = f

= (26.28 - 24) . e^(-0.1 * 6/12) = 2.17

**Summary: valuation of f/f prices & contracts**
![[Pasted image 20240114041907.png]]
### 6. Forwards = futures prices ?
- In theory, when there's **no uncertainty about future interest rates**, the forward price for a contract with a certain delivery date = the futures price for a contract with that delivery date.
- However, in the real world where interest rates vary unpredictably, this theoretical equality breaks down.

**Relationship btwn asset price, interest rates and contract types**
1. When the price (S) of the underlying asset is **strongly positively correlated** with interest rates:
- Increase in S -> immediate gain for a long futures position.
- Positive correlation likely -> simultaneous increase in interest rates.
- The gain is invested at a higher-than-average interest rate.
- Decrease in S -> immediate loss, but the financing is at a lower-than-average interest rate.
- Investors with long forward contracts are not affected by these interest rate movements.
	- => Long futures contracts are slightly more attractive than similar long forward contracts.
	- => Hence, futures prices tend to be slightly > forward prices.

2. When S is strongly negatively correlated with interest rates:
- Similar argument shows that forward prices will tend to be slightly > futures prices.

Theoretical differences between forward and futures prices for **short-term contracts are generally negligible**.

- Practical factors, such as taxes, transaction costs, and margin account usage, can cause variations in forward and futures prices not accounted for in theoretical models.
- The risk of counterparty default may be lower in futures contracts due to the involvement of exchange clearinghouses.
- Futures contracts may be more liquid and easier to trade than forward contracts in certain cases.

=> Despite potential differences, it is generally reasonable to assume that forward and futures prices are the same for most practical purposes.

### 7. Stock indices: f/f contracts

A stock index can usually be regarded as the price of an investment asset that pays dividends. The investment asset is the portfolio of stocks underlying the index, and the dividends paid by the investment asset are the dividends that would be received by the holder of this portfolio. It is usually assumed that the dividends provide a known yield rather than a known cash income.

==example==

3 month (0.23), dividend yield = 0.01 pa (so q = 0.01), current value of index = 1300, r = 0.05

-> Future price = 1300 * e^(0.05 - 0.01) \* 0.25 = 1313.07

>**Index arbitrage**
>- If F > Se^(r-q)T, buy spot stocks and short futures contracts.
>- If F < Se^(r-q)T, short/sell spot stocks and take a long position in futures contracts.
### 7. Currencies: f/f contracts

Property of foreign currency = holder of the currency can earn interest at rfr prevailing in the FOREIGN country -> let the rfr in foreign country be rf (domestic = r)

> [!warning] Price of f/f contract involving foreign currencies
> **F = S . e ^ (r - rf)T**
> Also known as the **interest rate parity relationship** from International Finance

Say I have 1000 units of foreign currency. I need it to domestic currency by time T. There r 2 strategies to convert that 1000 amount to my currency.

![[Pasted image 20240127001443.png]]

**Method 1 (invest 1000 foreign -> sell proceed in future to gain domestic)**

Invest in foreign currency for T years at the foreign risk-free rate (rf) -> enter a forward contract to SELL the proceeds for dollars at time T -> gain 1000.F.e^(rf * T)

**Method 2 (invest 1000 foreign -> sell proceed in future to gain domestic**
Exchange foreign currency for domestic in the spot market -> invest the proceeds for T years at the domestic rfr (r) -> gain 1000. S.e^(r * T) dollars

=> In the absence of arbitrage opportunities, the 2 methods should yield the exact same results

![[Pasted image 20240127003145.png]]

**Calculation**

> [!warning] Calculate forward rate given xc rate & interest rates
> **Forward rate = exchange rate . e ^ \[(rfr local - rfr foreign)\*time]**

> [!quote] Example - forward rate
> An exchange rate is 0.7000 and the six-month domestic and foreign risk-free interest rates are
5% and 7% (both expressed with continuous compounding). What is the six-month forward rate?
%%0.6930%%

Essentially it's an investment asset with a known yield

> [!quote] 2 year interest rates: 5% AUS and 7% US, spot xc rate: 1 AUD = 0.62 US.
> -> 2-year forward exchange rate = 0.62 . e \[(0.07 - 0.05) x 2] = 0.6453
>
>**Scenario 1: 2 year frwrd rate = 0.63** (aka 1 AUD = 0.62 instead of 0.64 US). Arbitrageur can:
>1. T0: Borrow 1000 foreign (AUD) at **5% pa** interest (AUS rate) for 2 years
>2. T0: Convert that borrowed AUD to US at spot xc rate = have 620 USD
>3. T0: Invest US 620 at 7% -> will grow to 620 . e^(7% . 2) = 713.17 USD
>4. T0: Enter a forward contract to by 1105.17 AUD to pay back (calc in part 5 - 1105.17 AUD equals exactly 696.26 USD)
>5. T1: Now paying back the 1000 AUD borrowed: amount after interest = 1000 \* e^(0.05 \* 2) = 1105.17. To pay this back we'll use the amount from the f contract
>6. T1: Net gain = 713.17 USD - 696.26 USD = 16.9 USD
>
>**Scenario 2: 2 year frwrd rate = 0.66** (aka 1 AUD = 0.66 instead of 0.64 US). Arbitrageur can:
>1. T0: Borrow 1000 US at 7% pa (USD rate) for 2 years
>2. T0: Convert to AUD using spot: 1000 / 0.62 = 1612.90 AUD
>3. T0: Invest this AUD at AUD interest rate 5% pa for 2 years. Proceed from AUD investment will = 1782.53 AUD.
>4. T0: Enter f/f contract to sell the investment proceed in AUD later for US. Know 4 sure we will receive 1782.53 * 0.66 = 1176.47 US
>6. T1: Paying back the US borrowed: 1000 US has turned into 1000 . e(0.07 * 2) = 1150.27 US. We would need USD from the forward contract entered earlier. Proceed from f contract: 1176.47
>7. Net gain: -1150.27 (debt) + 1176.47 (gain from f contract) = 26.20

Both strategies above -> **RISKLESS PROFITS**

> [!warning] Value of investment - continuous compounding
> Future amount = Principal . e^(pa interest rate * time in years)

> [!warning] Estimating interest rate differentials from table
> Look at one country & its 2 'Prior settlement price' at 2 different times.
> * e.g. Australia September vs December: 1.0075 -> 1.0000
> * % change = 1/1.0075 = 0.744% LOWER
> => Short term futures prices are DECREASING at a rate of 0.744% / 3 months = 0.744 / 3 * 12 = 2.976% per year.
> => This is also the amount by which **short term Aus interest rates > short term US interest rates**
> ![[Pasted image 20240202003335.png]]

**Futures quotes table**
![[Pasted image 20240127003549.png]]
### 8. Commodities: f/f contracts

Gold owners, like central banks, charge an interest rate known as the gold lease rate when they lend out gold. Same goes for silver. So, holding onto gold and silver can actually bring in some income.

>**Income and storage costs**
- Consumption assets may lack income but have significant storage costs.
- Storage costs = similar to negative income

> [!warning] Forward price of investment commodity
> Without income & storage costs: **F = S . e^(rT)**
> With storage costs U (U = PV of all storage costs): **F = (S + U) . e^(rT)**
> If U = proportional to price of commodity -> treated as negative yield: **F = S.e^\[(r+u)T]**
> * u = storage cost per annum = proportion of spot price net of any yield earnt

> [!quote] Arbitrage opportunity
> Scenario 1: **F > (S + U).e^(rT)**. Arbitrageur can:
> * borrow S + U at rfr -> use it to buy 1 unit of commodity & pay storage costs
> * short / sell a futures contract on that 1 unit of commodity
> => **profit = F - (S+U).e^(rT)**
>
>However, as arbitrageurs do so, there will be a tendency for S0 to increase and F0 to decrease until equation above is no longer true. We conclude that equation cannot hold for any significant length of time.

> [!quote] Arbitrage opportunity
> Scenario 2: **F < (S + U).e^(rT)**. Arbitrageur can:
> * sell commodity -> save storage costs -> invest proceeds at rfr
> * long/buy a futures contract
> => **riskless profit = (S+U).e^(rT) - F**
>

Similarly, equation cannot hold for any significant length of time.

This argument cannot be used for commodities that are not, to any significant extent, held for investment. Individuals and companies who keep such a commodity in inventory do so because of its consumption value, not because of its value as an investment. They are reluctant to sell the commodity in the spot market and buy futures or forward contracts, because futures and forward contracts cannot be used in a  manufacturing process or consumed in some other way. Thus:

![[Pasted image 20240202012224.png]]

> [!warning] Calculating U - pv of storage costs
> U = storage costs per annum . e ^ (-rfr . T)

> [!quote] Gold futures price - f/f price of a commodity
> 1 year futures contract, no income, coss 2$ per ounce pa to store gold, pmt made at the end of the year. Spot S = 1600, rfr r = 5% pa. Thus T = 1 (1 year)
>
>**1. U = pv of all storage costs** = discount cost at rfr
>U = $2 . e^(-5% x 1) = 1.9
>**2. Futures price - theoretical**
>F = (1600 + 1.9) . e ^ (5% x 1) = 1684.03
>
>Suppose the actual gold futures price (F) differs from the theoretical one above.
>
>Scenario 1. **F actual > F theoretical, F = 1700**. Arbitrageur can:
>* Borrow 160k at rfr of 5% to buy 100 ounces of gold
>* Short/Sell 1 gold futures contract for delivery in 1 year
>	* ensures that gold can be sold for 170k
>

>**Convenience yield** = the benefits or advantages an investor receives from holding a physical asset, like a commodity or stock, rather than a futures contract. It reflects market expectations on future commodity availability.
* is **always positive or 0** because it represents the **non-monetary benefits** of owning the physical asset, such as having access to the asset when it's needed.
* For investment assets, convenience yield **must be zero** to avoid arbitrage opportunities.
* **Greater likelihood of shortages increases the convenience yield, while high inventories lead to a lower convenience yield.**
### 9. Cost of carry

The concept of **cost of carry** is sometimes useful.

>**Cost of carry** = the storage cost of the underlying asset plus the cost of financing it minus the income received from it.

* Investment assets: the futures price is greater than the spot price by an amount reflecting the **cost of carry** c.
* ![[Pasted image 20240202195730.png]]
* Consumption assets: the futures price is greater than the spot price by an amount reflecting the **cost of carry net of the convenience yield** c - y.
* ![[Pasted image 20240202195746.png]]

> [!NOTE] Relationships
> * As the convenience yield increases -> one-year futures price as a percentage of the spot price decreases
> * As inventories of a commodity decline -> one-year futures price as a percentage of the spot price decreases
### 10. Delivery options
- In contrast to forward contracts, futures contracts often provide flexibility in the delivery period for the party with the short position.
- The short position holder can choose to deliver at any time during a specified period, usually with a few days' notice.

Determining futures prices becomes complicated due to the flexibility in delivery timing.

- The maturity of futures contracts raises the question of whether it should be assumed at the beginning, middle, or end of the delivery period.

 Understanding when delivery would have occurred is crucial for calculating theoretical futures prices.

- If the futures price increases with time to maturity, it is optimal for the short position holder to deliver early, as interest earned on the cash received outweighs holding the asset.
- In such cases, futures prices are typically calculated based on the assumption of delivery at the beginning of the delivery period.
- Conversely, if futures prices decrease as time to maturity increases, it is usually optimal for the short position holder to deliver as late as possible.
- In these circumstances, futures prices should generally be calculated assuming delivery at the end of the delivery period.
### 11. Futures price & expected spot prices
>**expected spot price** = market's average opinion on an asset's spot price at a future time
- Futures prices converge to spot prices at maturity, prompting an analysis of the relationship between expected spot prices and futures prices.

**Keynes and Hicks' Argument**
- Keynes and Hicks proposed that if **hedgers hold short positions** and **speculators hold long positions**, the **futures price will < expected spot price**.
- This is based on the idea that speculators demand compensation for the risks they bear.

**Modern approach - risk and return**
- The modern approach links futures prices to expected spot prices based on the relationship between **risk and expected return** in the economy.
- Systematic and nonsystematic risks are considered, with **SYSTEMATIC** risk influencing the required expected return on an investment.
- The investment is essentially in the asset underlying the futures contract.
- If returns from this asset are uncorrelated with the stock market, the correct discount rate is the risk-free rate (r), so k = r.

> [!NOTE] CF to speculator
> - Consider: a speculator taking a long (buy) position in a futures contract lasting T years.
>- Objective: Speculator hopes the spot price of the asset will be above the futures price at the contract's end.
>- Ignoring daily settlement, treating the futures contract as a forward contract.
>- Speculator puts the present value of the futures price into a risk-free investment while simultaneously taking a long futures position.
>- Cash flows to the speculator:
>	- Today: **F. e^(rT)**
>	- End of Futures Contract: **S(T)** *(where F0 is the current futures price, ST is the asset price at time T, and r is the risk-free return for time T)*

**Relationship between futures price and expected future spot price**
- When returns are uncorrelated with the stock market, the futures price is considered an unbiased estimate of the expected future spot price.
- Systematic risk:
	* Positive correlation will tend to lead to a futures price lower than the expected future spot price.
	* Negative correlation will tend to lead to a futures price higher than the expected future spot price.
	* Only when the correlation is zero will the theoretical futures price be equal to the expected future spot price.

![[Pasted image 20240202200720.png]]

**Normal backwardation and contango**
>**Normal backwardation** = when the futures price < expected future spot price.
>**Contango** = futures price > expected future spot price.
- Note: These terms can also refer to the relationship between futures prices and current spot prices in certain contexts.

If we assume the capital asset pricing model is true, the relationship between the futures price and the expected future spot price depends on whether the return on the asset is positively or negatively correlated with the return on the stock market.

## Chapter 9. Options markets (skipped)
### Basics of options

There are 2 types of options: calls and puts.

>A **call option** gives the holder the right to buy the underlying asset for a certain price by a certain date.
>A **put option** gives the holder the right to sell the underlying asset by a certain date for a certain price.

There are 4 possible positions in options markets:

1. a long position in a call
2. a short position in a call
3. a long position in a put
4. a short position in a put.

Taking a short position in an option is known as **writing** it.

> [!NOTE] Terminology
> **At the money**: the market is trading near the strike price
> **In the money**: the option is profitable
> **Deep in the money**: the option is very profitable
> **Out of the money**: the option is in a loss making situation (for the buyer)
### Options exchange

An exchange must specify the terms of the option contracts it trades. In particular, it must specify the size of the contract, the precise expiration time, and the strike price. In the United States one stock option contract gives the holder the right to buy or sell 100 shares. The expiration of a stock option contract is 10:59 p.m. Central Time on the Saturday immediately following the third Friday of the expiration month. Options with several different expiration months trade at any given time. Strike prices are at $2:5, $5, or $10 intervals, depending on the stock price. The strike price is generally fairly close to the stock price when trading in an option begins.

The terms of a stock option are not normally adjusted for cash dividends. However, they are adjusted for stock dividends, stock splits, and rights issues. The aim of the adjustment is to keep the positions of both the writer and the buyer of a contract unchanged.

### Participants

Most options exchanges use market makers. These are individuals who are prepared to quote both a bid price (at which they are prepared to buy) and an offer price (at which they are prepared to sell). Market makers improve the liquidity of the market and ensure that there is never any delay in executing market orders. They themselves make a profit from the difference between their bid and offer prices (known as their bid–offer spread). The exchange has rules specifying upper limits for the bid–offer spread.

Writers of options have potential liabilities and are required to maintain margin with their brokers. If it is not a member of the Options Clearing Corporation, the broker will maintain a margin account with a firm that is a member. This firm will in turn maintain a margin account with the Options Clearing Corporation. The Options Clearing Corporation is responsible for keeping a record of all outstanding contracts, handling exercise orders, and so on.

Not all options are traded on exchanges. Many options are traded by phone in the over-the-counter market. An advantage of over-the-counter options is that they can be tailored by a financial institution to meet the particular needs of a corporate treasurer or fund manager

> [!example] ![[Pasted image 20240425001923.png]]

## Chapter 10. Proporties of stock options
### Determinants of option value

There are 6 factors affecting the value of a stock option

1. the current stock price **S0**
2. the strike price **K**
3. the time to expiration **T**
4. the stock price volatility **σ**
5. the risk-free interest rate **r**
6. the dividends expected during the life of the option

| Variable              | European Call | European Put | American Call | American Put |
|:----------------------|:--------------:|:-------------:|:-------------:|:------------:|
| Current stock price   |       +        |       -       |       +       |       -      |
| Strike price          |       -        |       +       |       -       |       +      |
| Time to expiration    |       ?        |       ?       |       +       |       +      |
| Volatility            |       +        |       +       |       +       |       +      |
| Risk-free rate        |       +        |       -       |       +       |       -      |
| Dividends             |       -        |       +       |       -       |       +      |

#### Stock price
>**Call more valuable/expensive as: current price ↑, strike price ↓** (LHS)
* if exercised -> payoff will be current price - strike price

>**Put more valuable/expensive as: current price ↓, strike price ↑** (RHS)
* if exercised -> payoff will be strike price - current price

![[Pasted image 20240203181805.png]]

#### Time to expiration
>**Good for both puts and calls; more valuable/expensive if time to maturity ↑** (or at least X decrease in value)
* E.g. Longer-life option has all the exercise opportunities open to shorter-life option—and more. The long-life option must therefore always be worth at least as much as the short-life option.

![[Pasted image 20240203185451.png]]

However the above is only true if ceteris paribus holds.

==Example== Consider 2 European call (buy) options on a stock: one with an expiration date in 1 month, the other with an expiration date in 2 months. Suppose that a very large dividend is expected in 1.5 months. The dividend will cause the stock price to ↓, so that the short-life option could be worth more than the long-life option.

#### Dividends
>**Good for puts, bad for calls**
* Dividends have the effect of reducing the stock price on the ex-dividend date.
* You alr get dividend money so price ex-dividend (after dividend) date will be lower
#### Volatility

![[Pasted image 20240203185519.png]]

>**Volatility is good for both put and call holders** since they have limited downside risks - they can choose simply to not exercise
* As volatility increases, the chance that the stock will do very well or very poorly increases
#### Risk free rate
>**Good for call, bad for put** (contrast with dividends)

As interest rates in economy (rfr) ↑

* investors expected return required also ↑
* PV of any future CF received by option HOLDERS ↓
=> Combined effects: good for calls, bad for puts

![[Pasted image 20240203185537.png]]

Note: only applicable if ceteris paribus holds. In practice:

* when interest rate (rfr) ↓, stock prices ALSO tend to ↓ (and vice versa)
* interest rate ↑ -> stock price ↑; combined can => bad for call, good for put
* interest rate ↓ -> stock price ↓; combined can => good for call, bad for put
### Assumptions
1. There are no transactions costs
2. All trading profits (net of trading losses) are subject to the same tax rate
3. Borrowing and lending are possible at the risk-free interest rate
4. Market participants are prepared to take advantage of arbitrage opportunities as they arise

**Notation** (American = upper case, European = lower case)

| Symbol | Description                                          |
|--------|------------------------------------------------------|
| S(0)   | Current stock price                                 |
| K      | Strike price of option                              |
| T      | Time to expiration of option                        |
| S(T)   | Stock price on the expiration date                  |
| r      | Continuously compounded risk-free rate of interest |
| C      | Value of American call option to buy one share      |
| P      | Value of American put option to sell one share      |
| c      | Value of European call option to buy one share      |
| p      | Value of European put option to sell one share      |

**Interest rate** r is NOMINAL, not real. It's > 0 (otherwise a risk free investment would be pretty much the same as cash)

### Upper and lower bounds for option prices
>If an option price > upper bound or < lower bound, there are profitable opportunities for arbitrageurs.
#### Upper bound
**Call options** (promise to buy - profit if it later goes up cos u bought it at cheaper price)
* option price is never higher than stock price (if higher then can simply not exercise)

**Put options** (profit if later it goes down)
* US: holder can sell stock for K
	* option price is never higher than strike price (aka K is the max profit so why pay more than K for the option)
* European: at maturity option cannot worth > K (same as above)
	* it follows that it cannot be worth more than the PV of K today (PV of K < K)

> [!warning] Upper bounds of calls and puts for holders
>Call: **C ≤ S(0)**   |   **c ≤ S(0)**
>* If X true -> arbitrage: buy the stock, sell the call option
>
>Put: **P ≤ K**   |   **p ≤ Ke^(-rT)**
>* If X true -> arbitrage: writing/sell the option, invest proceeds of the sale at rfr
#### Lower bounds (non-dividend paying)
**Call option**

> [!quote] \[FULL EXAMPLE WITH EXPLANATION] Euro call (option to buy), non dividend, strike price = 18\$, expire in 1 year (T), cost 3$. Stock price = 20, rfr = 10% pa.
> **Action now**
> * Buy call option **(-3)** (only exercise if strike < spot)
> * Short/sell the stock **(+20)**
> * Invest that 17 for 1 year
>
> **Action at maturity**
>* That 17 invested will turn into 17 x e^(0.1) = **(+18.79)**
>* If spot S(T) > strike
>	* exercise option to buy stock for strike of 18 **(-18)**
>	* now that the stock is in my hands -> deliver it to close out the short position (gaining 20 as alr written above)
>	* **net profit = +18.79 - 18 = 0.79**
>* If spot S(T) < strike of 18:
>	* do NOT exercise option (cos would buy it for higher than market price), accept the 3$ loss from the option expiring worthlessly
>	* buy the stock at spot market price **(-S(T))**
>	* deliver the stock to close out the short position (+20 above, alr written)
>	* **net profit = +18.79 - S(T)** (since ST is < strike of 18 -> we know that profit > 0.79)

>[!warning] The 0.79 above is called the **lower bound** for the price of a European **call** option.
>![[Pasted image 20240204164909.png]]

> [!quote] \[SHORT EXAMPLE - APPLYING THE FORMULA] European call, non dividend, stock price S0 = 51, strike K = 50, T = 0.5 years, rfr = 12% pa.
> Lowerbound
> = S0 - K.e(-rT)
> = 51 - 50.e^(-0.12\*0.5)
> = 3.91

**Put option**
> [!quote] European put, non-dividend, strike K = 40, T = 0.5, cost = 1, stock price S0 = 37, rfr = 5% pa.
> **Action now**
> * Borrow (31 + 1) = 38 at market rfr for 6 months **(+38)**
> * Buy put option for 1 - option to sell stock **(-1)** (exercise if spot S0 < strike K)
> * Buy the stock at market spot for 37 **(-37)**
>
**Action at maturity**
>* Paying back the amount borrowed -> 38.96 including interest **(-38.96)**. Where to get the funds:
>* If spot ST < strike K:
>	* exercise put option, take the stock that I bought and sell it at strike **(+40)**
>	* **net profit = -38.96 + 40 = +1.04**
>* If spot ST > strike K:
>	* don't exercise put
>	* instead of selling the stock through the put option, sell it at market spot rate **(+ST)**
>	* **net profit = -38.96 + ST** (since ST > 40, we know profit > 1.04)

>[!warning] The 1.04 above is called the **lower bound** for the price of a European **put** option.
![[Pasted image 20240204212630.png]]

> [!quote] European call, S0 = 38, T = 0.25, rfr = 0.10, K = 40
> Lower bound
> = 40 . e^(-0.10\*0.25) - 38
> = 1.01

**Call**
No dividend
![[Pasted image 20240216164152.png]]
Yes dividend (D = PV of dividend)
![[Pasted image 20240216181106.png]]

**Put**
No dividend
![[Pasted image 20240216164119.png]]
Yes dividend
![[Pasted image 20240216181150.png]]

If the above are violated -> arbitrage

### Put-call parity

^1e885b

>**Put–call parity** is a relationship between the price, c, of a European call option on a stock and the price, p, of a European put option on a stock.
>* ensures that identical portfolios have the same value today
>* if put-call parity does not hold -> arbitrage opportunity.

Ok setting the scene. We've got:

1. A call option - **betting on the stock's price going up**. If the stock performs well, you benefit from both the call option's potential profits ==(good if go up)==
2. A put option - provides a safeguard against the stock's price dropping. If the stock performs poorly, the put option allows you to sell the stock at the agreed-upon price, minimising losses ==(not bad if go down)==
3. Bond - guarantee a specific amount K at option's expiration date, even if stock performs poorly or call is not exercised ==(not bad if go down)==
4. Stock - same as call, bets on the stock price going up ==(good if go up)==

We're gonna create 2 portfolios, pick 2 securities for each that help achieve a 'balance':

1. PORTFOLIO 1: **Call** (maximise profit) & bond (**minimise** loss)
2. PORTFOLIO 2: **Stock** (maximise profit) & put (**minimise** loss)

At time of maturity T:

![[Pasted image 20240206035058.png]]

If spot S > strike K (good for call, bad for put):

1. **PORTFOLIO 1**
* **call**: exercised, brings in S less the strike K (S - K)
* **bond**: pays K no matter what when matured (+ K)
* Net: S - K + K = **S**

2. **PORTFOLIO 2**
* **put**: expires worthless (0) *(ignore the premium)*
* **share**: pays S no matter what when matured (+ S)
* Net: 0 + S = **S**

If spot S < strike K (good for put, bad for call):

1. **PORTFOLIO 1**
* **call**: expires worthless (0)
* **bond**: pays K no matter what when matured (+ K)
* Net: **K**

2. **PORTFOLIO 2**
* **put**: exercised, brings in strike less the spot at which you bought the share (K - S)
*==technically, you don't buy the share, usu you enter the put without having an actual share, then whne it matures, you buy it at the market spot rate, hence the - S==*
* **share**: pays S no matter what when matured (+ S)
* Net: K - S + S = **K**

Portfolio 1 and portfolio 2 must be equal in both scenarios (K>S and S>K)

Current values/prices (all converted to PV):

* call: c
* bond: Ke^(e-rT) ==*basically K but PV*== + D (if dividend)
* put: p
* share: S

> [!warning] Put call parity for stock WITHOUT DIVIDENDs
> ![[Pasted image 20240205185528.png]]
>
> WITH DIVIDENDs
> ![[Pasted image 20240205185412.png]]

![[Pasted image 20240425001946.png]]

> [!warning] Arbitrage opportunities when put–call parity does not hold. Stock price = $31; interest rate = 10%; call price = $3. Both put and call have strike price of $30 and three months to maturity (0.25)
> **Case 1. Put price p = 2.25**
Put call parity LHS (portfolio 1): c + Ke-rT
= 3 + 30.e^(-0.1\*3/12)
= 32.26
>

Put call parity RHS (portfolio 2): p + S

= 2.25 + 31

= 33.25

=> Portfolio 2 (RHS) is overpriced

>

=> Arbitrage strategy: **BUY PORTFOLIO 1 (underpriced), SELL PORTFOLIO 2 (overpriced)**

>* At T0
> 	* Buy call **(-3)**
> 	* Short/Sell put **(+2.25)**
> 	* Short/Sell share **(+31)**
> 	* Invest the profits from above (-3 + 2.25 + 31) for 3 months **(-30.25)**
> * At T1:
> * if spot ST > strike price of 30:
> 	* exercise call, able to buy the share at 30 **(-30)**
> 	* put holder (the other person) will let it expire worthlessly
> 	* deliver the share that we short sold (we alr received the $ above)
> 	* investment from above is now worth: **(+31.02)**
> 	* => Net profit: 1.02
>
> * if spot ST < strike price of 30:
>	* prices go down, put holder will exercise -> we must buy share at 30 **(-30)**
>	* our call expires worthlessly
>	* investment from above is now worth: **(+31.02)**
>	* => Net profit: 1.02
>
> **Case 2. Put price p = 1**
> Put call parity LHS: 32.26
> RHS: 1 + 31 = 32
> => portfolio 2 is underpriced
>
>Arbitrage strategy: **BUY PORTFOLIO 2, SELL PORTFOLIO 1** (buy put & share, sell call)
>* At T0:
>	* Buy put **(-1)**
>	* Buy share **(-31)**
>	* Short/sell call **(+3)**
>	* Funds for all the above: borrow 29 **(+29)**
>* At T1
>* If spot St > strike price of 30:
>	* prices go up, let put expires worthlessly
>	* call holder will exercise -> we must deliver the share **(+30)**
>	* pay back the fund borrowed, which has turned into 29.e^(0.1 x 3/12) = **(-29.73)**
>	* => Net profit: 30 - 29.73 = 0.27
>
>* if spot ST < strike price of 30:
>	* prices go down, exercise put to sell share for 30 **(+30)**
>	* call holder will let their option expires worthlessly
>	* pay back the fund borrowed, which has turned into 29.e^(0.1 x 3/12) = **(-29.73)**
>	* => Net profit: 30 - 29.73 = 0.27
### American calls and puts

Above = European. Now American options.

#### Put call parity for US options - find upper & lower bounds
**Put–call parity does not hold for American options.** However, it is possible to use arbitrage arguments to obtain upper and lower bounds for the difference between the price of an American call and the price of an American put.

> [!warning] American call & put
![[Pasted image 20240215152508.png]]

> [!quote] American calls & puts
> Non dividend, call strike = 20, maturity T = 5 months, call premium 1.5, stock price = 19, rfr = 0.1
> Inequality above: stock price S0 - strike K ≤ call C - put P ≤ stock price S0 - PV of K Ke^(-rt)
> 19 - 20 ≤ C - P ≤ 19 - 20e^(-0.1 x 5/12)
> -1 ≤ C - P ≤ 19 - 20e^(-0.1 x 5/12)
> **1 ≥ P - C ≥ 0.18**
> * P - C lies btwn 0.18 and 1
> * Given call premium C = 1.5 -> P must be 1.68 - 2.50
> * Aka for US put with same strike K & maturity as US call:
> 	* upper bound = 2.5
> 	* lower bound = 1.68
#### Why it's not optimal to exercise US CALL OPTION early
> [!example] 2 reasons that the early exercise of an American call option on a non-dividend paying stock is not optimal.
> **1. Insurance**
> A call option, when held instead of the stock itself, in effect insures the holder against the stock price falling below the strike price. Once the option has been exercised and the strike price has been exchanged for the stock price, this insurance vanishes.
> **2. Time value of money**
> From the perspective of the option holder, the later the strike price is paid out the better. This is because the more delayed the exercise of the option is, the more interest the option holder can earn (since it is across a longer period of time).

Paraphrasing: *The early exercise of an American put is a trade-off between the time value of money and the insurance value of a put.*

#### Why it CAN be optimal to exercise US PUT OPTION early

Short answer: as long as it is sufficiently **deep in the money**

Bounds for European and American call options when there are no dividends

![[Pasted image 20240215155723.png]]

Variation of price of an American or European call option on a non-dividend paying stock with the stock price S0. Curve moves in the direction of the arrows when there is an increase in the interest rate, the time to maturity, or the stock price volatility

![[Pasted image 20240215155747.png]]

Example: consider an extreme situation. Call option; Strike price K = 10, share price S0 is virtually 0.

* if exercise immediately -> immediate gain of 10
* if wait -> gain is < 10, never exceed 10 since share price cannot be negative
* Also 10 now is > 10 in the future

Put option: different from a call option in that it may be optimal for an investor to forgo this insurance and exercise early in order to realize the strike price immediately.

**In general, the early exercise of a put option becomes more attractive as:**
* **S0 decreases**
* **r increases**
* **volatility decreases**

> [!NOTE] Why the above?
> The early exercise of an American put is attractive when the interest earned on the strike price is greater than the insurance element lost.
> * When interest rates increase, the value of the interest earned on the strike price increases making early exercise more attractive.
> * When volatility decreases, the insurance element is less valuable. Again this makes early exercise more attractive.
### Effect of dividends

![[Pasted image 20240215201145.png]]

> [!warning] Finding upper & lower bounds of US options
![[Pasted image 20240215201155.png]]
## Chapter 11. Options trading strategies
## Chapter 12. Binomial tree pricing
### No arbitrage arguments vs risk-neutral arguments
#### No arbitrage

In the no-arbitrage approach, we set up a riskless portfolio consisting of a position in the option and a position in the stock. By setting the return on the portfolio equal to the risk free interest rate, we are able to value the option.

#### Risk-neutral valuation

When we use risk-neutral valuation, we first choose probabilities for the branches of the tree so that the expected return on the stock equals the risk-free interest rate. We then value the option by calculating its expected payoff and discounting this expected payoff at the risk-free interest rate.

A risk-neutral world has two features that simplify the pricing of derivatives:

1. The expected return on a stock (or any other investment) is the risk-free rate.
2. The discount rate used for the expected payoff on an option (or any other instrument) is the risk-free rate.
#### Comparison - example

> [!warning] No arbitrage valuation of options
> SHORT WAY (risk neutral)
> * f = value of option
> * d = transformation of current stock price if it goes down
> * u = transformation of current stock price if it goes up
![[Pasted image 20240304012806.png]]
>![[Pasted image 20240304012856.png]]
>
>LONG WAY (no arbitrage)
>1. Up value Δ - option = Down value Δ
>Solve for Δ
>Solve for value of portfolio (any of the two sides)
>2. (Δ . current share price - f).e^(rt) = 38.4
>Solve for f = 2.23
>* ** If call, option is -, shares is +Δ**
>* ** If put, opposite, shares is -Δ**


> [!quote] A stock price is currently $40. It is known that at the end of three months it will be either $45 or $35. The risk-free rate of interest with quarterly compounding is 8% per annum. Calculate the value of a three-month European put option on the stock with an exercise price of $40. Verify that no-arbitrage arguments and risk-neutral valuation arguments give the same answers.
> **No arbitrage**
> * -35Δ + 5 = -45Δ
> Δ = -0.5
> * Current value of portfolio: -40Δ + f
> * Portfolio must earn rfr of interest: (-40Δ + f) x e...
> f = 2.06
>
> **Risk neutral**
>* p = probability of upward stock price movement in risk neutral world
>* This must hold true: 45 p + 35 (1 - p) = 40 x e...
>10 p = 5.8
>p = 0.58
>* Expected value of option in risk neutral world:
>f = 0 x 0.58 + 5 x 0.42 = 2.10
>* PV of f = 2.10 / e... = 2.06
### Two-step binomial trees

![[Pasted image 20240304165118.png]]

> [!warning] Valuation of options - 2 step
> ![[Pasted image 20240304172334.png]]
![[Pasted image 20240304165312.png]]
Volatility:
![[Pasted image 20240305011411.png]]

Porbabilities:

* pp
* 2p(1-p)
* (1-p)(1-p)

**The option price is always equal to its expected payoff in a risk neutral world, discounted at the risk-free interest rate**
### Delta
>**Delta** of a stock option = ratio of the change in the price of option : change in the price of underlying stock
>* measures the sensitivity of the option price to the price of the stock when small changes are considered
>* \# of units of the stock we should hold for each option shorted in order to create a **riskless portfolio**
* **delta of call = positive**
* **delta of put = negative**

>**Delta hedging** = construction of a riskless portfolio
## Chapter 13. Options pricing - Black, Scholes, Merton model
### Basics
**Black–Scholes–Merton model assumptions**
1. Assumes a non-dividend-paying stock.
2. The return on the stock in a short period is normally distributed / log normally dist in long period
3. Returns in different non-overlapping periods are independent.

* S: Change in stock price.
* t: Time.
* **m**: Mean of the normal distribution.
* **v**: Variance of the normal distribution.
* Expected Return (**μ**): Mean of the return.
* Volatility (**σ**): Standard deviation of the return.

**Lognormal vs normal**
- **Short term:** In the short term, the Black–Scholes–Merton model assumes that the distribution of stock price changes is **normal**. This means that over brief intervals, the percentage changes in stock prices are expected to follow a symmetric bell-shaped curve.
- **Long term:** As we consider longer time periods, the model assumes that the distribution of future stock prices is **lognormal**. aka **IT'S NOT ST THAT'S NORMAL BUT NATURAL LOG ST IS NORMAL**. This introduces a skewness in the distribution, and it better captures the asymmetry and potential for large price movements over extended periods.

* A normal distribution is symmetrical
* A lognormal distribution is skewed with the mean, median, and mode all different
* A variable with a lognormal distribution has the property that its natural logarithm is normally distributed.
* ![[Pasted image 20240305174810.png]]
* ![[Pasted image 20240305174822.png]]

> [!warning] Black–Scholes–Merton assumption implies that ST (future share price) is normal
> Distribution of ln ST
> ![[Pasted image 20240305021349.png]]
> Distribution of ST
> * With 95% confidence, mean - Z-score . SD < ln ST < mean + Z-score . SD
> * e^LHS < ST < e^RHS
>
> Given the range
> * mean = current price . e^(expected return rate x time)
> * var = current price^2 . e^(2 x expected return x time) . \[e^(volatility/SD . volatility/SD . time) - 1]

> [!quote] Consider a stock with an initial price of $40, an expected return of 16% per annum, and a volatility of 20% per annum. From equation (13.2), the probability distribution of the stock price, ST, in six months is given by
![[Pasted image 20240305014249.png]]
>* There's 95% prob that norm dist var has a value within 1.96 SD of its mean (empirical rule).
>* SD = sqrt(variance) = sqrt(0.2^2 * 6/12) = 0.1414
>
>Hence, with 95% confidence:
>Expected - 1.96.SD < ln ST < Expected + 1.96.SD
>![[Pasted image 20240305020658.png]]
>![[Pasted image 20240305020717.png]]
>32.55 < ST < 56.56
>
>OK now that we've had a range for ST, we need to find mean and variance / SD
>1. Mean of ST = Pe^(rT) = 40e^(16% . 6/12) = 43.33
>2. Variance of ST = P.P . e^(2 * r * t) . (e^(SD.SD.t) - 1)
>![[Pasted image 20240305021034.png]]
>
>**Conclusion**
>* There's a 95% chance stock price will be \[32.55 - 56.56]
>* Mean = 43.33
>* Var = 37.93

> [!quote] Consider a stock with an expected return of 17% per annum and a volatility of 20% per annum. The probability distribution for the rate of return (continuously compounded) realized over one year is NORMAL
> * mean = expected return - SD^2 / 2 = 0.17 - 0.2^2 / 2 = 0.15
> * SD = 20%
>
> 95% confident that return realised over 1 year:
> * 15 - 1.96 x 20 = -24.2%
> * 15 + 1.96 x 20 = +54.2%
#### Expected return
* The higher the risk, the higher the expected return.
* The higher the level of interest rates, the higher the expected return required on any given stock.
#### Volatility

Our uncertainty about future stock prices increases as we look further ahead. As a rough approximation, we can say that the **standard deviation of the stock price** is proportional to the **square root of how far ahead we are looking**: **SD = sqrt(n)**

> [!quote] What is meant by implied volatility? How would you calculate the volatility implied by a European put option price?
> The implied volatility is the volatility that makes the Black–Scholes–Merton price of an option equal to its market price. It is calculated by trial and error. We test in a systematic way different volatilities until we find the one that gives the European put option price when it is substituted into the Black–Scholes–Merton formula.
### Assumptions
1. Stock price behavior corresponds to the lognormal model (developed earlier in this chapter) with and constant.
2. There are no transactions costs or taxes. All securities are perfectly divisible.
3. There are no dividends on the stock during the life of the option.
4. There are no riskless arbitrage opportunities.
5. Security trading is continuous.
6. Investors can borrow or lend at the same risk-free rate of interest.
7. The short-term risk-free rate of interest, r, is constant.
#### Trading days v. calendar days

Research shows that volatility is much higher when the exchange is open for trading than when it is closed. As a result, practitioners tend to ignore days when the exchange is closed when estimating volatility from historical data and when calculating the life of an option.

![[Pasted image 20240306141316.png]]

### Calc volatility from historical data

See excel

### Black–Scholes–Merton modelling

> [!warning] The Black–Scholes–Merton formulas for the prices of European calls and puts on non dividend-paying stocks are
> ![[Pasted image 20240306141705.png]]

The function N(x) is the cumulative probability function for a standardized normal variable. In other words, it is the probability that a variable with a standard normal distribution will be less than x.

![[Pasted image 20240306141759.png]]

> [!quote] The stock price six months from the expiration of an option is $42, the exercise price of the option is $40, the risk-free interest rate is 10% per annum, and the volatility is 20% per annum. This means that S0 = 42, K = 40, r = 0.1, sigma = 0:2, T = 0.5
![[Pasted image 20240306142007.png]]

![[Pasted image 20240306144817.png]]

### Risk-neutral valuation: revisited
>**Risk neutral valuation**
>Any security dependent on other traded securities can be valued on the assumption that investors are risk neutral.
> 1. The expected return from all investment assets is the risk-free interest rate.
 2. The risk-free interest rate is the appropriate discount rate to apply to any expected future cash flow

**Procedures - valuing derivatives**
1. Assume that the expected return from the underlying asset is the risk-free interest rate r (i.e., assume **u = r**).
2. Calculate the expected payoff.
3. Discount the expected payoff at the risk-free interest rate.
## Chapter 4. Interest rates
### 4.1 | Types of rates

Two important interest rates for derivatives traders are Treasury rates and LIBOR rates. Treasury rates are the rates paid by a government on borrowings in its own currency. LIBOR rates are short-term lending rates offered by banks in the interbank market.

* Treasury rates
* LIBOR
* Repo rates
* Risk free rate

The compounding frequency for an interest rate defines a unit of measurement for the interest rate.

* The compounding frequency used for an interest rate defines the units in which it is measured.
* The difference between an annually compounded rate and a quarterly compounded rate is analogous to the difference between a distance measured in miles and a distance measured in kilometers.
* Traders frequently use continuous compound ing when analyzing the value of options and more complex derivatives.
### 4.2 | Bond pricing
>A bond’s **yield** is the single discount rate that, when applied to all cash flows, gives the bond’s value equal to its market price.

>The **par yield** for a certain bond maturity is the coupon rate that causes the bond price to equal its par value. (The par value is the same as the principal value).
### 4.3 | Determining Treasury zero rates
>The **n-year zero rate** or **n-year spot rate** is the rate applicable to an investment lasting for n years when all of the return is realized at the end.

The method most commonly used to calculate zero rates is known as the **bootstrap method**.

* involves starting with short-term instruments and moving progressively to longer-term instruments, making sure that the zero rates calculated at each stage are consistent with the prices of the instruments
* used daily by trading desks to calculate a Treasury zero-rate curve.
### 4.4 | Forward rates

Forward rates are the rates applicable to future periods of time implied by today’s zero rates.

>A **forward rate agreement (FRA)** is an over-the-counter agreement that an interest rate (usually LIBOR) will be exchanged for a specified interest rate during a specified future period of time.
* An FRA can be valued by assuming that forward rates are realized and discounting the resulting payoff.

> [!warning] Forward rate RF
> ![[Pasted image 20240329010249.png]]
### 4.5 | Term structure of interest rates

It is natural to ask what determines the shape of the zero curve. Why is it sometimes downward sloping, sometimes upward sloping, and sometimes partly upward sloping and partly downward sloping?

>**expectations theory**
* simplest
* long-term interest rates should reflect expected future short-term interest rates.
* More precisely, it argues that a **forward interest rate corresponding to a certain future period is equal to the expected future zero interest rate for that period**.
>**market segmentation theory**
* conjectures that **there need be no relationship** between short-, medium-, and long-term interest rates
* a major investor such as a large pension fund invests in bonds of a certain maturity and does not readily switch from one maturity to another.
* The short term interest rate is determined by **supply and demand** in the short-term bond market; the medium-term interest rate is determined by supply and demand in the medium-term bond market; and so on.
>**liquidity preference theory**
* most appealing
* Investors = prefer to preserve their liquidity and invest funds for **short periods of time**.
* Borrowers = prefer to borrow at fixed rates for **long periods of time**.
* This leads to a situation in which **forward rates are greater than expected future zero rates**.
* consistent with the empirical result that yield curves tend to be upward sloping more often than they are downward sloping
* Liquidity preference theory can be used to explain the interest rate term structures that are observed in practice. The theory argues that most individuals and most companies like to borrow long and lend short. To match the maturities of borrowers and lenders, it is necessary for financial intermediaries to raise long-term rates so that forward interest rates are higher than expected future spot interest rates.
## Chapter 3. Hedging strategies using futures
### 3.1 | Basics

Short hedge = short position future contracts = short sell

A **short** hedge is appropriate when a company owns an asset and expects to sell that asset in the future. It can also be used when the company does not currently own the asset but expects to do so at some time in the future.

A **long** hedge is appropriate when a company knows it will have to purchase an asset in the future. It can also be used to offset the risk from an existing short position.

> [!example] It is May 15. An oil producer has negotiated a contract to sell 1 million barrels of crude oil. The price in the sales contract is the spot price on August 15.
>
> Quotes:
> * Spot price of crude oil: $80 per barrel
> * August oil futures price: $79 per barrel (**think what we're selling r gonna go down -> wanna SELL HIGH -> SHORT HEDGE**)
>
> The oil producer can hedge with the following transactions:
> * May 15: Short 1,000 August futures contracts on crude oil
> * August 15: Close out futures position
>
> After gains or losses on the futures are taken into account, the price received by the company is close to $79 per barrel.

**Daily settlement**: futures = everyday, forward = alll at the end
### 3.2 | Basis risk

Basis risk arises from the hedger’s uncertainty regarding the difference between the spot price and futures price at the expiration of the hedge.

>**Basis = spot of asset - futures price of contract**

As time passes, the spot price and a particular month’s futures price do not necessarily change by the same amount and, as aresult, the basis changes. An increase in the basis is referred to as a strengthening of the basis and a decrease in the basis is referred to as a weakening of the basis.

![[Pasted image 20240329114341.png]]

![[Pasted image 20240329114401.png]]

Consider a company that uses a **short hedge** because it plans to sell the asset. If the basis strengthens (i.e., increases) unexpectedly, the company’s position improves because it will get a higher price for the asset after futures gains or losses are considered; if the basis weakens (i.e., decreases) unexpectedly, the company’s position worsens.

-> **short hedge = good if basis gap goes up**

For a company using a **long hedge** because it plans to buy the asset: If the basis strengthens unexpectedly, the company’s position worsens because it will pay a higher price for the asset after futures gains and losses are considered; if the basis weakens unexpectedly, the company’s position improves.

-> **long hedge = good if basis gap goes down**

**Choosing contracts**
In general, basis risk **increases as the 'time difference between the hedge expiration and the delivery month' increases**. A good rule of thumb is therefore to **choose a delivery month that is as close as possible to, but later than, the expiration of the hedge**.

Suppose delivery months are March, June, September, and December for futures on a particular asset. For hedge expirations in December, January, and February, the March contract will be chosen; for hedge expirations in March, April, and May, the June contract will be chosen; and so on.

**Perfect hedge**
- A perfect hedge completely eliminates the hedger’s risk.
- A perfect hedge does not always lead to a better outcome than an imperfect hedge; it just leads to a more certain outcome.

Consider a company that hedges its exposure to the price of an asset.

- Suppose the asset’s price movements prove to be favorable to the company.
- A perfect hedge totally neutralizes the company’s gain from these favorable price movements.
- An imperfect hedge, which only partially neutralizes the gains, might well give a better outcome.

### 3.3 | Cross hedging
>**Cross hedging** occurs when the two assets are different.

>The **hedge ratio** is the ratio of
>"the size of the position taken in futures contracts : the size of the exposure"
* When the asset underlying the futures contract is the same as the asset being hedged it is natural to use a hedge ratio of 1.0. This is the hedge ratio we have used in the examples considered so far. In Example 3.4, for instance, the hedger’s exposure was on 20,000 barrels of oil, and futures contracts were entered into for the delivery of exactly this amount of oil.
* When cross hedging is used, setting the hedge ratio equal to 1.0 is not always optimal. The hedger should choose a value for the hedge ratio that minimizes the variance of the value of the hedged position.
#### Minimum variance hedge ratio

h is the slope of the best-fit line from a linear regression of S against F.

![[Pasted image 20240329115022.png]]

The hedge effectiveness can be defined as the proportion of the variance that is eliminated by hedging. This is the R2 from the regression of S against F and equals 2.

> [!NOTE] Under what circumstances does a minimum variance hedge portfolio lead to no hedging at all?
> When the coefficient of correlation between changes in the futures price and changes in the price of the asset being hedged is zero.

**Optimum number of contracts**
![[Pasted image 20240329115128.png]]
![[Pasted image 20240329115615.png]]

**Tailing the hedge**
Small adjustment made to allow for the impact of daily settlement if we're using futures instead of forwards
![[Pasted image 20240329115249.png]]
Va = dollar value of position being hedged = principal x spot
Vf = dollar value of 1 futures contract = futures x size of 1 f contract
### 3.4 | Hedging equity portfolio

If the portfolio mirrors the index, a hedge ratio very close to 1.0 is clearly appropriate -> number of futures contracts that should be shorted is

![[Pasted image 20240329115822.png]]

![[Pasted image 20240329115812.png]]

> [!quote] Suppose, for example, that a portfolio worth $5.05 million mirrors the S&P 500. The index futures price is 1,010 and each futures contract is on $250 times the index. In this case,
> * VA = 5,050,000
>* VF = 1,010 x 250 = 252,500
>* so that 5,050,000 / 252,500 = 20 contracts should be shorted to hedge the portfolio.

When the portfolio does not exactly mirror the index, we can use the parameter **beta** from the capital asset pricing model to determine the appropriate number of contracts to short.

![[Pasted image 20240329120022.png]]

==example== 3 months

![[Pasted image 20240329120041.png]]

![[Pasted image 20240329120130.png]]

![[Pasted image 20240329120141.png]]

**Why hedge an equity portfolio**
* One answer to this question is that hedging can be justified if the hedger feels that the stocks in the portfolio have been chosen well. In these circumstances, the hedger might be very uncertain about the performance of the market as a whole, but confident that the stocks in the portfolio will outperform the market (after appropriate adjustments have been made for the beta of the portfolio). A hedge using index futures removes the risk arising from market moves and leaves the hedger exposed only to the performance of the portfolio relative to the market.
* Another reason for hedging may be that the hedger is planning to hold a portfolio for a long period of time and requires short-term protection in an uncertain market situation. The alternative strategy of selling the portfolio and buying it back later might involve unacceptably high transaction costs.

**If we wanna lower the beta**
![[Pasted image 20240329120248.png]]
## Chapter 7. Swaps
