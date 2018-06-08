import React from 'react';
import { Alert } from 'reactstrap';

class DismissableMessage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true
		};

		this.onDismiss = this.onDismiss.bind(this);
	}

	onDismiss() {
		this.setState({ visible: false });
	}

	render() {
		return (
			<Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss} className="dismissableMessage">
				{this.props.children}
			</Alert>
		);
	}
}

export default DismissableMessage;