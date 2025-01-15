---
title: Derivatives exercises
date created: Saturday, 13th January 2024, 00:29:58
last modified: Friday, 10th January 2025, 01:03:31
area: 
class: 
tags: 
---

[[Derivatives]]

Maths = blue, Orange = hard, Purple = theory, Orange = need some non-excel work, should revise

[X] = excel ready

| Title             | Derivatives notes                          |
|--------------------|--------------------------------------------|
| Date Created       | Saturday, 13th January 2024, 00:10:18     |
| Last Modified      | Friday, 10th January 2025, 00:59:38       |
| Area              | - school                                  |
| Class             | western sydney                            |
| Tags              | - finance<br>- derivatives                |

## Chapter 1. Basics

> [!NOTE]- What is the difference between (a) entering into a long futures contract when the futures price is \$50 and (b) taking a long position in a call option with a strike price of \$50?
a) BUY future - buy the foreign not at the current market price now but at 50$; **obligated** to buy the asset for $50 and does not have a choice
b) BUY call - buy the ability to buy at predetermined price; has the option to buy the asset for $50 but does not have to exercise the option

> [!NOTE]- An investor enters into a short forward contract to sell 100,000 British pounds for U.S. dollars at an exchange rate of 1.4000 U.S. dollars per pound. How much does the investor gain or lose if the exchange rate at the end of the contract is (a) 1.3900 and (b) 1.4200?
> Short forward = sell pounds for US not at current price but at 1 pound = 1.4 US
> * Gain 1.4 US
> * Lose 1 pound
>
> a) Later 1 pound = only worth 1.39 US -> 1.39 - 1.40 = -0.1 US . 100,000
> The investor is obligated to sell pounds for 1.4000 when they are worth 1.3900.
>
> b) Pound appreciates -> Gain 0.2 US . 100,000

> [!NOTE]- Suppose that you write a put contract with a strike price of $40 and an expiration date in three months. The current stock price is $41 and one put option contract is on 100 shares. What have you committed yourself to? How much could you gain or lose?
> a) Write = sell
> Put = ability to sell
> => You're saying if you buy my put -> if you exercise and sell your stock -> I must definitely buy it at exactly 40 bucks
> => If stock goes up higher -> you'll profit so the buyer won't exercise -> you only **gain the premium**
> => If stock goes down < 40 -> they will profit if they sell for you at 40 -> you lose whatever the spot is - 40, times 100

> [!NOTE]- You would like to speculate on a rise in the price of a certain stock. The current stock price is $29 and a three-month call (buy) with a strike price of $30 costs $2.90. You have $5,800 to invest. Identify two alternative strategies. Briefly outline the advantages and disadvantages of each.
> You think it's gonna go up -> better BUY it now
> a) **buy 5800/29 = 200 shares** now
> b) **buy 2000 options** = option to BUY at 30 dollars
> * Profit if value share goes up > 30 dollars
> * Not exercise -> lose premium 2.9 . 2000 = 5800
>
> If the share price does well, the second strategy will give rise to greater gains. However, if the share price does badly, the second strategy yields greater losses.

> [!NOTE]- Suppose you own 5,000 shares that are worth $25 each. How can put options be used to provide you with insurance against a decline in the value of your holding over the next four months?
> Buy the ability to sell your stocks at set prices if it were to decrease -> BUY a CALL option with a strike price of $25 and an expiration date in four months. If at the end of four months the stock price proves to be less than $25, you can exercise the options and sell the shares for $25 each.

> [!warning]- An exchange-traded stock option provides no funds for the company. It is a security sold by one investor to another. The company is not involved. By contrast, a stock when it is first issued is sold by the company to investors and does provide funds for the company.

> [!example]- Explain why a futures contract can be used for either speculation or hedging.
> If an investor has an EXPOSURE to the price of an asset, he or she can hedge with futures contracts.
> * If the investor will gain when the price decreases and lose when the price increases, a long futures position will hedge the risk.
> * If the investor will lose when the price decreases and gain when the price increases, a short futures position will hedge the risk.
> * Thus either a long or a short futures position can be entered into for hedging purposes.
>

If the investor has NO EXPOSURE to the price of the underlying asset, entering into a futures contract is speculation.

>* If the investor takes a long position, he or she gains when the asset’s price increases and loses when it decreases.
>* If the investor takes a short position, he or she loses when the asset’s price increases and gains when it decreases.

> [!warning]- A cattle farmer expects to have 120,000 pounds of live cattle to sell in three months. The live-cattle futures contract on the Chicago Mercantile Exchange is for the delivery of 40,000 pounds of cattle. How can the farmer use the contract for hedging? From the farmer’s viewpoint, what are the pros and cons of hedging?
> The farmer can SHORT (sell) 3 contracts that have 3 months to maturity.
> * If the price of cattle falls -> sell at high predetermined price -> futures contract profit but will offset the loss on the sale of the cattle.
> * If the price of cattle rises, the gain on the sale of the cattle will be offset by the loss on the futures contract.
> * Using futures contracts to hedge has the advantage that it can at no cost reduce risk to almost zero.
> * Its disadvantage is that the farmer no longer gains from favorable movements in cattle prices.

> [!NOTE]- It is May and a trader writes a September call option with a strike price of $20. The stock price is $18 and the option price is $2. Describe the investor’s cash flows if the option is held until September and the stock price is $25 at this time.
> Write = sell
> Call = ability to BUY
> Write a call = sell ability to buy - at time x if exercise -> writer MUST sell to holder no matter what
> * writer profits if value goes down, sell at agreed > more than spot
> * At 25 dollars, writer must sell for 18 despite spot = 25 -> lose 7 dollars, gain 2 premium = **lose 5**
>
>Essentially, at time 0 the writer **earns 2 dollars**. The, in the future at 25, has to buy the currency at spot of 25 then sell to holder of option for 20 -> **lose 5**
>**=> inflow of $2 in May and an outflow of $5 in September**

> [!example]- The CME Group offers a futures contract on long-term Treasury bonds. Characterise the investors likely to use this contract.
> Most investors will use the contract because they want to do one of the following:
a) Hedge an exposure to long-term interest rates.
b) Speculate on the future direction of long-term interest rates.
c) Arbitrage between the spot and futures markets for Treasury bonds.

> [!example]- An airline executive has argued: “There is no point in our using oil futures. There is just as much chance that the price of oil in the future will be less than the futures price as there is that it will be greater than this price.” Discuss the executive’s viewpoint.
>* It may well be true that there is just as much chance that the price of oil in the future will be above the futures price as that it will be below the futures price. This means that the use of a futures contract for speculation would be like betting on whether a coin comes up heads or tails.
>* But it might make sense for the airline to use futures **for hedging rather than speculation**. The futures contract then has the effect of **reducing risks**. It can be argued that an airline should not expose its shareholders to risks associated with the future price of oil when there are contracts available to hedge the risks.

> [!notes]- A trader enters into a short forward contract on 100 million yen. The forward exchange rate is $0.0080 per yen. How much does the trader gain or lose if the exchange rate at the end of the contract is (a) $0.0074 per yen; (b) $0.0091 per yen?
> Short forward = sell 100 million yen at 1 yen = 0.0080 US no matter what
> Profit if the selling at 1 yen = 0.0080 US is higher than spot rate cos then they can immediately buy back / deliver US at lower amounts
> a) Gain 0.0006 \* 100,000,000
> b) Lose 0.0011 \* 100,000,000

> [!note]- A trader enters into a short cotton futures contract when the futures price is 50 cents per pound. The contract is for the delivery of 50,000 pounds. How much does the trader gain or lose if the cotton price at the end of the contract is (a) 48.20 cents per pound; (b) 51.30 cents per pound?
> Short contract = The agreed-upon price at which the trader has committed to **sell** the cotton is 50 cents per pound, and for the delivery of 50,000 pounds of cotton.
> -> No matter what, I would like to sell at this price (aka they think it's gonna go down so they better sell it at this price that is still high)
> a) It did go down -> profit 50 - 48.20 * 50,000
> b) Lose

> [!NOTE]- A company knows that it is due to receive a certain amount of a foreign currency in four months. What type of option contract is appropriate for hedging?
> -> Receive foreign - wanna **sell** it at set price -> PUT buy -> **long position in a 4-month put option**
> -> provide insurance against the exchange rate falling below the strike price. It ensures that the foreign currency can be sold for at least the strike price
> -> If the foreign currency depreciates, the company can exercise the put option and sell the currency at the higher strike price

> [!NOTE]- A United States company expects to have to pay 1 million Canadian dollars in six months. Explain how the exchange rate risk can be hedged using (a) a forward contract; (b) an option.
> Pay foreign -> wanna make sure 1 US is worth as much Cad in 6 months.
> Bad news if 1 US is worth a lesser amount of Cad -> wanna being able to sell US for Cad at predetermined rate
> -> **long future contract** - buy 1 million Canadian dollars in six months. This would have the effect of locking in an exchange rate equal to the current forward exchange rate.
> -> **buy / long position in a call** - if worst comes to worst -> has the option to buy Cad at set prices - giving it the right (but not the obligation) to purchase 1 million Canadian dollar at a certain exchange rate in six months. This would provide insurance against a strong Canadian dollar in six months while still allowing the company to benefit from a weak Canadian dollar at that time.

> [!example]- Buying a stock and a put option on the stock is considered a form of insurance. Explain.
> * In this strategy, the put option acts as a form of protection against potential downside risk. If the stock price falls, the put option provides the right to sell the stock at a predetermined price (the strike price), limiting the potential losses for the trader.
> * The cost of the put option premium is the price paid for this insurance.
> * It is a common strategy known as a **protective put** or a **married put**.

> [!NOTE] Hard questions
> 1.  An **call** option will always be exercised at maturity if the underlying asset price>  strike price while a **put** option will always be exercised at maturity if the strike price > underlying asset price.
> 2. An **American option** can be exercised at any time during its life, up to and including the expiration date. This flexibility is a key feature of American options, distinguishing them from European options, which can only be exercised at the expiration date.
> 3. If principal size = size of market, then the over-the-counter market is ten times as big as the exchange-traded market.
> 4. When a trader **sells put options**, they are taking on the obligation to **BUY**.
> 5. A **short forward contract** on an asset + a **long position in a call option** on the asset with a strike price = forward price is the same as **a long position a put option**

