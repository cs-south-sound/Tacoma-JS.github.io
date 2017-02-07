/**
## file: app.js

## module: tacomajsApp

  - Dependencies
    - jQuery
    - Showdown

### Usage:

  - tacomajsApp.version   : returns the version string
*/

//console.dir(window);//debug only

// = = = = = = = = = = = = = = = = = = = = = = = = = =
// showdown should be available here but it is not; BUGGY!
require(['showdown'], function(showdown) {
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
        var pathy = ""; // path to the content
        var tagId = "";    // html tag identifer
        var url   = "";
        var tag   = "";

        /**  YDKJ Up and going */
          pathy = "https://cdn.rawgit.com/getify/You-Dont-Know-JS/master/up%20%26%20going/ch1.md";
          tagId = "#howto-introduction-content";
          convertMDtoHTML(pathy,tagId);// retreive the content
        /** Link to the next chapter */
          url = "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md";
          tag = '<a href="' + url + '">Chapter 2 Into JavaScript</a>';
        //console.log("tag: "+tag); //debug only
          $(tagId).append(tag);// this line is not working for some reason.
    }

    window.onload = init();

});//end require

