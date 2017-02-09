/**
## file: app.js

## module: tacomajsApp

  - Dependencies
    - jQuery
    - Showdown

### Usage:

  - tacomajsApp.version   : returns the version string
*/



// = = = = = = = = = = = = = = = = = = = = = = = = = =

require(['showdown','jquery','feedek'], function(showdown) {
    showdown.setFlavor('github');



    tacomajsApp = (function ($, showdown) {
        //"use strict";
        var my = {};
        my.version = "rc_v0.0.2 wip";

        return my;
    }(jQuery));// end tacomajsApp


    console.log("In file app.js version: " + tacomajsApp.version);


        var convertMDtoHTML = function ConvertMDtoHTML(markDownFilePath, id) {
                //convert markdown to html and send to tag 'id'
                // Requires jQuery and showdownjs to be loaded first
                // Usage:
                //     expects path to a markdown file
                //     expects html id tag name of element
                // local example path
                //    markDownFilePath = "example_markdown.md";
                // from the web
                //    markDownFilePath =
                //         "https://raw.githubusercontent.com/jstat/jstat/master/doc/md/core.md";
                $.get(markDownFilePath, function(markdown) {
                  // CORS rules mandate .md file be SERVED locally
                  // or remotely

                  var converter = new showdown.Converter();
                  var showHTML  = converter.makeHtml(markdown);
                  $(id).html(showHTML);
                });
            }



    function init(){
        /**
           After the page has loaded
           Load content from interesting markdown files
        */


        var pathy = "";    // path to the content
        var tagId = "";    // html tag identifer
        var url   = "";    // for hyperlink
        var hyperlink   = "";

        /**  YDKJ Up and going */
          pathy = "https://cdn.rawgit.com/getify/You-Dont-Know-JS/master/up%20%26%20going/ch1.md";
          tagId = "#howto-introduction-content";
          convertMDtoHTML(pathy,tagId);// retrieve and place the content
        /** Link to the next chapter */
          url = "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md";
          hyperlink = 'Chapter 2 Into JavaScript'  +
                      '<a href="' + url + '"><span class="glyphicon glyphicon-step-forward"></span></a>';
        //console.log("tag: "+hyperlink); //debug only
          $("#next-chapter2").html(hyperlink);// this line is not working for some reason.


        /** Update feed readers */
          var feed1 = "http://rss.indeed.com/rss?q=javascript&l=Tacoma%2C+WA";
          var feed2 = "https://stackoverflow.com/jobs/feed?sort=i&q=javascript&l=Tacoma%2C+WA%2C+United+States&d=50&u=Miles";
          var feed3 = "http://rss.jobsearch.monster.com/rssquery.ashx?q=JavaScript-Developer&where=Seattle";

        /** Usage: http://jquery-plugins.net/FeedEk/FeedEk.html */
          $('#rss-feeds1').FeedEk({
            "FeedUrl":feed1,
            "MaxCount" : 10,
            "ShowDesc" : false
          });
          $('#rss-feeds2').FeedEk({
            "FeedUrl":feed2,
            "MaxCount" : 10,
            "ShowDesc" : false
          });
          $('#rss-feeds3').FeedEk({
            "FeedUrl":feed3,
            "MaxCount" : 10,
            "ShowDesc" : false
          });
        // end update feed readers

    }// end of init

    window.onload = init();

});//end require

