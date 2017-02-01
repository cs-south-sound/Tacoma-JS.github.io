/**
  ## file: app.js

*/


function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

// http://bootswatch.com/
loadCss("https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/sandstone/bootstrap.css");

/**
    <!-- some react containers-->
    <!-- copied from the tutorial:
         https://www.lynda.com/React-js-tutorials/Creating-React-component/519668/542821-4.html?autoplay=true
    -->
    This following code does not Babel compile with the inbrowser Babel transpiler
    because it is not inside the <script> tag the transpiler is looking for
    and throws an error in the web console
*/

console.log("In app.js");