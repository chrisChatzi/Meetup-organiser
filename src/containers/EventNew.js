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
		edit : state.main.eventOnEdit
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

		let name = (this.props.eventOnEdit) ? this.props.eventOnEdit.name : "";
		let type = (this.props.eventOnEdit) ? this.props.eventOnEdit.type : "default";
		let fee = (this.props.eventOnEdit) ? this.props.eventOnEdit.fee : "";
		let max = (this.props.eventOnEdit) ? this.props.eventOnEdit.max : "";
		let participants = (this.props.eventOnEdit) ? this.props.eventOnEdit.participants : [];
		let total = (this.props.eventOnEdit) ? this.props.eventOnEdit.total : 0;
		this.state = {
			name,
			type,
			fee,
			max,
			participants,
			total
		}
	}

	componentDidMount(e) {

	}

	render() {	
		return (
			<div>
				<EventC state={this.state} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventNew);