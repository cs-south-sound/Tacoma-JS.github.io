/**
    ## main.js

    The single entry point for the requirejs script loader module.
    API docs: [data-main](http://requirejs.org/docs/api.html#data-main)
*/

require.config({
	paths: {
		"react": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min",
		"react-dom": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min",
		"jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min",
		"bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min",
		"app": "app"
	}
})

require(["react", "react-dom", "jquery", "bootstrap", "app"]);