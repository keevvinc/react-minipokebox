import React, { Component } from 'react';
import PokemonListCard from './PokemonListCard';
import DismissableMessage from '../HOC/DismissableMessage';

class PokemonList extends Component {

	constructor() {
		super();
		this.state = {
			connection: true,
			pokemons: []
		}
	}

	componentDidMount() {
		var listOfPokemons = [];
		const API = 'https://pokeapi.co/api/v2/',
				key = 'pokemon/?limit=9';

		fetch(API+key, { crossDomain: true, method: 'GET', headers: { 'Content-Type': 'application/json' }})
			.then((response) => response.json())
			.then(data => {
				data.results.map((item, index) => { return listOfPokemons.push(item.name) })
				this.setState({ pokemons: listOfPokemons })
			})
			.catch(err => this.setState({ connection: false }));
	}

	renderListOfPokemons() {
		return (
			<div className="row">
			{
				this.state.pokemons.map((item, index) => {
					return (
						<div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
							<PokemonListCard name={item} anchor={index + 1} />
						</div>
					)
				})
			}
			</div>
		)
	}

	render() {
		if (this.state.connection === false)
			return (<DismissableMessage>Connection error!</DismissableMessage>)

		if(this.state.pokemons.length === 0)
			return (
				<div>
					<h2 className="text-center"><br />Fetching data<br /><br /></h2>
					<p className="text-center"><i className="fa fa-3x fa-spinner fa-pulse"></i></p>
				</div>
			)
		else
			return this.renderListOfPokemons()
	}
}

export default PokemonList;