> [!warning]- A trader has a portfolio worth $5 million that mirrors the performance of a stock index. The stock index is currently 1,250. Futures contract trade on the index with one contract being on 250 times the index. To remove market risk from the portfolio the trader should:
> 1. Number of contracts:
> 	1. Each futures contract is on 250 times the index value
> 	2. Given that the stock index is currently at 1,250
> 	3. Value of one futures contract = 250 * 1,250 = $312,500
> 2. Number of contracts needed = Portfolio value / Value of one futures contract
> 	1. = 5,000,000 / 312,500 = 16 contracts
> 3. Direction: To remove market risk from the portfolio, the trader should take an **opposite** position in the futures market to the existing position in the stock index. Since the trader has a portfolio worth $5 million that mirrors the performance of the stock index, they should take a short / sell position in the futures market => **sell 16 contracts**
> 	1. Taking a **short** position in futures contracts provides a form of insurance against a decline in the value of the portfolio. If the stock index falls, the gain from the short futures position can help offset the loss in the portfolio, thus reducing overall market risk.
> 	2. To hedge the existing long position in the portfolio, the trader should take a short position

> [!warning]- A one-year call option on a stock with a strike price of $30 costs $3; a one-year put option on the stock with a strike price of $30 costs $4. Suppose that a trader buys two call option and one put option. The breakeven stock price below which the trader makes a profit is:
> 'BELOW' which the trader makes a profit -> lower than this = even better, we need to find the ceiling -> the **put** option = the one that would make this trader money (cos price falls -> sell higher than spot).
> * Amount they already lost: 3 + 3 + 4 = 10
> * Sell at: 30
> * To make a profit, price must be 30 - 10 = **20**

> [!warning]- A one-year call option on a stock with a strike price of $30 costs $3; a one-year put option on the stock with a strike price of $30 costs $4. Suppose that a trader buys two call options and one put option. The breakeven stock price above which the trader makes a profit is
> Opposite from above -> profit from **call** options.
> * Amount lost = 10
> * Buy at 30 PER OPTION
> * There are 2 options => price for each option must compensate for that 10 dollars amount -> 10 / 2 = 5
> * Thus price must be 30 + 5 = **35**
## Chapter 2. Futures markets

> [!NOTE]- Hard questions
> 1. Futures contracts nearly always last longer than forward contracts. This is incorrect.
> 2. **Commodities Futures Trading Commission (CFTC)** takes primary responsibility for regulating futures market.
> 3. In many cases, the **open interest** for a near-month futures contract (e.g., June 2012) is often higher than that for a more distant-month futures contract bc traders and investors may show greater interest and activity in contracts with nearer expiration dates.
> 4. **Clearing house** = in both OTC and markets
> 5. Which are cash settled
A. All futures contracts
B. All option contracts
C. Futures on commodities
D. Futures on stock indices (* this one \*)

> [!example]- What's a haircut?
> A **haircut** represents the % reduction in the value of an asset when used as collateral. A 20% haircut means the market value of the bond is reduced by 20%, making it worth $80 when used to satisfy a collateral request.

