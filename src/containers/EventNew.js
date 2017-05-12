/*
	Event component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EventC from '../components/EventNew.js'
import { add_event } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state) {
	return {
		eventOnEdit : state.main.eventOnEdit
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveEvent: (event) => {
			dispatch(add_event(event))
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
		let flag = (this.props.eventOnEdit.name) ? true : false;
		console.log(flag)
		console.log(this.props.eventOnEdit)
		let name = (flag) ? this.props.eventOnEdit.name : "";
		let type = (flag) ? this.props.eventOnEdit.type : "default";
		let fee = (flag) ? this.props.eventOnEdit.fee : "";
		let max = (flag) ? this.props.eventOnEdit.max : "";
		let participants = (flag) ? this.props.eventOnEdit.participants : [];
		// console.log(participants)
		let total = (flag) ? this.props.eventOnEdit.total : 0;
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
			maxCheck : false,
			partNameChecks : [],
			partGuestsChecks : [],
		};

		this.goBack = this.goBackHandler.bind(this);
		this.save = this.saveHandler.bind(this);
		this.general = this.generalHandler.bind(this);
		this.add = this.addHandler.bind(this);
		this.partName = this.partNameHandler.bind(this);
		this.partGuests = this.partGuestsHandler.bind(this);
		this.partDel = this.partDelHandler.bind(this);
	}

	componentDidMount(e) {

	}

	//go back
	goBackHandler(){
		history.push("/")
	}
	//save
	saveHandler(){
		//CHECKS
		let error = false;
		this.setState({nameCheck : false, typeCheck : false, feeCheck : false, maxCheck : false});
		if(this.state.name.length < 1){
			this.setState({nameCheck : true});
			error = true;
		}
		if(this.state.type == "default"){
			this.setState({typeCheck : true});
			error = true;
		}
		if(this.state.fee.length < 1 || isNaN(this.state.fee)){
			this.setState({feeCheck : true});
			error = true;
		}
		if(this.state.max.length < 1 || isNaN(this.state.max)){
			this.setState({maxCheck : true});
			error = true;
		}
		for(let i=0; i<this.state.participants.length; i++){
			let arrNames = this.state.partNameChecks;
			let arrGuests = this.state.partGuestsChecks;
			arrNames[i] = false;
			arrGuests[i] = false;
			if(this.state.participants[i].name.length < 1){
				arrNames[i] = true;
				error = true;
			}
			if(this.state.participants[i].guests.length < 1 || isNaN(this.state.participants[i].guests)){
				arrGuests[i] = true;
				error = true;
			}
			this.setState({partNameChecks : arrNames, partGuestsChecks : arrGuests});
		}
		//check if max partitipants correct
		if(this.state.max && this.state.participants.length >= this.state.max){
			alert("Max number of participants fulfilled");
			error = true;
		}
		//create event object
		let obj = {
			name : this.state.name,
			type : this.state.type,
			fee : this.state.fee,
			max : this.state.max,
			participants : this.state.participants,
			total : this.state.total
		}
		if(!error){
			this.props.saveEvent(obj)
		}
	}

	//general info inputs change
	generalHandler(e, type){
		let arr = this.state.participants;
		let total = 0;
		switch(type){
			case "name":
				this.setState({nameCheck : false});
				this.setState({name : e.target.value});
			break;
			case "type":
				this.setState({typeCheck : false});
				this.setState({type : e.target.value});
			break;
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
		let arrChecks = this.state.partNameChecks;
		arr.push({name:"",guests:"",total:0});
		arrChecks.push(false)
		this.setState({participants : arr, partNameChecks : arrChecks, partGuestsChecks : arrChecks});
	}
	//delete participant
	partDelHandler(i){
		let arr = this.state.participants;
		let arrNameChecks = this.state.partNameChecks;
		let arrGuestsChecks = this.state.partGuestsChecks;
		arr.splice(i, 1);
		arrNameChecks.splice(i, 1);
		arrGuestsChecks.splice(i, 1);
		this.setState({
			participants : arr, 
			partNameChecks : arrNameChecks, 
			partGuestsChecks :arrGuestsChecks
		});
		//calculate total cost of event
		let total = 0;
		for(let i=0; i<arr.length; i++)
			total += arr[i].total;
		this.setState({total});
	}
	//change name of participant
	partNameHandler(e, i){
		let arr = this.state.participants;
		let arrChecks = this.state.partNameChecks;
		arr[i].name = e.target.value;
		this.setState({participants : arr});
		//check
		if(arr[i].name.length < 1) arrChecks[i] = true;
		else arrChecks[i] = false;
		this.setState({partNameChecks : arrChecks});
	}
	//change number of guests for participant
	partGuestsHandler(e, i){
		let arr = this.state.participants;
		let arrChecks = this.state.partGuestsChecks;
		arr[i].guests = e.target.value;
		arr[i].total = this.state.fee * e.target.value;
		this.setState({participants : arr});
		//check
		if(arr[i].guests.length < 1 || isNaN(arr[i].guests)) arrChecks[i] = true;
		else arrChecks[i] = false;
		this.setState({partGuestsChecks : arrChecks});
		//calculate total cost of event
		let total = 0;
		for(let i=0; i<arr.length; i++)
			total += arr[i].total;
		this.setState({total});
	}

	render() {
		let { goBack, save, general, add, partName, partGuests, partDel } = this

		return (
			<div>
				<EventC state={this.state}
					goBack={goBack} save={save} general={general} add={add}
					partName={partName} partGuests={partGuests} partDel={partDel} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventNew);