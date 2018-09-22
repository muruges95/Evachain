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

### 1) Onboarding
<p align="center"><img src="https://i.imgur.com/z2aOtVG.png" style="width:100%" /></p>
- Explain how people use it
- file directory in src

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

### 3) Map View
<p align="center"><img src="https://i.imgur.com/LRuDmwm.png" style="width:70%"/></p>

The middle of the row shows contains article recommendations based on the traits of the student. This feature ultilises the Attribute Hexagram to see which areas the student is lacking in, populating the list with appropriate articles based on the attributes. For example, if a student is lacking Dedication and Hardwork attributes, articles related to improving productivity would appear on the list.

### 4) Push Notifications
<p align="center"><img src="https://i.imgur.com/zzMTIi8.jpg" style="width:50%"/></p>
SMS notification

<p align="center"><img src="https://i.imgur.com/krTL2Ih.jpg" style="width:50%"/></p>
Push notification

Our application sends push notifications to users in the case of an emergency to warn them and also allow them to verify their safety at the same time. For residents living near the disaster zone who do not have our application installed, we will send them a text message to notify them as well. Text messages will be done through the Twilio API.



## Changelog
 - Weak Student Monitoring Dashboard
 - Exception Handling for Invalid/Missing Data

## Future Plans
 - User Authentication
 - Inclusion of more User Types (Cohort Administrator)
 - Predictive Analytics
 - Mobile-Friendlier Layout
 - UI Refresh

