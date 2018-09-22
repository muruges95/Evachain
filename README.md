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

#### 1) Onboarding
Onboarding is the process of signing civilians up for our application. The following data is collected:

* First and Last Name
* House address and mobile phone number
* Important household details
    * Do you have pets?
    * Number of family members
    * Do you have mobility issues? (Require assistance in evacuation
* Signup screen to be a volunteer
* Adding a profile picture

<Screens>
The house addresses will be used to locate the houses in our Google Mapview, in 

#### 2) Dashboard
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

#### 3) Map View
<p align="center"><img src="https://i.imgur.com/LRuDmwm.png" style="width:70%"/></p>

The middle of the row shows contains article recommendations based on the traits of the student. This feature ultilises the Attribute Hexagram to see which areas the student is lacking in, populating the list with appropriate articles based on the attributes. For example, if a student is lacking Dedication and Hardwork attributes, articles related to improving productivity would appear on the list.

#### 4) Push Notifications
<p align="center"><img src="https://i.imgur.com/OPq0yLs.png" style="width:50%"/></p>

To the right of the row contains Elo Distribution Chart, which enables students to see their standings among their peers. Students will also be able to see the distribution and frequency of other students at each Elo level. In doing so, Edulytics aim to aid students in setting smart goals accordingly.



## Changelog
 - Weak Student Monitoring Dashboard
 - Exception Handling for Invalid/Missing Data

## Future Plans
 - User Authentication
 - Inclusion of more User Types (Cohort Administrator)
 - Predictive Analytics
 - Mobile-Friendlier Layout
 - UI Refresh