> [!example]- Number of agreements in bilateral clearing?
> In bilateral clearing, each pair of dealers forms an agreement. Since there are four dealers (let's label them A, B, C, and D), the possible pairs are AB, AC, AD, BC, BD, and CD. Therefore, there are six agreements in total.

> [!NOTE]- \[x] Suppose that you enter into a short futures contract to sell July silver for $27.20 per ounce. The size of the contract is 5,000 ounces. The initial margin is $4,000, and the maintenance margin is $3,000. What change in the futures price will lead to a margin call? What happens if you do not meet the margin call?
> Margin call when (initial margin - maintenance margin) **$1,000** has been lost from the margin account.
>
> Lose money = when price goes up to:
> * 1000 = 5000 * amount lost per contract -> amount lost per contract = 0.2 dollars
>
> => **Occur when: price goes up by 0.2 dollars / to 27.40 per ounce**
>
> If the margin call is not met aka. when you receive a margin call and do not meet it by depositing additional funds into your margin account, the broker will step in to close out your position.

> [!warning]- \[x] Suppose that in September 2013 a company takes a long position in a contract on May 2014 crude oil futures. It closes out its position in March 2014. The futures price (per barrel) is $88.30 when it enters into the contract, $90.50 when it closes out the position, and $89.10 at the end of December 2013. One contract is for the delivery of 1,000 barrels. What is the company’s profit? When is it realized? How is it taxed if it is (a) a hedger and (b) a speculator? Assume that the company has a December 31 year end.
> Long = buy at set $ = profit if it goes up (it did to 90.50)
> -> Total profit = 90.50 - 88.30 times 1000 =2200 dollars
>
>Of this 2.2k, amount realised on a day-by-day basis btwn Sep 2013 - Dec 2013 is:
>-> 89.10 - 88.3 * 1000 = 800 dollars
>
>Amount realised btwn Jan 2014 - Mar 2014:
>-> 90.5 - 89.10 * 1000 = 1400 dollars
>
>**Hedger**: taxed on 2200 dollars (everything) in 2014.
>**Speculator**: taxed on 800 dollars in 2013, 1400 in 2014 (in separate years)

> [!warning]- \[x] A trader buys two July futures contracts on orange juice. Each contract is for the delivery of 15,000 pounds. The current futures price is 160 cents per pound, the initial margin is $6,000 per contract, and the maintenance margin is $4,500 **per contract**. What price change would lead to a margin call? Under what circumstances could $2,000 be withdrawn from the margin account? (**HARD BECAUSE PER CONTRACT - THERE ARE 2**)
> 1. Margin call when: loss = 1500 PER CONTRACT
> 2. Price change required: 1500 = amount lost/pound * 15000
> -> amount lost/price change = 0.1 dollars = 10 cents
> 3. Direction of price change: buy at set price -> lose if price goes down cos then they bought 4 2 high
> => price drops to 150 cents/pound -> trigger margin call
>
>Again must think in terms of 1 contract:
Gain of 1000/contract = 15000 * amount gained/pound
>-> amount = 1/15 or 0.06666 dollars
>-> price goes up to 166.6666 / pound
>
>*You CANNOT join the 2 together into 2k profit since a threshold is set for each individual contract*

> [!NOTE]- At the end of one day a clearing house member is long 100 contracts, and the settlement price is $50,000 per contract. The original margin is $2,000 per contract. On the following day the member becomes responsible for clearing an additional 20 long contracts, entered into at a price of $51,000 per contract. The settlement price at the end of this day is $50,200. How much does the member have to add to its margin account with the exchange clearing house?
> Day 1:
> * Buy 100 contracts
> * Price = 50k / contract
> * Margin = 2k / contract
>

Day 2

> * 20 more contracts
> * 51k / contract
>
>For the new contract, additional margin needed to provide:
>-> 20 * 2000 = 40000 dollars
>
>Amount gained (buy -> good if higher price):
>-> 50200 - 50000 times 100 = 20000 gained on Day 1 contracts
>
>Amount lost:
>-> 50200 - 51000 times 20 = 16000 dollars lost on Day 2 contracts
>
>Amount must add to margin account:
>-> 40k (margin for the new 20) - 4k (gained) = **36000 dollars**

> [!NOTE]- On July 1, 2013, a Japanese company enters into a forward contract to buy $1 million with yen on January 1, 2014. On September 1, 2013, it enters into a forward contract to sell $1 million on January 1, 2014. Describe the profit or loss the company will make in dollars as a function of the forward exchange rates on July 1, 2013, and September 1, 2013.
> July 2013: will buy 1 mil US for x yen/US (current forward XC rate)
> Sep 2013: will sell 1 mil US for y yen/US (current forward XC rate)
>
> On Jan 2014:
> For the July 2013 contract: + 1 mil US, - x yen
> For the Sep 2013 contract: - 1 mil US, + y yen
> **Total payoff**: (- x + y) yen

> [!warning]- The forward price of the Swiss franc for delivery in 45 days is quoted as 1.1000. The futures price for a contract that will be delivered in 45 days is 0.9000. Explain these two quotes. Which is more favorable for an investor wanting to sell Swiss francs?
> 1.1 = will get francs at 1.1 francs / 1 US -> 1 francs = 0.909090909 US
> **0.9 = will get fracs at 0.9 US / 1 francs**
> => First rate > Second rate
> => The Swiss franc is therefore more valuable in the forward market (1st one) than in the futures market.
> => The forward market is therefore more attractive for an investor wanting to **SELL** Swiss francs.

> [!example]- Suppose you call your broker and issue instructions to sell one July hogs contract. Describe what happens.
> **Hog futures** are traded on the Chicago Mercantile Exchange.
> 1. The broker will request some initial margin.
> 2. The order will be relayed by telephone to your broker’s trading desk on the floor of the exchange (or to the trading desk of another broker).
> 3. It will be sent by messenger to a commission broker who will execute the trade according to your instructions.
> 4. Confirmation of the trade eventually reaches you.
> 5. If there are adverse movements in the futures price your broker may contact you to request additional margin.

> [!example]- "Speculation in futures markets is pure gambling. It is not in the public interest to allow speculators to trade on a futures exchange." Discuss this viewpoint.
> Speculators are important market participants because they **add liquidity** to the market. **However, contracts must be useful for hedging as well as speculation**. This is because regulators generally **only approve contracts when they are likely to be of interest to hedgers as well as speculators**.

> [!example]- What do you think would happen if an exchange started trading a contract in which the quality of the underlying asset was incompletely specified?
> The contract would not be a success.
> * Parties with short positions would hold their contracts until delivery and then deliver the cheapest form of the asset -> This might well be viewed by the party with the long position as garbage!
> * Once news of the quality problem became widely known no one would be prepared to buy the contract.
> * This shows that futures contracts are feasible only when there are rigorous standards within an industry for defining the quality of the asset.
> * Many futures contracts have in practice failed because of the problem of defining quality.

> [!example]- “When a futures contract is traded on the floor of the exchange, it may be the case that the open interest increases by one, stays the same, or decreases by one.” Explain this statement.
> * If both sides of the transaction are entering into a new contract, the open interest increases by one.
> * If both sides of the transaction are closing out existing positions, the open interest decreases by one.
> * If one party is entering into a new contract while the other party is closing out an existing position, the open interest stays the same.

> [!NOTE]- \[x] Suppose that on October 24, 2010, you take a short position in an April 2011 live-cattle futures contract. You close out your position on January 21, 2011. The futures price (per pound) is 91.20 cents when you enter into the contract, 88.30 cents when you close out your position, and 88.80 cents at the end of December 2010. One contract is for the delivery of 40,000 pounds of cattle. What is your total profit? How is it taxed if you are (a) a hedger and (b) a speculator? Assume that you have a December 31 year end.
> Short = sell at set $ = think it's gonna go down
>
> Oct 2010: take short position in Apr 2011 contract - 0. 9120
> Dec 2010: 0.8880
> Jan 2011: close out position - 0.8830
> Apr 2011: future contract matures
>
>Total profit (enter -> close)
>-> 0.9120 - 0.8830 times 40000 = 1160 dollars gained
>Realised on day-by-day basis in 2010:
>-> 0.9120 - 0.8880 times 40000 = 960 dollars gained
>
>As a speculator: taxed on 960 in 2010 then on 200 in 2011
>As a hedger: taxed on 1160 in 2011

> [!example]- Explain the difference between bilateral and central clearing for OTC derivatives.
>
> | **Aspect**               | **Bilateral Clearing**                              | **Central Clearing**                             |
|--------------------------|-----------------------------------------------------|-------------------------------------------------|
| **Nature**               | Direct negotiation between counterparties           | Centralised clearinghouse acts as an intermediary|
| **Counterparty Risk**    | High, as it relies on the creditworthiness of each party | Reduced, as the clearinghouse becomes the counterparty to both sides|
| **Documentation**        | ISDA Master Agreement                                | Standardised contracts and terms may be used    |
| **Margining**            | Negotiated directly between counterparties           | Clearinghouses impose margin requirements       |
| **Flexibility**          | Greater flexibility in contract terms and negotiations| Standardisation may limit flexibility           |

> [!example]- Why flexibility decreases f/f prices?
The party with the short position chooses between the alternatives. The alternatives therefore make the futures contract more attractive to the party with the short position. The lower the futures price the less attractive it is to the party with the short position. The benefit of the alternatives available to the party with the short position is therefore compensated for by the futures price being lower than it would otherwise be.

**SELL FUTURE CONTRACT = TAKING SHORT POSITION = THINK IT'S GONNA GO DOWN**

> [!example]- Explain how CCPs work. What are the advantages to the financial system of requiring all standardised derivatives transactions to be cleared through CCPs?
> A CCP, or Central Counterparty, acts as a middleman when trading standardised derivatives.
> * After a trade, the CCP steps in as the central counterparty for both the buyer and seller through a process called novation.
> * The CCP manages risk by using standardised contracts and collecting margin from participants.
> * If a participant defaults, the CCP has procedures to handle it, using the defaulting party's margin and resources to cover losses.
>
> Advantages
> * Significantly reduces counterparty risk by becoming the counterparty for all trades.
> * Promotes transparency through the use of standardised contracts with clear terms.
> * Streamlining of settlement processes by netting offsetting positions, leading to increased operational efficiency.
## Chapter 5. Valuation of futures and forwards

> [!note]- [x] An investor shorts 100 shares when the share price is $50 and closes out the position six months later when the share price is $43. The shares pay a dividend of $3 per share during the six months. Net gain/loss?
> When an investor "shorts" shares, it means they are selling shares they don't own with the expectation that the share price will fall.
> 1. The investor borrows 100 shares from a broker and sells them in the market at the current share price of $50.
> 	* The investor receives $5,000 (100 shares * $50/share) from the sale
> 2. Position open for 6 months:
> 	* The investor keeps the proceeds from the short sale and waits for the share price to decrease.
> 3. Closing out
> 	* After six months, the share price has fallen to $43.
> 	* To close out the short position, the investor buys back 100 shares at the current lower price of $43/share.
> 	* The cost of buying back the shares is $4300 (100 shares * $43/share).
>
> Net so far: 5000 gain from selling - 4300 loss from buying back = 700 gain
>
> But they must pay dividends during open -> lose 3 * 100 = 300
>
>Thus, **profit = 700 - 300 - 400**


> [!example]- The spot price of an asset is positively correlated with the market. Which of the following would you expect to be true?
> => The forward price is less than the expected future spot price
> * A positive correlation between the spot price of an asset and the market implies that when the market is expected to rise in the future, the spot price of the asset is also expected to rise.
> * In such a scenario, the forward price is typically < expected future spot price.
> * This is because the forward price incorporates the expected future spot price plus the cost of carry or the opportunity cost of tying up capital.
> * The difference between the forward price and the expected future spot price reflects this **cost of carry**.

> [!example]- f/f quoting conventions
**Futures** price of a foreign currency -> number of U.S. dollars per unit of the foreign currency.
**Forward** price of a foreign currency -> Some forward prices are always quoted as the number of U.S. dollars per unit of the foreign currency and some are always quoted the other way round.

> [!example]- Reasons why a short position in a stock is closed out?
> * Investor decisions
> * broker is no longer able to borrow shares from other clients
> * investor does not maintain margins required on his/her margin account
> * **NOT** lender of the shares issues instructions to close out the position

> [!WARNING]- What should a trader do when the one-year forward price of an asset is too low? Assume 0 income generating.
> ->  Sell/short the asset
-> Invest the proceeds of the short sale at the risk-free rate
-> enter into a long forward contract to buy the asset in one year

>Forward contracts are LESS liquid than futures contracts

> [!example] Keynes and Hicks?
> If hedgers hold long positions and speculators holds short positions, the futures price will tend to be higher than expected future spot prices (or vice versa - see notes)

> [!example]- Contango
> The futures price is above the expected future spot price
> -> In other words, the futures price is trading at a premium to the expected future spot price. This condition is often associated with the normal upward-sloping shape of the futures curve.
> Potential causes:
> * **Cost of carry**: Contango can result from the cost of carry, which includes expenses such as storage costs, insurance, and financing charges. These costs are reflected in the futures price.
> * **Supply and demand dynamics**: If there is excess supply or low demand for the commodity in the near term, the futures prices for future delivery may be higher than the expected spot price.*

> [!NOTE]- [x] The spot price of an investment asset is $30 and the risk-free rate for all maturities is 10% with continuous compounding. The asset provides an income of $2 at the end of the first year and at the end of the second year. What is the three-year forward price?
> 35.84

> [!NOTE]- [x] The spot price of an investment asset that provides no income is $30 and the risk-free rate for all maturities (with continuous compounding) is 10%. What is the three-year forward price?
> 40.50

> [!example]- Explain what happens when an investor shorts a certain share.
> * The investor’s broker borrows the shares from another client’s account and sells them in the usual way.
> * To close out the position, the investor must purchase the shares.
> * The broker then replaces them in the account of the client from whom they were borrowed.
> * The party with the short position must remit to the broker dividends and other income paid on the shares.
> * The broker transfers these funds to the account of the client from whom the shares were borrowed.
> * Occasionally the broker runs out of places from which to borrow the shares.
> * The investor is then **short squeezed** and has to close out the position immediately.

> [!example]- What is the difference between the forward price and the value of a forward contract?
> The **forward price** of an asset today is the price at which you would agree to buy or sell the asset at a future time.
>
> The **value of a forward contract** is zero 0 you first enter into it.
> * As time passes the underlying asset price changes and the value of the contract maybecome positive or negative.

> [!NOTE]- [x] Suppose that you enter into a six-month forward contract on a non-dividend-paying stock when the stock price is $30 and the risk-free interest rate (with continuous compounding) is 12% per annum. What is the forward price?
> ![[Pasted image 20240202203106.png]]

> [!NOTE]- [x] A stock index currently stands at 350. The risk-free interest rate is 8% per annum (with continuous compounding) and the dividend yield on the index is 4% per annum. What should the futures price for a four-month contract be?
> ![[Pasted image 20240202203141.png]]

> [!example]- Explain carefully why the futures price of gold can be calculated from its spot price and other observable variables whereas the futures price of copper cannot.
> **Gold is an investment asset**.
> * If the futures price is too high, investors will find it profitable to increase their holdings of gold and short futures contracts.
> * If the futures price is too low, they will find it profitable to decrease their holdings of gold and go long in the futures market.
>
> **Copper is a consumption asset**.
> * If the futures price is too high, a strategy of buy copper and short futures works.
> * However, because investors do not in general hold the asset, the strategy of sell copper and buy futures is not available to them. There is therefore **an upper bound, but no lower bound, to the futures price**.

> [!example]- Which of the following is true for a consumption commodity?
For consumption commodity, there is an **upper limit** to the futures price but **no lower limit**, except that the futures price cannot be negative.

> [!example]- Explain carefully the meaning of the terms convenience yield and cost of carry. What is the relationship between futures price, spot price, convenience yield, and cost of carry?
> **Convenience yield** measures the extent to which there are benefits obtained from ownership of the physical asset that are not obtained by owners of long futures contracts.
> The **cost of carry** is the interest cost plus storage cost less the income earned.
>
> The futures price, F0,and spot price, S0, are related by
> ![[Pasted image 20240202203439.png]]

> [!example]- Explain why a foreign currency can be treated as an asset providing a known yield.
>  A foreign currency provides a **known interest rate**, but the interest is **received in the foreign currency**. The value in the domestic currency of the income provided by the foreign currency is therefore known as a **% of the value of the foreign currency**.
>  => The income has the properties of a known yield.

> [!example]- Is the futures price of a stock index greater than or less than the expected future value of the index?
> **The futures price of a stock index is always < expected future value of the index**.
> * Index has positive systematic risk.
> * Argument 2: let u be the expected return required by investors on the index so that
>![[Pasted image 20240202203740.png]]
> Since (u > r) and
> 	![[Pasted image 20240202203813.png]]
> It follows that
> 	![[Pasted image 20240202203832.png]]

> [!danger]+ [x] A one-year long forward contract on a non-dividend-paying stock is entered into when the stock price is $40 and the risk-free rate of interest is 10% per annum with continuous compounding. (a) What are the forward price and the initial value of the forward contract? (b) Six months later, the price of the stock is $45 and the risk-free interest rate is still 10%. What are the forward price and the value of the forward contract?
> S = 40, r = 10%, no income
>
> a) F and Initial value
> - Initial value of forward contract = 0
> - Forward price F = 40 . e ^(10% . 1) = $ 44.21 ==Left 1st row==
>
> b) S(6) = 45, r = 10%
> - Delivery price K = forward price above = 44.21
> - S is now 45
> - Forward price F =  45 . e ^(10% . 0.5) = 47.31 ==Left 1st row==
> - Value of f contract = 45 - 44.21 . e ^(-10% . 0.5) = 2.95 ==Right 1st row==
>
>**INITIAL VALUE OF CONTRACT = 0! AFTER SOME TIME, THE FORWARD PRICE CALCULATED AT THE BEGINNING BECOMES K - THE DELIVERY PRICE.**

