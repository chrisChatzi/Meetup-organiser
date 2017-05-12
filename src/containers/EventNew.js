/*
	Event component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EventC from '../components/EventNew.js'
import {  } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state) {
	return {
		
	};
}

function mapDispatchToProps(dispatch) {
	return {
		change_path: (category, product, categories) => {
			if(product) dispatch(get_products_frontend(category, product))
			dispatch(change_path(category, product, categories))
		},
	};
}

class EventNew extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);
	}

	componentDidMount(e) {

	}

	render() {	
		return (
			<div>
				<EventC />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventNew);