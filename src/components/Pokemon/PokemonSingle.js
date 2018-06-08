import React,{Component} from 'react';
import BackButton from '../HOC/BackButton';

class PokemonSingle extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.location.pathname.slice(-1),
			name: '',
			image: ''
		}
	}
	
	componentDidMount() {
		this.fetchPokemonDetails();
	}

	fetchPokemonDetails() {
		const API = 'https://pokeapi.co/api/v2/',
				key = 'pokemon/' + this.state.id + '/';

		fetch(API + key, { crossDomain: true, method: 'GET', headers: { 'Content-Type': 'application/json' } })
			.then((response) => response.json())
			.then(data => {
				console.log(data);
				this.setState({
					name: data.name,
					weight: data.weight,
					image: data.sprites.front_default
				})
			})
	}

	render() {
		if(this.state.image === '') {
			return (
				<div>
					<h2 className="text-center"><br />Fetching data<br /><br /></h2>
					<p className="text-center"><i className="fa fa-3x fa-spinner fa-pulse"></i></p>
				</div>
			)
		} else {
			return (
				<div>
					<p><img src={this.state.image} alt={'image of '+this.state.name} /></p>
					<p>Hey, my name is <u>{this.state.name}</u> and my weight is <u>{this.state.weight}</u> pounds <br/><br/></p>
					<BackButton>Return home</BackButton>
				</div>
			)
		}
	}
}

export default PokemonSingle;