> [!NOTE]- [x] r = 0.07, dividend = 3.2% pa, current value of index = 150, T = 6 month. Futures price = ?
> **CURRENT VALUE OF INDEX = S**
> F = 150 . e ^ (0.07 - 0.032)0.5 = 152.88 ==left 3rd row==

> [!warning]- [x] r = 0.09, dividend varies throughout the yr: 2, 5, 8, 11 -> 0.05 pa; other 8 months -> 0.02 pa. Value of index on July 31 = 1300 (S); futures price of contract deliverable on Dec 31?
> a) Find avg yield
> August (0.05) -> Sep -> Oct -> Nov (0.05) -> Dec
> (0.05 x 2 + 0.02 x 3) / 5 = 0.032
>
> b) Futures price
> F = 1300 . e^(0.09 - 0.032).5/12 = 1331.80 ==left 3rd row==

> [!NOTE]- r = 0.1, dividend = 0.04, index = 400, futures price 4 months = 405. Arbitrage opportunity?
> S.e^(0.1 - 0.04).4/12 = 408.08 ==left 3rd row==
> The above is the THEORETICAL FUTURES PRICE.
>
> But actual F price = 405 -> F < Sert (index futures price is too low relative to index)
>
> **Arbitrage strategy**
> Time 0:
> 1. short/sell underlying the index (receive the current spot price of the index (+S - higher)
> 2. take a long position (buy) in futures contracts lock in the futures price (-F - lower)
>
> Time 1:
> Deliver -> since F < Sert, you can use the stocks obtained from the short position to cover the futures contract, making a profit.

![[Pasted image 20240114041907.png]]

> [!NOTE]- [x] Estimate the difference between short-term interest rates in Japan and the United States on August 4, 2009 from the information (the table is in the US so we don't need US, just Japan)
> 1. Look at settlement prices: Japan
> 1.0502 in Sep -> 1.0512 in Dec -> 0.09522 % increased over 3 months
> => indicates that short-term futures prices are increasing at a rate of about 0.09522% per 3 months
> => **Short term interest in Japan > US** by (0.09522% / 3\*12) = 0.38% per year

> **Short term interest rate differentials**
> If settlement price of country A INCREASED over time
> -> short term futures prices are INCREASING over time
> -> Country A interest rates IS LOWER THAN country B (US - home country)

![[Pasted image 20240127003145.png]]

> [!warning]- [x] 2 months = T, interest rates Switz = 0.02, interest rates US = 0.05, spot price of Switz franc = $0.8, futures contract price, deliverable in 2 months = $0.81. Arbitrage opportunity?
> 1. Theoretical futures price Se...
> = 0.8 . e^(0.05 - 0.02).2/12 = 0.8040
>
>2. Compare with actual futures price of 0.81 -> actual is too high (F > S)
>
>3. Arbitrage opportunity:
>	* Sell at F aka short/sell Swiss francs futures (lock in profit at F - higher)
>	* Buy Swiss francs at spot S (lower)
>	* At delivery, must deliver Swiss francs - you are getting a profit of F (higher)

> [!warning]- [x] Current price of silver S = 15 per ounce, storage cost = 0.24 / ounce pa payable quarterly in advance, interest rates = 10% pa, find futures price, T = 9 months
> **1. Find U (storage cost)**
>
> 0.24 pa, payable quarterly -> 0.06 per quarter
> Payable in advance quarterly ->
> * pay 1 now
> * 1 in 3 months
> * 1 in 6 months if delivery in 9 months
>
> We have to discount each to the present.
> * 0.06 (present)
> * 0.06 discount by 3 months - continuous compounding so / by (e^rt = e^10%.3/12)
> * 0.06 discount by 6 months - continuous compounding so / by (e^rt = e^10%.6/12)
>
> PV of storage costs U =
> 0.06 +
> 0.06 . e^-(10% . 3/12) +
> 0.06 . e^-(10% . 6/12)
> = 0.176
>
> **2. Find F**
> **F = (S + U) . e^(rT)**
> = (15 + 0.176) . e^(10% . 9/12)
> = 16.36

> [!example]- When a known future cash outflow in a foreign currency is hedged by a company using a forward contract, there is no foreign exchange risk. When it is hedged using futures contracts, the daily settlement process does leave the company exposed to some risk. Explain the nature of this risk. In particular, consider whether the company is better off using a futures contract or a forward contract when:
> (a) The value of the foreign currency falls rapidly during the life of the contract.
> (b) The value of the foreign currency rises rapidly during the life of the contract.
> (c) The value of the foreign currency first rises and then falls back to its initial value.
> (d) The value of the foreign currency first falls and then rises back to its initial value.
> Assume that the forward price equals the futures price.
> ---
> a)
In total the gain or loss under a futures contract is equal to the gain or loss under the corresponding forward contract. However the **timing of the cash flows is different**.
>* When the time value of money is taken into account a futures contract may prove to be > valuable or < valuable than a forward contract.
>* Ofc company does not know in advance which will work out better.
>* The long forward contract provides a **perfect hedge**.
>* The long futures contract provides a **slightly imperfect hedge**.
>
>b) all effects = slightly
>* (a) forward > - company will lose on hedge. If forward -> the loss will be realised at the end. If future -> loss will realise day by day.
>* (b) futures > - company will gain. If forward -> gain realised at the end. If future -> gain realised day by day. On PV basis, latter = preferable.
>* (c) futures > - positive CF early, negative CF later
>* (d) forward > cos if futures, negative CF early, later CF positive

> [!warning] Futures = formal, realise day by day; forwards = realise at the end

> [!example]- The forward exchange rate = unbiased predictor of the future exchange rate when ???
>  The exchange rate **has no systematic risk**. To have no systematic risk the exchange rate must be **uncorrelated** with the return on the market.

> [!example]- What is meant by (a) an investment asset and (b) a consumption asset. Why is the distinction between investment and consumption assets important in the determination of forward and futures prices?
> An **investment** asset is an asset held for investment by a significant number of people or companies.
> * The forward/futures price can be determined from the spot price for an investment asset.
>
> A **consumption** asset is an asset that is nearly always held to be consumed (either directly or in some sort of manufacturing process).
>* All that can be determined is an upper bound for the forward/futures price.

> [!example] What is the cost of carry for (a) a non-dividend-paying stock, (b) a stock index, (c) a commodity with storage costs, and (d) a foreign currency?
> a) the rfr
> b) the excess of the rfr over the dividend yield
> c) the rfr plus the storage cost
> d) the excess of the domestic risk-free rate over the foreign rfr

> [!example]- (1) Explain carefully what is meant by the expected price of a commodity on a particular future date. (2) Suppose that the futures price of crude oil declines with the maturity of the contract at the rate of 2% per year. Assume that speculators tend to be short crude oil futures and hedgers tended to be long crude oil futures. What does the Keynes and Hicks argument imply about the expected future price of oil?
>(1) The expected future price refers to the anticipated price of a commodity on a specific future date
>
>(2) Keynes and Hicks argue that speculators on average **make money from commodity futures trading and hedgers on average lose money from commodity futures trading**.
>* If speculators tend to have short positions in crude oil futures, the Keynes and Hicks argument implies that futures prices overstate expected future spot prices.
>* If crude oil futures prices decline at 2% per year the Keynes and Hicks argument therefore implies an even faster decline for the expected price of crude oil if speculators are short.






## Chapter 9. Option

> [!example] A corporate treasurer is designing a hedging program involving foreign currency options. What are the pros and cons of using (a) the NASDAQ OMX and (b) the over-the-counter market for trading?
> The NASDAQ OMX offers options with standard strike prices and times to maturity. Options in the over-the-counter market have the advantage that they can be tailored to meet the precise needs of the treasurer. Their disadvantage is that they expose the treasurer to some credit risk. Exchanges organize their trading so that there is virtually no credit risk.

> [!example] Explain why the market maker’s bid-offer spread represents a real cost to options investors.
> A “fair” price for the option can reasonably be assumed to be half way between the bid and the offer price quoted by a market maker. An investor typically buys at the market maker’s offer and sells at the market maker’s bid. Each time he or she does this there is a hidden cost equal to half the bid-offer spread.

> [!example] “If a company does not do better than its competitors but the stock market goes up, executives do very well from their stock options. This makes no sense” Discuss this viewpoint. Can you think of alternatives to the usual executive stock option plan that take the viewpoint into account.
> Executive stock option plans account for a high percentage of the total remuneration received by executives. When the market is rising fast (as it was for much of the 1990s) many corporate executives do very well out of their stock option plans — even when their company does worse than its competitors. Large institutional investors have argued that executive stock options should be structured so that the payoff depends how the company has performed relative to an appropriate industry index. In a regular executive stock option the strike price is the stock price at the time the option is issued. In the type of relative performance stock option favored by institutional investors, the strike price at time t is S I I  where 0 S is the company’s stock price at the time the option is issued, 0 I is the value of an equity index for the industry in which the company operates at the time the option is issued, and t I is the value of the index at time t . If the company’s performance equals the performance of the industry, the options are always at-the-money. If the company outperforms the industry, the options become in the money. If the company underperforms the industry, the options become out of the money. Note that a relative performance stock option can provide a payoff when both the market and the company’s stock price decline. Relative performance stock options clearly provide a better way of rewarding senior management for superior performance. Some companies have argued that, if they introduce relative performance options when their competitors do not, they will lose some of their top management talent.


> [!warning] 9.11 | Describe the terminal value of the following portfolio: a newly entered-into long forward contract on an asset and a long position in a European put option on the asset with the same maturity as the forward contract and a strike price that is equal to the forward price of the asset at the time the portfolio is set up. Show that the European put option has the same value as a European call option with the same strike price and maturity.
> The terminal value of the long forward contract is: ST - F0
> * T = price of asset at maturity
> * F0 = forward price of asset at time portfolio is set up
> * F0 = delivery price in the forward contract
>
> Terminal value of put option: max(F0 - ST 0)
> Terminal value of portfolio: ST - F0 + max(F0 - ST, 0)
> = max(0, ST - F0]
> ![[Pasted image 20240425001345.png]]
> We have shown that the forward contract plus the put is worth the same as a call with the same strike price and time to maturity as the put. **The forward contract is worth zero at the time the portfolio is set up. It follows that the put is worth the same as the call at the time the portfolio is set up.**

> [!danger] Option contracts
> ![[Pasted image 20240425002017.png]]

> [!example] 9.18 - “If most of the call options on a stock are in the money, it is likely that the stock price has risen rapidly in the last few months.” Discuss this statement.
> The exchange has certain rules governing when trading in a new option is initiated. These mean that the option is close-to-the-money when it is first traded. If all call options are in the money it is therefore likely that the stock price has risen since trading in the option began.

> [!example] What is the effect of an unexpected cash dividend on (a) a call option price and (b) a put option price?
> An unexpected cash dividend would reduce the stock price on the ex-dividend date. This stock price reduction would not be anticipated by option holders. As a result there would be a reduction in the value of a call option and an increase the value of a put option. (Note that the terms of an option are adjusted for cash dividends only in exceptional circumstances.)

## Chapter 10. Valuation of options

> [!NOTE]- [X] T = 4 months, call, 0 dividend, stock price S = 28, strike K = 25, rfr = 8% pa.
> 28 - 25 . e^(-8% . 4/12) = 3.66

> [!NOTE]- [x] What is a lower bound for the price of a one-month European put option on a non dividend-paying stock when the stock price is $12, the strike price is $15, and the risk free interest rate is 6% per annum?
>2.93

> [!example]- Explain why an American call option on a dividend-paying stock is always worth at least as much as its intrinsic value. Is the same true of a European call option?
The intrinsic value of an American call option on a dividend-paying stock is always equal to or greater than its European counterpart due to the option's exercise flexibility. An American call option can be exercised at any time, allowing the holder to capture dividends immediately. Therefore, its value is at least the intrinsic value.
>

In contrast, a European call option, exercisable only at expiration, may miss out on capturing dividends before maturity. For instance, if a stock is anticipated to pay a substantial dividend during the option's life, the European option's value might be less than its intrinsic value before the dividend is distributed. Thus, the flexibility to exercise early grants the American call option an inherent advantage in capturing dividend-related gains, ensuring its minimum value aligns with its intrinsic value

> [!NOTE]- [x] The price of a non-dividend paying stock is $19 and the price of a three-month European call option on the stock with a strike price of $20 is $1. The risk-free rate is 4% per annum. What is the price of a three-month European put option with a strike price of $20?
> From put-call parity:
> put price **p** = call price **c** + strike **K** . **e^(-rT)** - stock price **S0**
> = 1 + 20e^(-0.04 x 0.25) - 19
> = 1.80

> [!NOTE]- [x] Call price c = 3, K = 30, put price p = 1, rfr = 10%, T = 3/12, share price S = 31. Arbitrage ???
> From put-call parity:
> * LHS (portfolio of call & bond) = c + Ke-rt = 3 + 30.e^(-0.1\*3/12) = 32.26
> * RHS (portfolio of put & share) = p + S0 = 1 + 31 = 32
> => LHS is overpriced relative to RHS
>
> Arbitrage strategy: **buy RHS (put & share), sell LHS (call & bond)**
> 1. Sell call
> 2. Buy both put & share/stock

> [!example] Explain why the arguments leading to put–call parity for European options cannot be used to give a similar result for American options.
> Short answer: the LHS doesnt necessarily = RHS
> ![[Pasted image 20240216183322.png]]
>
> In the absence of early exercise, the put-call parity for European options rests on the premise that portfolios of equivalent values at expiration should also share this equality at earlier times. However, when early exercise is a possibility, the argument loses its validity. Consider the case where P > S - CKe^(-rT).
>
> Despite this condition, no arbitrage opportunity emerges. If one buys the call, shorts the put, and shorts the stock, the uncertainty of when the put will be exercised introduces ambiguity in the outcome. The flexibility of early exercise in American options diverges from the straightforward application of European put-call parity.

> [!NOTE]- [x] What is a lower bound for the price of a six-month call option on a non-dividend-paying stock when the stock price is $80, the strike price is $75, and the risk-free interest rate is 10% per annum?
>8.66

> [!NOTE]- [x] What is a lower bound for the price of a two-month European put option on a non dividend-paying stock when the stock price is $58, the strike price is $65, and the risk free interest rate is 5% per annum?
> 6.46

> [!warning] In exercises just describe the arbitrage opportunity & mention borrowed / invested & thats it. no need to update what happens to those amount at T1. They are not counted in profit calc. Convert all to PV for profits.

> [!NOTE]- [x] A one-month European put option on a non-dividend-paying stock is currently selling for 2.5 . The stock price is $47, the strike price is $50, and the risk-free interest rate is 6% per annum. What opportunities are there for an arbitrageur? (hint: no call mentioned -> no trading calls at all)
> PV of strike price
> * 50 . e(-0.06 x 1/12) = 49.75
>

![[Pasted image 20240216164152.png]]

![[Pasted image 20240216164119.png]]

If the above are violated -> arbitrage:

>
>Since P </= Ke-rt - S0 (**2.5 </= 49.75 - 47**), the condition in the second equation above is violated -> aritrage opportunity.
>
>LHS (call & bond) = C + Ke(-rt) = C + 49.75
> RHS (put & share) = P + S = 2.5 + 47 = 49.5
>
>Strategy: buy LHS
>Time T0:
>* Buy a put **(-2.5)**
>* Buy a share **(-47)**
>* Borrow 47 + 2.5 = 49.5 at 6% for 1 month **(+49.5)**
>
>Time T1:
>* If spot > strike of 50:
>	* put expires worthlessly
>	* sell share for at least spot price of 50 **(+ ≥ 50)**
>	* => PV of 50 -> 49.75 -> **profit: at least 0.25 in PV terms** (minus the amount borrowed at PV: 49.5)
>* If spot < strike of 50:
>	* exercise put, sell share for strike of 50 **(+ 50)**
>	* => PV of 50 -> 49.75 -> **profit: 0.25 in PV terms** (minus the amount borrowed at PV: 49.5)

> [!NOTE]- [x] Call option price C = 5 | Stock price S0 = 64 | Strike K = 60 | Dividend = 0.8 expected in 1 month| T = 1/3 | rfr = 0.12
> **1. Proving that arbitrage opportunity exists**
> ![[Pasted image 20240216164152.png]]
![[Pasted image 20240216181106.png]]
> 5 >/= 64 - 0.8 e ^(-0.12\*1/3) - 60.e^(-0.12\*1/3)
> 5 >/= 5.58 **=> FALSE** -> arbitrage
>
>**2. Decide what to short/buy** (don't have to show this)
>put call parity LHS = call + bond = 5
>put call parity RHS = put + share = 0 + 64
>-> RHS is overpriced -> sell RHS, buy LHS
>**Arbitrageur should sell the share (no put) & buy the call option**
>
>**3. Profit** (convert all to PV)
>Short sell share: **+64**
>Buy call option to buy at 60: **-5**
>Invest above for 4 months: **-59**
>* If spot < strike of 60:
>	* call expires worthlessly
>	* dividend that must pay: **-0.79** (PV)
>	* deliver the share/close out short position: **-57.65 or less** (PV of 60 **or less** cos you lose the spot amount at T0)
>	* **=> gain: +64 (short share) - 0.79 (dividend pay out) - 57.65 (close short position) = 5.56** (in PV terms)
>	* **=> profit: 5.56 - 5 (cost of call) = 0.56** (at least)
>* If spot > strike of 60:
>	* exercise call, buy share at strike: **-60**
>	* dividend: **-0.79**
>	* close out short position: **+57.65** (PV of 60)
>	* **=> gain: 64 - 0.79 - 57.65 = 5.56**
>	* **=> profit: 5.56 - 5 = 0.56** (exact)

> [!NOTE]- [x] Euro call, T = 6/12, strike K = 30, call premium C = 2, stock price S = 29. dividend = 0.5 in 2 months & 5 months, rfr = 0.1
> **Part 1. What is P? (T, strike = same)**
> ![[Pasted image 20240216183651.png]]
> p = ![[Pasted image 20240216183715.png]]
>
>**Part 2. Arbitrage if put price P = 3**
>LHS = call + bond = 2 + 0.5 (convert to PV) + 30 (convert to PV) = 28.54
>RHS = put + share = 3 + 29 = 32
>=> sell RHS (put & share), buy call
>
>Arbitrage:
>Time 1:
>* short share, gain 29
>* short put, sell option to sell, gain 3
>* buy call, buy option to buy, lose 2
>* **invest 30 above at rfr for 6/12 year**
>
>Time 0:
>* if spot S > K:
>	* exercise call, buy share at strike: lose 30 -> **-28.54** PV
>	* close out the short position on the share
>	* must pay out dividend: **-0.97** PV
>	* put holder will let put expires worthlessly
>	* **profit: 30 - 28.54 - 0.97 = 0.49**
>* if spot S < K:
>	* holder will exercise put, i must buy share at strike: lose 30 -> **-28.54** PV
>	* call expires worthlessly
>	* deliver share, close out short position
>	* dividend: **-0.97** PV
>	* **profit: 30 - 28.54 - 0.97 = 0.49**

> [!NOTE]- US call | no dividend | call premium C = 4 | stock S = 31 | strike = 30 | T = 3/12 | rfr = 0.08. Part 1. Derive upper & lower bounds for US put, same strike K, same T. Part 2. Explain carefully the arbitrage opportunities in Problem 10.16 if the American put price is greater than the calculated upper bound.
> **Part 1**
> ![[Pasted image 20240216185509.png]]
> 31 - 30 <= 4 - P <= 31 - 30e^(-0.08x3/12)
> 1 <= 4 - P <= 1.59
> 2.41 <= P <= 3
> **=> Upper bound: 2.14**
> **=> Lower bound: 3**
>
**Part 2**
>Put is over priced -> RHS overpriced -> sell put & (short) share, buy call
>1. Amount realised / CF:
>* Sell put: +3
>* Sell share: +29
>* Buy call: - 2
>	* => CF: 30 at least, which can be reinvested at the rfr
>2. At some stage, either the put / call will be exercised
>3. At future time CF will be -30
>4. Since +30 at T0, -30 at T1, **CF PV will be positive -> profit**

> [!example]- Consider a five-year call option on a non-dividend-paying stock granted to employees. The option can be exercised at any time after the end of the first year. Unlike a regular exchange-traded call option, the employee stock option cannot be sold. What is the likely impact of this restriction on the early exercise?
> An employee stock option may be exercised early because the employee needs cash or because he or she is uncertain about the company’s future prospects.
> * Regular call options can be sold in the market in either of these two situations, but **employee stock options cannot be sold**.
> * In theory an employee can short the company’s stock as an alternative to exercising.
> * In practice this is not usually encouraged and may even be illegal for senior managers.



## Chapter 12. Binomial tree pricing

> [!example]- 12.8 | Consider the situation in which stock price movements during the life of a European option are governed by a two-step binomial tree. Explain why it is not possible to set up a position in the stock and the option that remains riskless for the whole of the life of the option.
> The riskless portfolio consists of a short position in the option and a long position in Δ shares. Because Δ changes during the life of the option, this riskless portfolio must also change.

> [!NOTE]- 12.9 | A stock price is currently $50. It is known that at the end of two months it will be either $53 or $48. The risk-free interest rate is 10% per annum with continuous compounding. What is the value of a two-month European call option with a strike price of $49? Use no-arbitrage arguments.
> ![[Pasted image 20240329000932.png]]
> **LONG WAY**
> 50 -> 53 or 48 => **option will be 4**(53 - strike 49) **or 0**(48 - strike 49).
> Consider portfolio of: long/buy Δ shares & short/sell 1 call option
> * If price goes to 53, value of portfolio is 53Δ - 4
> * If price goes to 48, value is 48Δ - 0
>
> Equating the two scenarios, solve for Δ: Δ = 0.8
> Thus value of portfolio is certain to be 48 . 0.8 = 38.4. For this value of Δ the portfolios is therefore **riskless**.
>
> Current value of portfolio:
> Δ (number of shares) . 50 (current stock price) - f (value of option)
> Since it earns interest (continuous compounding) over time period to get to 38.4:
> (Δ . 50 - f).e^(0.10 * 2/12) = 38.4
> Solving for f: f = 2.23
>
**SHORT WAY**
>![[Pasted image 20240304012806.png]]
>![[Pasted image 20240304012856.png]]
>S (50) moves down to Sd (48), aka d = 0.96
>S (50) moves up to Su (53), aka u = 1.06
>p nume = e^(0.10 \* 2/12) - 0.96
>p deno = 1.06 - 0.96
>p = 0.5681
>f = e^(-0.10 * 2/12) x p x value of option = 2.23

> [!NOTE]- 12.10 | A stock price is currently $80. It is known that at the end of four months it will be either $75 or $85. The risk-free interest rate is 5% per annum with continuous compounding. What is the value of a four-month European put option with a strike price of $80? Use no-arbitrage arguments.
> S = 80 -> 75 or 85
> ![[Pasted image 20240329001626.png]]

> [!NOTE]- 12.12 | A stock price is currently $50. Over each of the next two three-month periods it is expected to go up by 6% or down by 5%. The risk-free interest rate is 5% per annum with continuous compounding. What is the value of a six-month European call option with a strike price of $51?
> ![[Pasted image 20240304175358.png]]
> ![[Pasted image 20240304175406.png]]
>
> **For the situation considered in Problem 12.12, what is the value of a six-month European put option with a strike price of $51? Verify that the European call and European put prices satisfy put–call parity. If the put option were American, would it ever be optimal to exercise it early at any of the nodes on the tree?**
> a) Value of the option
> ![[Pasted image 20240304175703.png]]
>
> b) Verifying the put call parity
> * Value of call + PV of cash (strike price) (RHS)
> 1.635 + 51.e^(-5% . 6/12) = 51.376
> * Value put + share (LHS)
> 1.376 (final f) + 50 (current share price) = 51.376
>

c) Test whether it is worth exercising the option early:

Payoff of option  from immediate exercise at step 1:

> * Down: strike 51 - share price 47.5 = 3.5 -> should exercise early
> * Up: 51 - 53 = -2 -> should'nt exercise early

> [!NOTE]- 12.13 | For the situation considered in Problem 12.12, what is the value of a six-month European put option with a strike price of $51? Verify that the European call and European put prices satisfy put–call parity. If the put option were American, would it ever be optimal to exercise it early at any of the nodes on the tree?
>

> [!warning]- 12.14 | A stock price is currently $25. It is known that at the end of two months it will be either $23 or $27. The risk-free interest rate is 10% per annum with continuous compounding. Suppose ST is the stock price at the end of two months. What is the value of a derivative that pays off ST^2 at this time?
> Current share price = 25
> Time = 2/12
> Future price: up = 27, down = 23
> rfr = 10%
>
> **LONG WAY**
> 1. No call or put -> assume +Δ shares, -1 derivative/option
> 2. Pays of ST2 means option's worth is 23^2 = 529 or 27^2 = 729
> 3. Value of portfolio
> Either 27Δ - 729
> Or 23Δ - 529
> Solving for Δ = 50
> 4. PV value of portfolio: 50 * 25 - f
> 5. Portfolio must earn rfr interest (50 \* 25 - f)e^(10% * 2/12) = 27\*50 - 729
> Solving for f = 639.26
>
> **SHORT WAY**
> p = (e^rt - d) / (u - d)
> f = e^(-rt) . \[p . value of deri if up + (1-p) . value of deri if down]
> = e^(-0.1 * 2/12)(0.6050 x 729 + 0.3950 x 529) = 639.3

> [!note]- [x] 12.20 | Consider a European call option on a non-dividend-paying stock where the stock price is $40, the strike price is $40, the risk-free rate is 4% per annum, the volatility is 30% per annum, and the time to maturity is six months. a. Calculate u, d, and p for a two step tree b. Value the option using a two step tree. c. Verify that DerivaGem gives the same answer d. Use DerivaGem to value the option with 5, 50, 100, and 500 time steps.
> ![[Pasted image 20240330143859.png]]
> ![[Pasted image 20240330143913.png]]
> ![[Pasted image 20240330143827.png]]

## Chapter 13. Black-Scholes-Merton pricing model

> [!NOTE]- 13.8. A stock price is currently $40. Assume that the expected return from the stock is 15% and its volatility is 25%. What is the probability distribution for the rate of return (with continuous compounding) earned over a one-year period?
mu = 0.15, sigma = 0.25
prob distribution
> * expected value of return = 0.15 - 0.25^2 / 2 = 0.11875 p.a
> * SD = 0.25 p.a

> [!NOTE]- 13.9. A stock price has an expected return of 16% and a volatility of 35%. The current price is $38.   |  (a) What is the probability that a European call option on the stock with an exercise price of $40 and a maturity date in six months will be exercised?  |  (b) What is the probability that a European put option on the stock with the same exercise price and maturity will be exercised?
> a) Find N(d2) = 04969 / 0.4968
> b)

> [!example]- What does the Black–Scholes–Merton stock option pricing model assume about the probability distribution of the stock price in one year? What does it assume about the probability distribution of the continuously compounded rate of return on the stock during the year?
> * The Black–Scholes–Merton option pricing model assumes that the **probability distribution of the stock price** in one year (or at any other future time) is **lognormal**.
> * Equivalently, it assumes that the continuously compounded **rate of return** on the stock is **normally** distributed.

> [!NOTE]- The volatility of a stock price is 30% per annum. What is the standard deviation of the percentage price change in one trading day?
> * **σ = 30%** = volatility
> * Assuming **252 trading days** per year, **Δt = 1/252**
> * Prob dist of RATE OF RETURN = **σ√Δt = 30% . √1/252** = 1.9%

> [!example]- Explain how risk-neutral valuation could be used to derive the Black–Scholes–Merton formulas.
Assuming that the expected return from the stock is the risk-free rate, we calculate the expected payoff from a call option. We then discount this payoff from the end of the life of the option to the beginning at the risk-free interest rate.

> [!NOTE]- Calculate the price of a three-month European put option on a non-dividend-paying stock with a strike price of $50 when the current stock price is $50, the risk-free interest rate is 10% per annum, and the volatility is 30% per annum.
p = 2.38

> [!example] What is Black’s approximation for valuing an American call option on a dividend paying stock?
> In Black’s approximation, we calculate the price of a European call option expiring at the same time as the American call option and the price of a European call option expiring just before the final ex-dividend date. We set the American call option price equal to the greater of the two.

> [!example]- 13.10. Prove that, with the notation in the chapter, a 95% confidence interval for ST is between ...
![[Pasted image 20240306213029.png]]

> [!example]- A portfolio manager announces that the average of the returns realized in each of the last 10 years is 20% per annum. In what respect is this statement misleading?
This problem relates to the material in Section 13.2. The statement is misleading in that a certain sum of money, say $1000, when invested for 10 years in the fund would have realized a return (with annual compounding) of less than 20% per annum.
>

The **average of the returns realized in each year** is **always greater than** the **return per annum (with annual compounding) realized over 10 years**. The first is an **arithmetic** average of the returns in each year; the second is a geometric **average** of these returns.

> [!danger]- Assume that a non-dividend-paying stock has an expected return of mu and a volatility of sigma. An innovative financial institution has just announced that it will trade a derivative that pays off a dollar amount equal to ![[Pasted image 20240306213611.png]] at time T. The variables 0 S and T S denote the values of the stock price at time zero and time T.
> **a) Describe the payoff from this derivative.**
> **b) Use risk-neutral valuation to calculate the price of the derivative at time zero.**
> a) The derivative will pay off a dollar amount equal to the continuously compounded return on the security between times 0 and T.
>
> b) The expected value of ln (ST / S0) is, from equation (13.4), (mu - SD^2 / 2)T. The expected payoff from the derivative is therefore mu - SD^2/2. In a risk-neutral world this becomes r - SD^2 / 2. The value of the derivative at time zero is therefore:
 ![[Pasted image 20240306214430.png]]

> [!NOTE]- What is the price of a European call option on a non-dividend-paying stock when the stock price is $52, the strike price is $50, the risk-free interest rate is 12% per annum, the volatility is 30% per annum, and the time to maturity is three months?
> S = 52, K = 50, r = 12%, sigma = 30%, T = 3/12
> ANS: 5.06

> [!NOTE]- 13.14 | What is the price of a European put option on a non-dividend-paying stock when the stock price is $69, the strike price is $70, the risk-free interest rate is 5% per annum, the volatility is 35% per annum, and the time to maturity is six months?
> ![[Pasted image 20240328231309.png]]

> [!NOTE]- 13.15 | Call = 2.5, stock price = 15, price = 2.50, strike = 13, T = 3/12, rfr = 5%. Implied volatility?
>  ![[Pasted image 20240328231939.png]]
>  Goal seek -> 40%

> [!NOTE]- 13.16 | Show that the Black–Scholes–Merton formula for a call option gives a price that tends to maxðS0 K; 0Þ as T !0.
> ![[Pasted image 20240328232055.png]]

> [!NOTE]- 13.17 | Explain carefully why Black’s approach to evaluating an American call option on a dividend-paying stock may give an approximate answer even when only one dividend is anticipated. Does the answer given by Black’s approach understate or overstate the true option value? Explain your answer.
Black’s approach in effect assumes that the holder of option must decide at time zero whether it is a European option maturing at time n t (the final ex-dividend date) or a European option maturing at time T. In fact the holder of the option has more flexibility than this. The holder can choose to exercise at time n t if the stock price at that time is above some level but not otherwise. Furthermore, if the option is not exercised at time n t , it can still be exercised at time T.
>

It appears that Black’s approach should understate the true option value. This is because the holder of the option has more alternative strategies for deciding when to exercise the option than the two strategies implicitly assumed by the approach. These alternative strategies add value to the option.

>

However, this is not the whole story. The standard approach to valuing either an American or a European option on a stock paying a single dividend applies the volatility to the stock price less the present value of the dividend. (The procedure for valuing an American option is explained in Chapter 18.) Black’s approach when considering exercise just prior to the dividend date applies the volatility to the stock price itself. Black’s approach therefore assumes more stock price variability than the standard approach in some of its calculations. In some circumstances it can give a higher price than the standard approach.

> [!NOTE]- [x] 13.18 | Consider an American call option on a stock. The stock price is $70, the time to maturity is eight months, the risk-free rate of interest is 10% per annum, the exercise price is $65, and the volatility is 32%. A dividend of $1 is expected after three months and again after six months. Use the results in the appendix to show that it can never be optimal to exercise the option on either of the two dividend dates. Use DerivaGem to calculate the price of the option.
> ![[Pasted image 20240328232754.png]]
> ![[Pasted image 20240328232818.png]]

> [!example]- 13.20 | Show that the Black–Scholes–Merton formulas for call and put options satisfy put–call parity.
> ![[Pasted image 20240328233515.png]]

> [!example]- 13.21 | Show that the probability that a European call option will be exercised in a risk-neutral world is, with the notation introduced in this chapter, Nðd2Þ. What is an expression for the value of a derivative that pays off $100 if the price of a stock at time T is greater than K?
> ![[Pasted image 20240328233625.png]]
 ![[Pasted image 20240328233601.png]]
 ![[Pasted image 20240328233608.png]]

## Chapter 4. Interest rates, bond yields

> [!example]- 4.1 | What is meant by LIBOR and LIBID. Which is higher?
> LIBOR is the London Interbank Offered Rate. It is the rate a bank quotes for deposits it is prepared to place with other banks. LIBID is the London Interbank Bid Rate. It is the rate a bank quotes for deposits from other banks. LIBOR is greater than LIBID.

> [!NOTE]- 4.3 | The six-month and one-year zero rates are both 10% per annum. For a bond that has a life of 18 months and pays a coupon of 8% per annum semiannually (with a coupon payment having just been made), the yield is 10.4% per annum. What is the bond’s price? What is the 18-month zero rate? Face = 100. All rates are quoted with semiannual compounding.
> 0. **Convert pa rate to semi: 5.2%**
> 1. Current price (right after a coupon pmt): **discount all pmt by semi yield 10.4%**
> * 4 / 1.052 + 4 / 1.052^2 + 104 / 1.052^3 = 96.74
> * Three payments cos 18 months, 1 pmt = 6 month / semiannual
>
> 2. To find 18-month zero rate, let it be R. For the 6 month & 12 month rate -> replace yield with the zero rates (both 10% p.a. -> 5% semi).
> * 4 / 6 month 0 rate + 4 / 12 month 0 rate + 104 / 18 month 0 rate or R
> * **NOTE THAT R IS CURRENTLY A PER ANNUM RATE!**
> * 4 / 1.05 + 4 / 1.05^2 + 4 / (1 + R/2)^3 = 96.74
> * Goal seek -> R = 10.42%

> [!NOTE]- 4.5 | Assuming that zero rates are as in Problem 4.5, what is the value of an FRA that enables the holder to earn 9.5% for a three-month period starting in one year on a principal of $1,000,000? The interest rate is expressed with quarterly compounding.

> [!example]- 4.7 | The term structure of interest rates is upward sloping. Put the following in order of magnitude:
> **a. The five-year zero rate**
> **b. The yield on a five-year coupon-bearing bond**
> **c. The forward rate corresponding to the period between 4.75 and 5 years in the future**
>
>Upward sloping term structure = normal yield curve -> **long term interest rates > short term interest rates** = usually healthy bc
>* expectations of econ expansion
>* expectations of rising inflation
>

When the term structure is upward sloping, smallest = b -> a -> c

> * b = yield, coupon bond = smallest
> 	* A coupon-bearing bond pays periodic interest payments (coupons) to its holders.
> 	* These coupon payments reduce the effective yield of the bond compared to its yield if it were a zero-coupon bond (**no coupon = higher yield than coupon**)
> 	* In contrast, the forward rate (c) and the five-year zero rate (a) represent yields on zero-coupon bonds, which do not pay coupons.
> * a = yield, no coupon bond = middle
> 	* theoretical zero-coupon bond that matures in five years, meaning it pays no coupons and is redeemed at face value at maturity.
> 	* < c - five-year zero rate cos current rate = typically lower than the forward rate because it represents the market expectation (upward slope)
> 	* > b cos b has coupon so lower yield
> * c = forward rate = greatest
> 	* The forward rate represents the market's expectation of the interest rate for a specific future period.
> 	* In an upward-sloping yield curve, investors anticipate that interest rates will rise over time.
> 	* Therefore, the forward rate, which represents a future rate, is expected to be higher than the current rates (both the five-year zero rate and the yield on a five-year coupon-bearing bond).
>
**What is the answer to this question when the term structure of interest rates is downward sloping?**
When it is downward sloping, c -> a -> b (smallest to largest)

> [!NOTE]- 4.8 | The cash prices of six-month and one-year Treasury bills are 94.0 and 89.0. A 1.5-year bond that will pay coupons of $4 every six months currently sells for $94.84. A two-year bond that will pay coupons of $5 every six months currently sells for $97.12. Calculate the six-month, one-year, 1.5-year, and two-year zero rates.
>![[Pasted image 20240329063748.png]]
>
> ![[Pasted image 20240329062859.png]]

> [!NOTE]- 4.10 | A deposit account pays 12% per annum with continuous compounding, but interest is actually paid quarterly. How much interest will be paid each quarter on a $10,000 deposit?
> 1. Convert cont rate to equivalent quarterly rate
> 2. Cos rate is pa, find interest per annum (amount * rate) then divide by 4
> ![[Pasted image 20240329064313.png]]
>

> [!NOTE]- 4.11 | Suppose that 6-month, 12-month, 18-month, 24-month, and 30-month zero rates con tinuously compounded are 4%, 4.2%, 4.4%, 4.6%, and 4.8% per annum, respectively. Estimate the cash price of a bond with a face value of 100 that will mature in 30 months pays a coupon of 4% per annum semiannually.
> ![[Pasted image 20240329065120.png]]
![[Pasted image 20240329065145.png]]

> [!NOTE]- 4.12 | A three-year bond provides a coupon of 8% semiannually and has a cash price of 104. What is the bond’s yield?
> ![[Pasted image 20240329070140.png]]
![[Pasted image 20240329070202.png]]

> [!NOTE]- 4.13 | Suppose that the 6-month, 12-month, 18-month, and 24-month zero rates are 5%, 6%, 6.5%, and 7%, respectively. What is the two-year par yield?
> Par yield = the coupon rate p.a. of a bond with price / value = 100
![[Pasted image 20240329070933.png]]

**4.15** WHY? 4.10 VS 4.9 EQUATION??
![[Pasted image 20240329071956.png]]

> [!warning] 4.16 | A 10-year 8% coupon bond currently sells for $90. A 10-year 4% coupon bond currently sells for $80. What is the 10-year zero rate? (Hint: Consider taking a long position in two of the 4% coupon bonds and a short position in one of the 8% coupon bonds.)
> Taking a long position in two of the 4% coupon bonds and a short position in one of the 8% coupon bonds leads to the following cash flows:
> * Year 0: 90 - 2\*80 = -70
> * Year 10: 200 - 100 = 100
> because the coupons cancel out. $100 in 10 years time is equivalent to $70 today. The 10 year rate, R, (continuously compounded) is therefore given by
> ![[Pasted image 20240329072752.png]]

> [!example]- Explain carefully why liquidity preference theory is consistent with the observation that the term structure of interest rates tends to be upward sloping more often than it is downward sloping.
If long-term rates were simply a reflection of expected future short-term rates, we would expect the term structure to be downward sloping as often as it is upward sloping. (This is based on the assumption that half of the time investors expect rates to increase and half of the time investors expect rates to decrease). Liquidity preference theory argues that long term rates are high relative to expected future short-term rates. This means that the term structure should be upward sloping more often than it is downward sloping.

> [!example]- ‘‘When the zero curve is upward sloping, the zero rate for a particular maturity is greater than the par yield for that maturity. When the zero curve is downward sloping, the reverse is true.’’ Explain why this is so.
> The par yield is the yield on a coupon-bearing bond. The zero rate is the yield on a zero coupon bond. When the yield curve is upward sloping, the yield on an N-year coupon bearing bond is less than the yield on an N-year zero-coupon bond. This is because the coupons are discounted at a lower rate than the N-year rate and drag the yield down below this rate. Similarly, when the yield curve is downward sloping, the yield on an N-year coupon bearing bond is higher than the yield on an N-year zero-coupon bond.

> [!example]- Why are U.S. Treasury rates significantly lower than other rates that are close to risk free?
There are 3 reasons
>1. Treasury bills and Treasury bonds must be purchased by financial institutions to fulfill a variety of regulatory requirements. This increases demand for these Treasury instruments driving the price up and the yield down.
>2. The amount of capital a bank is required to hold to support an investment in Treasury bills and bonds is substantially smaller than the capital required to support a similar investment in other very-low-risk instruments.
>3. In the United States, Treasury instruments are given a favorable tax treatment compared with most other fixed-income investments because they are not taxed at the state level.

