/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'
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

class Main extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);
	}

	componentDidMount(e) {

	}
	componentWillUnmount() {
		
	}

	render() {	
		return (
			<div>
				<MainC />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);