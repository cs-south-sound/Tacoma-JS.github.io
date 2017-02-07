/**
    ## main.js

    The single entry point for the requirejs script loader module.
    API docs: [data-main](http://requirejs.org/docs/api.html#data-main)
*/

require.config({
	paths: {
		//"react": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min",
		//"react-dom": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min",
		"jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min",
		"bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min",
		"showdown": "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.2.3/showdown.min",
		"app": "app"
	},
	"shim": {
		"bootstrap": {"deps":["jquery"]},
		"app": {"deps":["jquery"]},
		"app": {"deps":["showdown"]}
	}
})

//require(["react", "react-dom", "jquery", "bootstrap", "showdown", "app"]);
require(["jquery", "bootstrap", "showdown", "app"]);


/**
   ## According to instructions load css separately from requirejs
*/
function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

/**
   CSS Bootswatch Theme: http://bootswatch.com/
*/
loadCss("https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/sandstone/bootstrap.css");

