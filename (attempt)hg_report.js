"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   11/13/21
   
   Filename: hg_report.js
	
*/
var gameReport;
gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + " " + itemManufacturer + "</h2>";
gameReport = gameReport + "<img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg'/>";
gameReport = gameReport + "<table>";
gameReport = gameReport + "<tr><th>Product ID</th><td>" + itemID + "</td></tr>" ;
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingsSum = 0;
var ratingsCount = ratings.length;
for (var i = 0; i < ratingsCount; i++)
{
   ratingsSum += ratings[i];
}

var ratingsAvg = ratingsSum / ratingsCount;

var ratingsReport
ratingsReport = "<h1>Customer Reviews</h1>"
ratingsReport = ratingsReport + "<h2>" + ratingsAvg + " " + "out of 5 stars (" + ratingsCount + "reviews) </h2>";

for (var i = 0; i < 3; i++)
{
   ratingsReport = ratingsReport + "<div class= 'review'>";
   ratingsReport = ratingsReport "<h1>" + ratingTitles[i] + "</h1>";
   ratingsReport = ratingsReport + "<table>";
   ratingsReport = ratingsReport + "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingsReport = ratingsReport + "<tr><th>Review Date" + "</th><td>" + ratingDates[i] + "</td></tr>";
   ratingsReport = ratingsReport + "<tr><th>Rating</th><td>";

   for (var star = 1; star <= ratings[i]; star++)
   {
       ratingsReport += '<img src ="star.png" />'
   }
   ratingsReport = ratingsReport + "</td></tr></table>";
   ratingsReport = ratingsReport + ratingSummaries[i];
   ratingsReport = + "</div>";
}
document.getElementsByTagName("aside")[0].innerHTML = ratingsReport;
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
