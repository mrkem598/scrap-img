//scraping a web page content
// Dependencies
//snatches HTML from URLs
var request = require("request");
//Scrapes our html
var cheerio = require("cheerio");
//Run request to grab the HTML from the website's section
request("http://www.awwwards.com/websites/clean/", function(error, response, html) {
  //load the  HTML into cheerio
  var $ = cheerio.load(html);
  //make empty arraty saving our scraped info
  var result = [];
  //with cheerio, look at each award-wining site , enclosed in the figure tags
$("figure.site").each(function(i, element) {
  /* Cheerio's find method will "find" the first matching child element in a parent.
     *    We start at the current element, then "find" its first child a-tag.
     *    Then, we "find" the lone child img-tag in that a-tag.
     *    Then, .attr grabs the imgs src value.
     * So: <figure>  ->  <a>  ->  <img src="link">  ->  "link"  */                     
var imgLink = $(element).find(("a").find("img").attr("src");
 // push the image's url( save to the imgLink var) into the result array
  results.push({ Link: imgLink });
}):
