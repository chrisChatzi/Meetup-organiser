/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'
import { event_to_edit } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state) {
	return {
		events : state.main.events,
		totalCost : state.main.totalCost,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		clickEvent: (event) => {
			dispatch(event_to_edit(event))
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

		this.createEvent = this.createEventHandler.bind(this);
		this.clickEvent = this.clickEventHandler.bind(this);
	}

	componentDidMount(e) {

	}
	
	createEventHandler(){
		history.push("/event");
	}

	clickEventHandler(i){
		this.props.clickEvent(this.props.events[i])
	}

	render() {	
		let { events, totalCost } = this.props
		let { createEvent, clickEvent } = this

		return (
			<div>
				<MainC events={events} totalCost={totalCost} 
					createEvent={createEvent} clickEvent={clickEvent} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);