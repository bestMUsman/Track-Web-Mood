
**Live**: http://trackwebmood.herokuapp.com/

Welcome to Track Web Mood!
=====================
![alt text](https://github.com/askflow1111/Track-Web-Mood/blob/master/WebMood.png?raw=true)


## What does it do?  
Track Web-Mood is an analytic dashboard app that provides clients with insights into website morale by analyzing the sentiment of text written on the website. It provides the results in relation to Joy, Sad, Fear, Anger, and Disgust values using the Pie Charts and the Radar Chart. It also allows users to create his/her user account and "Save" the website in the database by using the RESTFUL API, which also allows users to "Read", "Update/Edit", and "Delete" the things in the database.
                                            
## How to use it?  
 - Visit the website 
 - Enter the url of the Website which you would like to analyze
 - Enter the Room Name and Video Url
 - The results are shown to you, using the Pie Charts and Radar Charts
 - Login into the website, and click on the save button to save the website into the database

## How does it work? 
 - When user enters a website url and submits the form, so that url is sent to server
 - Using route in node.js/express, a form submission is detected and the url gets stored into the server
 - Using "Request API" a call is made to that particular website, which then gets all the HTML of that website  
 - Then "Html-To-Text" API is used to convert the HTML into a regular text
 - After the text is converted into a regular text, then it is sent to "Watson-Developer-Cloud" API
 - "Watson-Developer-Cloud" API gets all the text and then detects the mood of that text then return the mood data in JSON format
 - Using ChartJs Library, the JSON data is displayed in Pie Charts and Radar Chart
 - Users register and then login to the website, which allows them to save that website into the database

## What techs are being used? 
 - Three APIs
 - ChartJs Library
 - Node.js/Express¹ 
 - PostgreSQL² 
 - Javascript
 - DOM
 - Erb
 - CSS(Flexbox)
 
 
1) To communicate (send/recieve requests) with the database, clients on the browser side, and fetch data from APIs.
2) To store users' data including users' authentication, users' posts, and their activity.
 
## APIs 
 - Request API
 - Html-To-Text API
 - Watson-Developer-Cloud API
