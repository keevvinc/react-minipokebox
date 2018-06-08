import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class BackButton extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	render() {
		return (
			<Button outline color="danger" onClick={this.context.router.history.goBack}>{this.props.children}</Button>
		)
	}
}

export default BackButton;