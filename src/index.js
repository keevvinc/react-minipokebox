/*
	https://cdn.dribbble.com/users/477145/screenshots/4392670/daily_ui__006.jpg
	https://ixquick-proxy.com/do/spg/show_picture.pl?l=english&rais=1&oiu=http%3A%2F%2Fwww.ryanlewisdesign.com%2Fimages%2FPokedex-Stats.jpg&sp=2db3cc0dda933405b0a53d67205d7172
	https://ixquick-proxy.com/do/spg/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fi.pinimg.com%2F736x%2F98%2Fde%2F21%2F98de21e8adfc65bd2057d50e40e4d0f7--app-ui-mobile-design.jpg&sp=4d17a31e622ecaedf1e2628cd4eb8634
	https://ixquick-proxy.com/do/spg/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F721374%2Fscreenshots%2F2832639%2Fdribbble_1x.jpg&sp=838ae9e46e8766fb8fedf112bbf8ae14

	* npm run build - "shake tree"
	* Rework the PokemonSingle.js:9 [BAD APPROACH]
	* Make more pretty loader & independent component
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

import PokemonList from './components/Pokemon/PokemonList';
import PokemonSingle from './components/Pokemon/PokemonSingle';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
							<Route path="/" exact component={PokemonList} />
							<Route path="/pokemon/" component={PokemonSingle} />
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);