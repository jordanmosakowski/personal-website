---
title: "Winning Hackathon Project: Crystal Ball"
date: 2021-11-13T12:00:00-06:00
draft: false
description: "I developed the frontend of my team's hackathon project, which made API calls and displayed the processed data on a map of San Francisco. The project won the inaugural INRIX Hack."
time: "November 2021"
category: webdev
featured: false
---
{{<side-by-side imageLeft="app.png">}}
After receiving the address of a location as input, the program returns trip information within the standard radius of 10 miles collected from the INRIX Trade Area Trip API over the selected period of time. Within that radius, the website will break down the area into blocks, highlighting the areas from which consumers drove to get to the destination business. These regions are color-coded based on how many trips were made from that block to the destination, with more trips being represented by more vivid colors.

### Technologies used:
- Angular Frontend
- Chart.js
- Leaflet.js and OpenStreetMap
- Node.js Backend with Express and Axios

[See the Devpost](https://devpost.com/software/crystal-ball-nhlwxt)

[Project on Github](https://github.com/jordanmosakowski/inrix-hack-2021)
{{</side-by-side>}}