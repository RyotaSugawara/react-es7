let React = require('react');
import {mount} from './app/lib/tools';

// For mounting App component into <section id="app"></section> use:
//
// import App from './app/components/App';
// mount(App, 'app');
//
// else

import App from './app/components/App';
import Home from './app/components/Home';
import About from './app/components/About';

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="home" handler={Home}/>
        <Route name="about" handler={About}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

// or HTML5 pushstate history:
//Router.run(routes, Router.HistoryLocation, function (Handler) {
//    React.render(<Handler/>, document.getElementById('app'));
//});
