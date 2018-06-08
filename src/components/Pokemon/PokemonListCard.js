import React from 'react';
import { Link } from 'react-router-dom';

const PokeListCard = props => {

	const pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

	return (
		<div className="card pokemonListCard">
			<img className="card-img-top" src={pokemonImage+props.anchor+'.png'} alt="" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<Link to={'/pokemon/' + props.anchor} className="btn btn-primary btn-xs">More info</Link>
			</div>
		</div>
	)
}

export default PokeListCard;