> [!example]- Why does a loan in the repo market involve very little credit risk? / Explain how a repo agreement works and why it involves very little risk for the lender.
A repo is a contract where an investment dealer who owns securities agrees to sell them to another company now and buy them back later at a slightly higher price. The other company is providing a loan to the investment dealer. This loan involves very little credit risk. If the borrower does not honor the agreement, the lending company simply keeps the securities. If the lending company does not keep to its side of the agreement, the original owner of the securities keeps the cash.

> [!example]- Explain why an FRA is equivalent to the exchange of a floating rate of interest for a fixed rate of interest?
A FRA is an agreement that a certain specified interest rate, RK , will apply to a certain principal, L , for a certain specified future time period. Suppose that the rate observed in the market for the future time period at the beginning of the time period proves to be M R . If the FRA is an agreement that K R will apply when the principal is invested, the holder of the FRA can borrow the principal at M R and then invest it at K R . The net cash flow at the end of the period is then an inflow of K RL and an outflow of M K R L. If the FRA is an agreement that R will apply when the principal is borrowed, the holder of the FRA can invest the borrowed principal at M R . The net cash flow at the end of the period is then an inflow of M outflow of K R L and an RL. In either case we see that the FRA involves the exchange of a fixed rate of interest on the principal of L for a floating rate of interest on the principal.
![[Pasted image 20240329072440.png]]

> [!NOTE]- “An interest rate swap where six-month LIBOR is exchanged for a fixed rate 5% on a principal of $100 million is a portfolio of FRAs.” Explain.
> Each exchange of payments is an FRA where interest at 5% is exchanged for interest at LIBOR on a principal of $100 million. Interest rate swaps are discussed further in Chapter 7.
## Chapter 3. Hedging & basis risk

> [!example]- Give three reasons why the treasurer of a company might not hedge the company’s exposure to a particular risk.
>1. If the company’s competitors are not hedging, the treasurer might feel that the company will experience less risk if it does not hedge
>2. The shareholders might not want the company to hedge.
>3. If there is a loss on the hedge and a gain from the company’s exposure to the underlying asset, the treasurer might feel that he or she will have difficulty justifying the hedging to other executives within the organization.

> [!NOTE]- [x] Suppose that the standard deviation of quarterly changes in the prices of a commodity is $0.65, the standard deviation of quarterly changes in a futures price on the commodity is $0.81, and the coefficient of correlation between the two changes is 0.8. What is the optimal hedge ratio for a three-month contract? What does it mean?
> ![[Pasted image 20240329121347.png]]

> [!NOTE]- [x] A company has a $20 million portfolio with a beta of 1.2. It would like to use futures contracts on the S&P 500 to hedge its risk. The index futures price is currently 1080, and each contract is for delivery of $250 times the index. What is the hedge that minimizes risk? What should the company do if it wants to reduce the beta of the portfolio to 0.6?
> ![[Pasted image 20240329122405.png]]
> ![[Pasted image 20240329121716.png]]

> [!NOTE]- In the Chicago Board of Trade’s corn futures contract, the following delivery months are available: March, May, July, September, and December. State the contract that should be used for hedging when the expiration of the hedge is in (a) June, (b) July, and (c) January.
> a) july
> b) sep

> [!example]- Does a perfect hedge always succeed in locking in the current spot price of an asset for a future transaction? Explain your answer.
> No. Consider, for example, the use of a forward contract to hedge a known cash inflow in a foreign currency. The forward contract locks in the forward exchange rate — which is in general different from the spot exchange rate.

> [!example]- Explain why a short hedger’s position improves when the basis strengthens unexpectedly and worsens when the basis weakens unexpectedly.
The basis is the amount by which the spot price exceeds the futures price. A short hedger is long the asset and short futures contracts. The value of his or her position therefore improves as the basis increases. Similarly it worsens as the basis decreases.

> [!example]- Imagine you are the treasurer of a Japanese company exporting electronic equipment to the United States. Discuss how you would design a foreign exchange hedging strategy and the arguments you would use to sell the strategy to your fellow executives.
>

The simple answer to this question is that the treasurer should

>1. Estimate the company’s future cash flows in Japanese yen and U.S. dollars
>2. Enter into forward and futures contracts to lock in the exchange rate for the U.S. dollar cash flows.
>
>However, this is not the whole story. As the gold jewelry example in Table 3.1 shows, the company should examine whether the magnitudes of the foreign cash flows depend on the exchange rate. For example, will the company be able to raise the price of its product in U.S. dollars if the yen appreciates? If the company can do so, its foreign exchange exposure may be quite low.
>
>The key estimates required are those showing the overall effect on the company’s profitability of changes in the exchange rate at various times in the future. Once these estimates have been produced the company can choose between using futures and options to hedge its risk. The results of the analysis should be presented carefully to other executives. It should be explained that a hedge does not ensure that profits will be higher. It means that profit will be more certain.
>* When futures/forwards are used both the downside and upside are eliminated.
>* With options a premium is paid to eliminate only the downside.

> [!example]- "If the minimum-variance hedge ratio is calculated as 1.0, the hedge must be perfect." Is this statement true? Explain your answer.
Minimum variance hedge ratio is the ratio of the average change in S for a particular change in F, while a perfect hedge is defined as when the correlation coefficient (ρ) between the spot and futures prices is 1. Their relationship can be expressed by this equation:
 ![](https://lh7-us.googleusercontent.com/qT35chybifZ0_Tqvt-gijtK9_iIt3kfHsCv_eCNaJwBENnB75CC-vLaSW-c97uKP0Bz7SCBOv_3JR1SsBeAw6SfG92v6aeJejOlCTkOuliJhYfiMR0dnENPpRvBMg6Vpn46-KK6SfBjV7J0KQ8FF_-I)
A h* value of 1.0 (minimum-variance hedge ratio) alone doesn’t guarantee a ρ value of 1, since it is also dependent on σS and σF. For example, a ρ value of 0.1 and a σS/σF value of 10 also constitutes a minimum-variance hedge ratio, yet it does not mean the spot is perfectly correlated with the future prices. Hence the statement is not true.

> [!example]- ‘‘If there is no basis risk, the minimum variance hedge ratio is always 1.0.’’ Is this statement true? Explain your answer.
The statement is true. Using the notation in the text, if the hedge ratio is 1.0, the hedger locks in a price of F1 + b2. Since both 1 F and 2 b are known this has a variance of zero and must be the best hedge.

> [!example]- “For an asset where futures prices are usually less than spot prices, long hedges are likely to be particularly attractive." Explain this statement.
>

A company that knows it will purchase a commodity in the future is able to lock in a price close to the futures price. This is likely to be particularly attractive when the futures price is less than the spot price.

> [!NOTE]- [x] 3.16 | The standard deviation of monthly changes in the spot price of live cattle is (in cents per pound) 1.2. The standard deviation of monthly changes in the futures price of live cattle for the closest contract is 1.4. The correlation between the futures price changes and the spot price changes is 0.7. It is now October 15. A beef producer is committed to purchasing 200,000 pounds of live cattle on November 15. The producer wants to use the December live cattle futures contracts to hedge its risk. Each contract is for the delivery of 40,000 pounds of cattle. What strategy should the beef producer follow?
![[Pasted image 20240425171453.png]]
The beef producer requires a long position in 200000x0.6=120 000 lbs of cattle. The beef producer should therefore take a long position in 3 December contracts closing out the position on November 15.

> [!NOTE]- [x] On July 1, an investor holds 50,000 shares of a certain stock. The market price is $30 per share. The investor is interested in hedging against movements in the market over the next month and decides to use the September Mini S&P 500 futures contract. The index is currently 1,500 and one contract is for delivery of $50 times the index. The beta of the stock is 1.3. What strategy should the investor follow? Under what circumstances will it be profitable?
> ![[Pasted image 20240329124120.png]]
> Equity hedging = bouta sell -> **short position**. 26 contracts is required. It will be profitable if the stock outperforms the market in the sense that its return is greater than that predicted by the capital asset pricing model.

> [!example]- A futures contract is used for hedging. Explain why the daily settlement of the contract can give rise to cash flow problems.
> Suppose that you enter into a short futures contract to hedge the sale of a asset in six months. If the price of the asset rises sharply during the six months, the futures price will also rise and you may get margin calls. The margin calls will lead to cash outflows. Eventually the cash outflows will be offset by the extra amount you get when you sell the asset, but there is a mismatch in the timing of the cash outflows and inflows. Your cash outflows occur earlier than your cash inflows. A similar situation could arise if you used a long position in a futures contract to hedge the purchase of an asset and the asset’s price fell sharply. An extreme example of what we are talking about here is provided by Metallgesellschaft

> [!example] A corn farmer argues “I do not use futures contracts for hedging. My real risk is not the price of corn. It is that my whole crop gets wiped out by the weather.”Discuss this viewpoint. Should the farmer estimate his or her expected production of corn and hedge to try to lock in a price for expected production?
> If weather creates a significant uncertainty about the volume of corn that will be harvested, the farmer should not enter into short forward contracts to hedge the price risk on his or her expected production. The reason is as follows. Suppose that the weather is bad and the farmer’s production is lower than expected. Other farmers are likely to have been affected similarly. Corn production overall will be low and as a consequence the price of corn will be relatively high. The farmer’s problems arising from the bad harvest will be made worse by losses on the short futures position. This problem emphasizes the importance of looking at the big picture when hedging. The farmer is correct to question whether hedging price risk while ignoring other risks is a good strategy.

> [!warning] 3.22 | A company wishes to hedge its exposure to a new fuel whose price changes have a 0.6 correlation with gasoline futures price changes. The company will lose $1 million for each 1 cent increase in the price per gallon of the new fuel over the next three months. The new fuel's price change has a standard deviation that is 50% greater than price changes in gasoline futures prices. If gasoline futures are used to hedge the exposure what should the hedge ratio be? What is the company's exposure measured in gallons of the new fuel? What position measured in gallons should the company take in gasoline futures? How many gasoline futures contracts should be traded?
> The new fuel's price change has a standard deviation that is 50% greater than price changes in gasoline futures prices => **fraction in RHS** is 1.5, thus h is 0.6 \* 1.5 = 0.9
> If should therefore take a position of 90 million gallons in gasoline futures. Each futures contract is on 42,000 gallons. The number of contracts required is therefore 90 mil / 42mil (size per contract) = 2142.9 (2143)

> [!warning] ![[Pasted image 20240425175413.png]]
> ![[Pasted image 20240425175432.png]]
