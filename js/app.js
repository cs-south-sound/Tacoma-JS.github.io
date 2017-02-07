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
// showdown should be available here but it is not; bug.
showdown.setFlavor('github');


var tacomajsApp = (function ($, showdown) {
    //"use strict";
    var my = {};
    my.version = "rc_v0.0.2 wip";
    my.convertMDtoHTML = function ConvertMDtoHTML(markDownFilePath, id) {
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

    return my;
}(jQuery));

console.log("In file app.js version: " + tacomajsApp.version);

function init(){
    /**
       After the page has loaded
       Load content from markdown files
    */
    var pathy ="";//path to the content
    pathy = "https://cdn.rawgit.com/getify/You-Dont-Know-JS/master/up%20%26%20going/ch1.md";
    tacomajsApp.convertMDtoHTML(pathy,"#howto-introduction-content");
}


window.onload = init();
