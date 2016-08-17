---
title: Code Enforcement Violations in San Diego
image:
  url: code-violations-sd.png
  alt: Code Enforcement Violations Heatmap
card:
  description: "Maps and data about open Code Enforcement Violations Cases in San Diego"
categories:
  - civictech
---
I started looking again at the Open Data Portal in San Diego and searched for interesting data, data with a story.

And I think I found it. I looked at the Code Enforcement Violations before but this time I wanted to see if there were any overlap between Building Owners with Code Enforcement Violations and recent Building Permits. I found 4 for the last six month. So I will dig deeper the next time. With more data.

But this got me to another thing that I found digging through the data. Lot’s of Code Enforcement Violations Cases are still open. And I even found a case open since 1993, yes 1993. I will contact the city to find out more and will keep you updated.

In the meantime, I made a map with all the cases that are open longer than two years. Amazing how many there are. I also created a heatmap of all open cases. You can see it above.

<iframe width="100%" height="520" frameborder="0" src="https://milafrerichs.carto.com/viz/08d45620-648d-11e6-b5cf-0e05a8b3e3d7/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

## Data Crunching

I used R for this Data Crunching since I was not sure what to look for or what pattern I would see. 
The actual code to find the case with oldest open date was relatively simple. I calculated the number of days since today (17 Aug. 2016) for filtering.

Here is the code:

```R
library('tidyr')
library('dplyr')
code_violations = tbl_df(read.csv("mappedcedcases6months_datasd.csv", stringsAsFactors = FALSE))
open_cases_date = 
  code_violations %>% 
  filter(close_date == "") %>%
  mutate(
    OPEN_DAYS0=as.numeric(round(difftime(Sys.Date(),as.character(open_date)))),
    OPEN_DAYS=ifelse(is.na(OPEN_DAYS0),0,OPEN_DAYS0)
  ) %>%
  select (-OPEN_DAYS0) %>% arrange(desc(OPEN_DAYS))
```

For the map I used Carto (previously CartoDB) to create the interactive map and the Heatmap image.
Here is another map with the days since the case was open.
![DaysOpen]({{site.baseurl}}/assets/images/code-violations-days-open-sd.png)

## Data Source
Here is the data Source:  
[City of San Diego Data Portal](http://data.sandiego.gov/dataset/code-enforcement-violations)  
[Code Enforcement Status Report](https://www.sandiego.gov/development-services/opendsd/codeenfreports)
