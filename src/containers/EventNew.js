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
			total,
			nameCheck : false,
			typeCheck : false,
			feeCheck : false,
			maxCheck : false
		};

		this.general = this.generalHandler.bind(this);
		this.add = this.addHandler.bind(this);
		this.partName = this.partNameHandler.bind(this);
		this.partGuests = this.partGuestsHandler.bind(this);
		this.partDel = this.partDelHandler.bind(this);
	}

	componentDidMount(e) {

	}
	//general info inputs change
	generalHandler(e, type){
		let arr = this.state.participants;
		let total = 0;
		switch(type){
			case "name": this.setState({name : e.target.value}); break;
			case "type": this.setState({type : e.target.value}); break;
			case "fee": 
				if(isNaN(e.target.value)) this.setState({fee : e.target.value, feeCheck : true})
				else this.setState({fee : e.target.value, feeCheck : false});
				//calculate cost for each participant (fee*guests) and total cost
					for(let i=0; i<arr.length; i++){
						arr[i].total = e.target.value * arr[i].guests;
						total += arr[i].total;
					}
					this.setState({participants : arr, total});
			break;
			case "max": 
				if(isNaN(e.target.value)) this.setState({max : e.target.value, maxCheck : true})
				else this.setState({max : e.target.value, maxCheck : false}); 
			break;
		}
	}
	//add participant
	addHandler(){
		let arr = this.state.participants;
		arr.push({name:"",guests:"",total:0});
		this.setState({participants : arr});
	}
	//change name of participant
	partNameHandler(e, i){
		let arr = this.state.participants;
		arr[i].name = e.target.value;
		this.setState({participants : arr});
	}
	//change number of guests for participant
	partGuestsHandler(e, i){
		let arr = this.state.participants;
		arr[i].guests = e.target.value;
		arr[i].total = this.state.fee * e.target.value;
		this.setState({participants : arr});
		//calculate total cost of event
		let total = 0;
		for(let i=0; i<arr.length; i++)
			total += arr[i].total;
		this.setState({total});
	}
	//delete participant
	partDelHandler(i){
		let arr = this.state.participants;
		arr.splice(i, 1);
		this.setState({participants : arr});
		//calculate total cost of event
		let total = 0;
		for(let i=0; i<arr.length; i++)
			total += arr[i].total;
		this.setState({total});
	}

	render() {
		let { general, add, partName, partGuests, partDel } = this

		return (
			<div>
				<EventC state={this.state}
					general={general} add={add}
					partName={partName} partGuests={partGuests} partDel={partDel} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventNew);