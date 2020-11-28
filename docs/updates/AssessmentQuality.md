# Assessment Area Evaluation


## Examination of "Problem" Assessment area & Evaluation of Standard Deviation as a metric of similarity.
### Ben Kizaric 11/23
<img src="./media/price_dev_assmt.svg" alt="image-20200524142738004" style="zoom:60%;" />
<img src="./media/trouble_area_prices.svg">

We examined assessment area 24, which covers area south of the capitol building, as well as student housing on the east side of campus. Previous findings indicated that there was a large deviation of prices of single family homes in the area, so we wanted to see if this area should  be split in some way. However, what we found is that the large deviation of prices came not from distinctly priced clusters of homes, but a single home that sold for upwards of 11 million dollars in today's money.

This can be seen in the numerous circles above, each corresponding to a home, with the area of the circle being proportional to the home's sale price. The one wildly expensive home is shown as the very large circle. 

This finding has made us question the usefulness standard deviation as a metric of similarity. Standard deviation looks to be sensitive to outliers in the data. We might be better off using Interquartile Range or similar metric.

## Assessment Price Accuracy by Race
### Desmond Fung 11/16
<img src="./media/AssmtAccuracy_Black.png">
<img src="./media/AssmtAccuracy_White.png">
<img src="./media/AssmtAccuracy_Asian.png">

**How to interpret the plot?**

 - For example, with a score of 100, that means this house was assessed at 100% over its actual value
For accuracy, the average percentage error is -6.4%, which means assessments are on average under-valuing home 6.4% over its actual value.

For consistency, the standard deviation is 45, which means the accuracy percentages error is fairly spread out from their mean average value. Since standard deviation is not intuitive for many people without a statistic background, an interquartile range is provided for interpretability. The interquartile range is 14.4 percentage, that's the same as 50% of the data lies within -21 to -6.6 percent error.

For racial equality, the slope of the regression line for the Black resident is -1.1. This means there is a trend that tax assessment accuracy would decrease by -1.1% for every increase in the percentage of black in the assessment area. In contrast, the slope of the regression line for White and Asian resident is 0.34 and respectively 0.28, which imply racial equality might exist in assessment values.

## Simulated assessment price accuracy.
### Ben Kizaric 11/16
<img src="./media/simulated_map_performance.svg" style="zoom:150%;">

This week, I wanted to see how the alternative assessment area maps we created would impact the actual assessment prices of actual homes. Specifically,  I wanted to see if this made them more or less accurate. To do this, I created three "simulated" assessment prices for each house, using a regression model taking in the time-adjusted sales price for each house, the home's square footage, the year the house was built, and the *median sales price of homes in that home's assessment area.*

This last variable, the median sales price of homes in that home's assessment area, is what I changed to see the effects of the three different assessment area maps.  The three different maps being the actual assessments currently in use by the city, a price-optimized map, and a growth optimized map (See below). 

This process yielded three simulated assessment prices for each house. I then looked at the degree of under/over-evaluation, defined by `100*(AssmtPrice-SalesPrice)/SalesPrice` for each of the simulated assessment prices for each house. 

Pictured above is a bar plot depicting the average under-evaluation under the three different maps / three simulated assessment values. The different in evaluation is relatively small, but the price-optimized and growth-optimized maps result in more accurate simulated assessment prices. 

## Alternative Assessment Area based on Sales Price Growth
### Ben Kizaric 11/09
<img src="./media/assmt_area_growth_opt.svg" alt="image-20200524142738004" style="zoom:150%;" />
<img src="./media/new_area_price_hist.svg" alt="image-20200524142738004" style="zoom:150%;" />
The map above shows boundaries for new single-family assessment areas. These boundaries were created by repeatedly splitting a large assessment area (starting with the whole city as 1 assessment area), into two assessment areas, so that the standard deviation of sales price growth rates was a close as possible between the two new, smaller assessment areas. This splitting process is then repeated for each of these two new areas.

To ensure, "normal" looking assessment areas, I imposed a few extra criteria on each split:
-  Both assessment areas have to have at least 25 homes in them.
-  Both assessment areas have to exceed a minimum size.
-  Both assessment areas can't be too wide / narrow, defined by the ratio of their widths and heights.
-  The number of homes in the two assessment areas can't be different by more than a factor of 2.

The second plot shows the distribution of standard deviations of sales price growth rates in both the new and the old assessment areas.

Even though the new assessment areas were optimized to have near-equal standard deviations of sales prices, the new assessments actually performed worse than the old ones. This might be because they only have straight, right-angle boundaries. It could also be that most of the variation of sales price growth is very localized, and sufficiently large assessment areas will have a hard time separating out the localized variation.

## Average Sales Price.
### Ben Kizaric 10/26
<img src="./media/price_avg_assmt.svg" alt="image-20200524142738004" style="zoom:150%;" />
This heatmap shows the average time-adjusted sales price of homes within each single family assessment area in Madison. 
The small assessment areas bordering the two lakes are the most-expensive areas in Madison. Furthermore, it appears that homes in west Madison sell for less than homes in east Madison. 

## Normaized Deviation of Sales Price.
### Ben Kizaric 11/02
<img src="./media/price_dev_assmt.svg" alt="image-20200524142738004" style="zoom:150%;" />
This heatmap shows how much the (Time-Adjusted) sales prices vary within each single family tax assessment area in Madison. The standard deviation is also normalized to account for the fact that assessment areas with generally higher sales prices will also have higher standard deviations of those sales prices.
The time adjustment for sales prices is as follows:
The map shows how most assessment areas have relatively small standard deviations, with the exception of the downtown assessment area downtown, south of the capital. This area will be the topic of further investigation.  

**Time Adjustment Explanation**
<img src="./media/time_adjustment.png" alt="image-20200524142738004" style="zoom:60%;" />

**Standard Deviation Normalization**
<img src="./media/price_std_dev_normalized.png" alt="image-20200524142738004" style="zoom:60%;" />

## Average Sales Price Growth Rate.
### Ben Kizaric 10/26
<img src="./media/growth_avg_assmt.svg" alt="image-20200524142738004" style="zoom:150%;" />

## Deviation of Sales Price Growth Rate.
### Ben Kizaric 10/26
<img src="./media/growth_dev_assmt.svg" alt="image-20200524142738004" style="zoom:150%;" />