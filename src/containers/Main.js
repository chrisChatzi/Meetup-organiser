/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'
import { event_to_edit, del_event } from '../actions.js'
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
		delEvent: (event) => {
			dispatch(del_event(event))
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
		this.delEvent = this.delEventHandler.bind(this);
	}

	componentDidMount(e) {

	}
	//create new event
	createEventHandler(){
		history.push("/event");
	}
	//click ono event to edit
	clickEventHandler(e, i){
		if(e.target.className.indexOf("delete") < 0)
			this.props.clickEvent(this.props.events[i])
	}
	//delete event
	delEventHandler(i){
		this.props.delEvent(this.props.events[i])
	}

	render() {	
		let { events, totalCost } = this.props
		let { createEvent, clickEvent, delEvent } = this

		return (
			<div>
				<MainC state={this.state} events={events} totalCost={totalCost} 
					createEvent={createEvent} clickEvent={clickEvent} delEvent={delEvent} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);