---
title: Derivatives cheatsheet
date created: Tuesday, 6th February 2024, 17:35:15
last modified: Friday, 10th January 2025, 01:04:42
area:
  - school
class: western sydney
tags:
  - finance
  - derivatives
---
# Derivatives cheatsheet

WE USE **360 DAYS** not 365

## Chapter 5. Forward and forward valuation

SPI200 trade in whole points

Debt futures trade in half points

> [!warning] Net gain from shorting
> **Inflow from selling - outflow from closing position (buy) - dividend (must pay out)**
> **Outflow from buying + Dividend (receive) - inflow from closing position (sell)**

![[Pasted image 20240206174607.png]]

==**The left column = forward price, the right column = value of the contract**==

You need K to find value of contract, but not for future price

![[Pasted image 20240114041907.png]]

> [!warning] ==\[If foreign involved]== Calculate forward rate given xc rate & interest rates
> **Forward rate = exchange rate . e ^ \[(rfr local - rfr foreign)\*time]**

> [!warning] ==\[Basic maths]== Continuous compounding find FV
> Future amount = Principal . e^(pa interest rate * time in years)

> [!warning] ==\[Given table]== Estimating interest rate differentials from table
> Look at one country & its 2 'Prior settlement price' at 2 different times.
> * e.g. Australia September vs December: 1.0075 -> 1.0000
> * % change = 1/1.0075 = 0.744% LOWER
> => Short term futures prices are DECREASING at a rate of 0.744% / 3 months = 0.744 / 3 * 12 = 2.976% per year.
> => This is also the amount by which **short term Aus interest rates > short term US interest rates**
> ![[Pasted image 20240202003335.png]]

> [!warning] Forward price of investment commodity
> Without income & storage costs: **F = S . e^(rT)**
> With storage costs U (U = PV of all storage costs): **F = (S + U) . e^(rT)**
> If U = proportional to price of commodity -> treated as negative yield: **F = S.e^\[(r+u)T]**
> * u = storage cost per annum = proportion of spot price net of any yield earnt

> [!warning] Convenience & carry cost
> Investment asset | cost of carry c only
![[Pasted image 20240202195730.png]]
> Consumption asset | cost of carry c - convenience yield y
![[Pasted image 20240202195746.png]]
## Chapter 10. Options valuation

| Variable | European Call | European Put | American Call | American Put |
| :--- | :--: | :--: | :--: | :--: |
| Current stock price | + | - | + | - |
| Strike price | - | + | - | + |
| Time to expiration | ? | ? | + | + |
| Volatility | + | + | + | + |
| Risk-free rate | + | - | + | - |
| Dividends | - | + | - | + |

> [!warning] Upper bounds
>Call: **C ≤ S(0)**   |   **c ≤ S(0)**
>* If X true -> arbitrage: buy the stock, sell the call option
>
>Put: **P ≤ K**   |   **p ≤ Ke^(-rT)**
>* If X true -> arbitrage: writing/sell the option, invest proceeds of the sale at rfr

>[!warning] Lower bound
>Call option:
>![[Pasted image 20240204164909.png]]
>Put option:
![[Pasted image 20240204212630.png]]


> [!warning] Put call parity for stock
> WITHOUT DIVIDENDs
> ![[Pasted image 20240205185528.png]]
>
> WITH DIVIDENDs
> ![[Pasted image 20240205185412.png]]
>
>Arbitrage opportunity:
>1. Find value of portfolio 1 (put call parity RHS): call & bond
>2. Find value of portfolio 2 (LHS): put & share
>3. Whatever is underpriced -> buy underpriced portfolio, sell overpriced portfolio
>	* NOTE: portfolio 1 -> BUY/SELL THE CALL ONLY, ignore the bond.

example: put call parity arbitrage [[Derivatives notes#^1e885b]]

## Chapter 12. Options - Binomial tree pricing

> [!NOTE]- 2 step binomial
![[Presentation_LamDongQuy_22119146_Week10.pdf]]

> [!warning] Valuation of options - 1 step
> SHORT WAY
> * f = value of option
> * d = transformation of current stock price if it goes down
> * u = transformation of current stock price if it goes up
![[Pasted image 20240304012806.png]]
>![[Pasted image 20240304012856.png]]
>
>LONG WAY
>1. Up value Δ - option = Down value Δ
>Solve for Δ
>Solve for value of portfolio (any of the two sides)
>2. (Δ . current share price - f).e^(rt) = 38.4
>Solve for f = 2.23

> [!warning] Valuation of options - 2 step
> ![[Pasted image 20240304175612.png]]
> ![[Pasted image 20240329002523.png]]
![[Pasted image 20240304165312.png]]
## Chapter 13. Black-Scholes-Merton option pricing
**Probability Distribution of stock price (ln ST) ~ (expected value, variance)** ![[Pasted image 20240305021349.png]]
**Prob dist of the cont compounded RATE OF RETURN**
σ√Δt

**Black pricing**
> ![[Pasted image 20240306141705.png]]

**Prob of exercise call** = N(d2)
**Prob of exercise put** = 1 - N(d2)

**If there's dividend**
>**S0 = S0 - Dividend.e^(-r.time to discount the dividend only)**

e.g. s0 = 50, strike = 50, r = 0.1, option is 3 months

If dividend is 1.5, expected in 2 months:

S0 = 50 - 1.5.e^(-10% x 2/12) = 48.52 **(NOT 3/12)**

**Normdist**
![[Pasted image 20240306170427.png]]
![[Pasted image 20240306170438.png]]
![[Pasted image 20240318173155.png]]

## Chapter 4. Interest rates
**Converting between different compounded rates**
![[Pasted image 20240329004353.png]]
**Finding forward rate at T2 given zero rates at T1 and T2**
![[Pasted image 20240329014141.png]]
**Valuating an FRA**
![[Pasted image 20240329014441.png]]
**Finding par yield**
![[Pasted image 20240329071130.png]]
d = PV of 1$ received at maturity
m = # of coupon payments / year
c = par yield
par = principal
A = all the discounting factor, aka pretend pmt d is invisible

## Chapter 3. Hedging & basis risk
> [!warning] Short / long hedge guide
If what we're NEEDING TO SELL is gonna go down -> wanna lock in the higher selling rate -> SELL futures
If what we're NEEDING TO BUY is gonna go down -> we wanna lock in the cheaper rate -> BUY futures

![[Pasted image 20240329114346.png]]

![[Pasted image 20240329114356.png]]
