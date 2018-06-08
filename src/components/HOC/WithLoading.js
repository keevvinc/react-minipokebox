import React from 'react';

function WithLoading(Component) {
	var textCenter = { textAlign: 'center' }
	
	return function WihLoadingComponent({ isLoading, ...props }) {
		if (!isLoading)
			return (<Component {...props} />);
		
		return (
			<h2 style={textCenter}>Fetching data ...<br/><br/><i className="fa fa-2x fa-spinner fa-pulse"></i></h2>
		);
	}
}

export default WithLoading;