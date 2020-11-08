# Assessment Area Evaluation

## Alternative Assessment Area based on Sales Price Growth
### Ben Kizaric 11/09
<img src="./media/assmt_area_growth_opt.svg" alt="image-20200524142738004" style="zoom:150%;" />
<img src="./media/new_area_price_hist.svg" alt="image-20200524142738004" style="zoom:150%;" />
The map above shows boundaries for new single-family assessment areas. These boundaries were created by repeatedly splitting a large assessment area (starting with the whole city as 1 assessment area), into two assessment areas, so that the standard deviation of sales price growth rates was a close as possible between the two new, smaller assessment areas. This splitting process is then repeated for each of these two new areas.
To ensure, "normal" looking assessment areas, I imposed a few extra criteria on each split:
* Both assessment areas have to have at least 25 homes in them.
* Both assessment areas have to exceed a minimum size.
* Both assessment areas can't be too wide / narrow, defined by the ratio of their widths and heights.
* The number of homes in the two assessment areas can't be different by more than a factor of 2.

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
This heatmap shows how much the (Time-Adjusted) sales prices vary within each single family tax assessment area in Madison. Unlike the version shown in our presentation from 10/26, this version normalizes the standard deviation to account for the fact that assessment areas with generally higher sales prices will also have higher standard deviations of those sales prices.
The map shows how most assessment areas have relatively small standard deviations, with the exception of the downtown assessment area downtown, south of the capital. This area will be the topic of further investigation.  

## Average Sales Price Growth Rate.
### Ben Kizaric 10/26
<img src="./media/growth_avg_assmt.svg" alt="image-20200524142738004" style="zoom:150%;" />

## Deviation of Sales Price Growth Rate.
### Ben Kizaric 10/26
<img src="./media/growth_dev_assmt.svg" alt="image-20200524142738004" style="zoom:150%;" />