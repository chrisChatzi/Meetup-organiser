import init from '../initialState'
import history from '../history.js'

const state_update = (state = init.main, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case "ADD_EVENT": {
			let array = newstate.events;
			let error = false;
			for(let i=0; i<array.length; i++){
				if(array[i].name == action.event.name){
					alert("An event with that name already exists");
					error = true;
				}
			}
			if(!error){
				array.push(action.event);
				newstate.totalCost += action.event.total;
				newstate.events = array
				history.push("/")
			}
			return newstate
		}
		case "EDIT_EVENT": {
			let array = newstate.events;
			let idx = 0;
			for(let i=0; i<array.length; i++){
				if(array[i].name == action.event.name) idx = i
			}
			array[idx] = action.event;
			history.push("/")
			return newstate
		}
		case "DELETE_EVENT": {
			let array = newstate.events.slice();
			let idx = 0;
			for(let i=0; i<array.length; i++){
				if(array[i].name == action.event.name) idx = i
			}
			newstate.totalCost -= action.event.total;
			array.splice(idx, 1);
			newstate.events = array;
			history.push("/")
			return newstate
		}
		case "EVENT_EDIT": {
			newstate.eventOnEdit = action.event;
			history.push("/event");
			return newstate
		}
		default:
			return state || init.main
	}
}

export default state_update