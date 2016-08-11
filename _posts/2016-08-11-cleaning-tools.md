---
title: Three tools that help me clean data
image:
  url: cleaning-data.jpg
  alt: Cleaning Data
---
Working with Open Data or data in general almost always includes getting your data into shape. It is commonly known as ETL (Extract, Transform, Load). I call it a Data Pipeline. The name Data Pipeline is much easier to understand than ETL, especially with folks who don’t have a technical background. And working with governments and social non-profits/advocacy groups, you most often talk to non-technical people. 

## What is ETL

> In computing, Extract, Transform and Load (ETL) refers to a process in database usage and especially in data warehousing that performs:  
> Data extraction – extracts data from homogeneous or heterogeneous data sources  
> Data transformation – transforms the data for storing it in the proper format or structure for the purposes of querying and analysis  
> Data loading – loads it into the final target (database, more specifically, operational data store, data mart, or data warehouse)

## What I use for transform

There are a lot of choices out there for transforming and cleaning your data. You have the option with desktop apps, online apps, and libraries to program and automate your transformations. 

When I’m just exploring a dataset, I often use R and RStudio to fiddle around with the data, getting summaries and finding missing data. R has impressive libraries for dealing with data, the most common one is ddplyr.
They make it very easy dealing with data and appeal to the programmer in me :)

Another tool I often use when I don’t get a good sense of the data or know that a lot of cleaning was needed I use OpenRefine. OpenRefine is an app that runs locally on your machine and helps you clean big datasets or find similar spellings. It is the main benefit OpenRefine brings to the table, the ability to find data that is spelled differently in your dataset. It often happens when data was inserted manually. For example company, names are often spelled very differently, and OpenRefine can catch these and merge them together. 
Another very useful task you can do with OpenRefine is to transform your table or split columns based on a common theme. For example, the following can be divided into two columns very easily: „03 - Headline“. And this can become a column with „03“ and one with „Headline“. 

## Programming Libs
But most of the time I use a combination of excellent tools for the command line and merge them together via a Makefile to automate as much as possible and make it easy to be done more often. 
I will have a post with a more detailed explanation. But the tools I use are Makefile, csvkit, jq. 
If you know Python and you are not comfortable working on the command line maybe agate and proof are better suited for you.

There are plenty of other tools that you can use, but these are the ones that I’m most comfortable with and for the best results.
