---
title: Highlight a bar in a Vega Chart
categories:
  - work
has_viz: true
---
I wanted to highlight just one column in a bar chart with Vega

It took me some time and some digging through different examples to find a reasonable hack to get where I wanted.

It is not perfect yet but it works. And if you have a different way let me know. Would love to improve it.

Here is the code I use:
{% gist 6a8e190785cde0fe7e5ecef0c2d1f80d %}

I add a new field called highlight and set it to true for one variable. And use the new field to select the color.  
Here is the result:

<div id="complaint_source"></div>
{% include _create_viz.html %}
