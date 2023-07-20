---
title: "Voluntarius - Hack for Humanity 2022"
date: 2022-02-12T12:00:00-06:00
draft: false
description: "Developed mobile and web app to help connect volunteers to those in need."
time: "February 2022"
category: webdev
---
{{<side-by-side imageLeft="desktop.jpg">}}
There are millions of ways to help people, and there are millions of people in need of help. The hardest part is matching the helpful volunteers with those in need on an individual basis. Voluntarius, developed during Santa Clara's 9th annual Hack for Humanity hackathon, rose out of this need, a bridge between aspiring volunteers and anyone nearby in need of help. The app was conceived to allow those in need to post their tasks, and have all nearby volunteers be able to get in touch with and help them.

{{</side-by-side>}}
The main feature revolves around “Job Postings.” Any user can create a job posting, specifying when the job will take place, its description, and how many volunteers are requested. This request enters the database and is then displayed on the home page of any volunteer that logs in within a short radius. A volunteer will be able to see all the listings by how close the jobs are to the volunteer, and will be able to select a job on an interactive map, assess it, and apply for it. The poster of the job then approves the applicant, and a chat room is created for the job. Any user that is hosting or accepted for a job is able to access the chat, and the chat will update live with any messages.

After a volunteer has completed a job, the host will verify their hours, and the hours from each event that the helper has participated in can be neatly exported in a pdf. This angle of the app serves as motivation for volunteering, offering a simple and quick way for anyone to record and report volunteer hours. Along with the verification, a host will give each helper a rating out of five stars, which is recorded in the user’s profile with their average rating. Along with this, we incorporated a push notification system for all platforms that notifies the user whenever a volunteer signs up for a job or when they receive a chat message.

### How We Built It
We decided to use Flutter to design the frontend. Flutter allows for easy development for iOS, Android, and the web, which is essential for being able to communicate with volunteers on the go. It also includes libraries that easily connect to Google Maps, helping users find nearby jobs. For the backend, we utilized Firebase and node.js. Firebase is one of the best database tools to help manage users and requests and is the basis for our authentication. Node.js helps process changes in the database and helps the system be as reactive as possible.

[See the Devpost](https://devpost.com/software/redacted-lx52yk)

[Project on Github](https://github.com/jordanmosakowski/voluntarius)