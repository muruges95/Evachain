# Evachain

## Prerequisites
Ensure that you have `node` and `npm` installed.

## Installation
```
npm install -g exp
npm install
exp start
```
## For Mac 

```
brew install watchman

```

<p align="center">
<a href="https://youtu.be/6HrcKqWbwoY">Project Video</a> | 
</p>

## Overview

- [Description](#description)
- [Features](#features)
    - [Student Features](#student-features)
    - [Educator Features](#educator-features)
    - [App Features](#app-features)
- [Changelog](#changelog)
- [Future Plans](#future-plans)


## Description

Edulytics is a Web Application targeted at 2 main stakeholders, Students and Educators, aiming to enhance both learning and teaching capabilities.

## Technology Stack

Edulytics is built on React with Redux, retrieving data from Firebase which is dynamically updated using a Jupyter Notebook. Within the notebook, weekly downloads are made from Amazon's S3 Buckets together with real-time API calls for more time-sensitive data.

## Features
### Student Features

#### 1) Basic Course Statistics
<p align="center"><img src="https://i.imgur.com/z2aOtVG.png" style="width:100%" /></p>
The top row of the student dashboard shows the Basic Course Satistics which comprises of the Elo Rating, Total levels Completed and Average Playtime per Level for the student. **Elo Rating** is our take on the Gamified ranking system, where the layer of abstraction prevents them from abusing the system and going against the purpose of learning. In addition, Edulytics utilises an aggregated metric called Elo as opposed to a hard rank like 1,2,3. Drawing results from our findings, the gradual rise in the numerical metric would generally motivate students more compared to a rank-based system. For **Total Levels Played** and **Average Time Taken/Level**, these are simple statistics that allow students to see their work pay off, also easing the cognitive load.

#### 2) Attribute Hexagram
<p align="center"><img src = "https://i.imgur.com/gt5mrji.png" style="width:50%"/></p>

The left column of the second row contains the Attribute chart with 6 Attributes: Hardwork, Dedication, Mastery, Proactive, Effort and Diligence. The following table show how each metric is calculated.

<div align="center">
	<table>
		<tr>
			<th>Metric</th>
			<th>Calculation</th>
		</tr>
		<tr>
			<td>Hardwork</td>
			<td>No. of Assignments Submitted</td>
		</tr>
		<tr>
			<td>Mastery</td>
			<td>Average Time Taken per CodeCombat Level</td>
		</tr>
		<tr>
			<td>Proactiveness</td>
			<td>Relative Time Taken for Assignment Submissions</td>
		</tr>
		<tr>
			<td>Effort</td>
			<td>Relative Total Playtime</td>
		</tr>
		<tr>
			<td>Diligence</td>
			<td>Completion and Time Taken for Video Assignments</td>
		</tr>
	</table>
</div>

#### 3) Article Recommendations
<p align="center"><img src="https://i.imgur.com/LRuDmwm.png" style="width:70%"/></p>

The middle of the row shows contains article recommendations based on the traits of the student. This feature ultilises the Attribute Hexagram to see which areas the student is lacking in, populating the list with appropriate articles based on the attributes. For example, if a student is lacking Dedication and Hardwork attributes, articles related to improving productivity would appear on the list.

#### 4) Elo Distribution Chart
<p align="center"><img src="https://i.imgur.com/OPq0yLs.png" style="width:50%"/></p>

To the right of the row contains Elo Distribution Chart, which enables students to see their standings among their peers. Students will also be able to see the distribution and frequency of other students at each Elo level. In doing so, Edulytics aim to aid students in setting smart goals accordingly.

#### 5) CodeCombat Progress Tracker
<p align="center"><img src="https://i.imgur.com/pGpzxlv.png" style="width:70%"/></p>

The CodeCombat Progress Tracker complements the Average Time per Level statistic, providing the option for students to drill down and analyse their performance for each level. Given that each level in CodeCombat targets a few concepts of programming, the Progress Tracker would allow students to note the skills they are lacking in.

#### 6) Assignments Tracker
<p align="center"><img src="https://i.imgur.com/xFCAF0o.png" style="width:70%"/></p>

The Assignments Tracker is built so that student will always be up to date and able to efficiently manage their assignments. Basic details such as the due date and description are provided to allow student easy access to the assignment itself.

### Educator Features

#### 1) Basic Course Statistics
<p align="center"><img src="https://i.imgur.com/f4ju5p4.png" style="width:100%"/></p>

The Basic Course Statistics is situated at the top row of the Course Instructor's dashboard. This includes certain metrics and attributes such as the course details (instructor and course name), number of students, average Elo rating, as well as the average number of CodeCombat levels completed. The last two metrics might be more relevant to the Course Instructor as it shows the progress of the course in general as well as the average ability of the students.


#### 2) Average Attribute Hexagram
<p align="center"><img src="https://i.imgur.com/pd3wQKY.png" style="width:50%"/></p>

The radar chart showing the six aggregated attributes helps the Course Instructor to have an in-depth understanding of the students' profile and work attributes. Should there be a certain aspect lacking across the course, instructors would be able to pick them up and target the course direction accordingly.


#### 3) Elo Distribution
<p align="center"><img src="https://i.imgur.com/yKrrUhe.png" style="width:50%"/></p>

The Elo Distribution area chart allows Course Instructors to have a better understanding of the overall performance of the students in the class. It also helps to identity the weaker students for the instructor to follow up on them. In addition, should the chart show a distribution severely deviated from the normal, insights can be drawn to scale/tweak the pace/content of the course.


#### 4) Leaderboard
<p align="center"><img src="https://i.imgur.com/hk1IEYo.png" style="height:500px"/></p>

The Leaderboard on the right of the dashboard shows the top 10 students in the course, providing a quick and easy view of the top performing students. Clicking on the names would also allow the instructor to visit the student's dashboard should a drill-down analysis be needed.

#### 5) Average Time Taken Distribution Chart
<p align="center"><img src="https://i.imgur.com/KsS99yZ.png" style="width:100%"/></p>

The Average Time Taken per Level is represented by an area chart, highlighting the time spent/taken on each Code Combat level. The levels with higher average time can be translated to having harder concepts the students are having difficulty grasping, and vice versa. This would provide instructors recommendations on which topics to focus on during lessons.

#### 6) Hourly Assignment Submission Chart
<p align="center"><img src="https://i.imgur.com/FXXnXbm.png" style="width:100%"/></p>

The Hourly Submission Chart is represented by a line chart showing the distribution of student submissions split by hour per assignment. A dropdown list is included for instructors to select the assignment in question, enabling them to have a better understanding of both the students as well as the nature of the assignment. For example, should the submission times be concentrated at a particular hour, it may mean that the assignment is relatively easy. Conversely, if it is rather fragmented, it can also be seen that the assignment poses some kind of difficulty to the students, producing such a varied submission timings. Additionally, should there be submissions at the wee hours in the morning, follow-ups with such students may be required to better understand their difficulties in submitting.

#### 7) Submission Distribution Tracker
<p align="center"><img src="https://i.imgur.com/Glzz8gh.png" style="width:100%"/></p>

The heat map shows the distribution of submission times relative to the period of the entire assignment, with each row representing each assignment and each column representing a time period. Unlike the Hourly Submission Chart, the time given to student to complete each assignment is evenly split into 20 bins, regardless of duration, allowing for uniform comparison across assignments. Should the cells be concentrated toward the left side, it may mean that the assignment is completed with relative ease, compared to another concentrated on the right, representing last minute submissions. Based on such insights, the Course Instructor would be able to have a better understanding of the proficiency level of the students, especially when the submissions for each assignment is known.

#### 8) Video Assignment Completion Tracker
<p align="center"><img src="https://i.imgur.com/tCaAVHs.png" style="width:100%"/></p>

The stacked bar graph records the completion of videos for each video assignment. Upon clicking on each bar/assignment, the names of the students who have yet to watch the video would be shown at the bottom. Students who have not watched the video could either mean that they are not active or have accidentally missed it. On the other hand, students who consistently did not attempt to watch the videos could tell a different story to the Course Instructor. Either way, the quick highlighting of names value adds to the analysis by vastly reducing the time taken to locate these students.

#### 9) Video Watch Length Distribution
<p align="center"><img src="https://i.imgur.com/8A5NQXa.png" style="width:100%"/></p>

The distribution of Video Watch Length is depicted by a line chart showing the amount of time spent by each student on each video assignment. Similar to the Hourly Assignment Submission Chart, a dropdown serves as a quick toggle to visualise the breakdown of each assignment/video. Taking a longer time to watch (compared to video length) any video would probably mean that certain concepts need to be reiterated. Conversely, if minimal time is taken to finish the contents of the video it may highlight that there might not be much effort put in in digesting the contents of the video, especially if it is consistent throughout all videos.

#### 10) Weak Student Monitoring Dashboard
<p align="center"><img src="https://i.imgur.com/zre5O5U.png" style="width:100%"/></p>

At the bottom of the dashboard, the weakest students are displayed as a collection of cards showing the Attribute Chart with other basic information such as the Elo, levels completed, average time taken per level, as well as the number of current assignments pending. This allows the Course Instructor to have an overview of these students and find similarities among these students, providing data to support teaching decisions. Clicking on each card would bring the instructor to the student's dashboard, enabling a more in-depth understanding of the student's needs. Similarly, the Course Instructor will be able to select 3 students to half the size of the course to display the cards for comparison. This is to reduce load on the user and avoid cluttering.

### App Features
#### Search Bar
<p align="center"><img src="https://i.imgur.com/fc0RnSu.png" style="width:50%"/></p>

The app also features a user-friendly search bar, allowing educators to easily search for their students either by course or name. Clicking on the result would lead the current user to the student's dashboard. At the moment, the search is only hidden when the current user is logged to be a student, and that there is no restriction in the search domain, allowing the search results to include other course instructors as well. We aim to modify the search domain in tandem with the inclusion of a login feature.

#### Exception Handling
##### Invalid Routes
<p align="center"><img src="https://i.imgur.com/32pJGwu.png" style="width:100%"/></p>

The app currently reads the user and course ID through the url parameters and path. To account for users entering an invalid url (ie wrong form or wrong id), the app would render a landing page informing them of the error. Similarly, we aim to enhance this together with user authentication, restricting the view access of certain pages according to the access rights of the user (even if the user exists).

##### Invalid/Missing Data
<p align="center"><img src="https://i.imgur.com/mNiFKpg.png" style="width:100%"/></p>

Exceptions are also handled within components themselves, providing a failsafe should certain components fail due to any unexpected change in background data. This allows the user to continue navigating without the page breaking. Furthermore, should certain components not render properly due to the redux state, the option to refresh the page would aid in rendering these components from scratch.

## Changelog
 - Weak Student Monitoring Dashboard
 - Exception Handling for Invalid/Missing Data

## Future Plans
 - User Authentication
 - Inclusion of more User Types (Cohort Administrator)
 - Predictive Analytics
 - Mobile-Friendlier Layout
 - UI Refresh

<p align="center"><b><i>by Chen Kuang, Justin, Ryan and Yu Jie</i></b></p>
