# General Exploration

## Map of Recorded Single Family Parcels
### Aarushi Gupta, 11/2
<img src="./media/Single_Family_Points.png" alt="image-20200524142738004" style="zoom:80%;" />

## Distribution of Single Family sales prices over time.
### Ben Kizaric 10/19
![Home Prices Video](./media/Home_Prices.mp4)
![Home Prices Inflated Video](./media/Home_Prices_Inflated.mp4)

As a pre-cursor to using sales prices in further analyses, we needed to examine how the sales prices of single family homes in Madison have changed over time, so we can adjust for inflation, and how the market value of homes has changed over time.

So, we construct two animations showing how the distribution of sales prices has changed over time. Each frame of the animation shows the distribution of sales prices in a 3 year span, to reduce the noise of small year-to-year variations in sales prices. 

The first animation does not adjust for inflation, and a very significant increase in raw sales prices can be observed from 1975 to 2020, with only two periods of decreased raw sales prices seen. One in the early-mid 1980s, and one in the aftermath of the 2008 financial crisis. The second animation *does* adjust for inflation, yet there is still growth in sales prices from 1975-2020, indicating that homes have become more expensive, even when considering that the value of the US dollar has dropped since 1975. The two periods of decreased sales prices are the same as in the previous graph.

An interesting trend in both of the animations is that from 1975-2000, the median sales price was roughly equal to the mode sales price, but from 2000-2020, the median sales price is usually a few thousand dollars ahead of the mode. 


## Distribution of Single Family Tax-Assessed Home Values
### Desmond Fung, 9/28
<img src="./media/Week5_Hist.png" alt="image-20200524142738004" style="zoom:80%;" />
<img src="./media/Week5_CDF.png" alt="image-20200524142738004" style="zoom:80%;" />

In this section, we decided to filter our data based on property use e.g. Condominium, Restaurant, apartment, single-family, and explore into **the total assessment value for single-family properties in Madison.** We can observe that the assessment value is centered at approximately $250000, which can serve as a reference point for us so that in the future we can look into the racial disparity around that specific value. To explore the histogram further, we made a Cumulative Distribution Function of assessment value. We can observe that the cumulative probability peaked very early on in the x-axis, which means the cumulative probability that a single family's assessment value is $500000 or less is approximately at 0.9, which lines up with our observation from the histogram that the assessment value center at approximately $250000.



