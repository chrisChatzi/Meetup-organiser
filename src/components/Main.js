import React, { PropTypes } from 'react'
import EventItem from './EventItem.js'

const Main = ( { state, events, totalCost, createEvent, clickEvent, delEvent, filter } ) => (
	<div className="main">
	{/* header */}
		<div className="header">
			<div className="item">
				<input placeholder="Filter by name" value={state.filter} onChange={filter} />
			</div>
			<div className="num item">{"Events: "+events.length}</div>
			<div className="total item">{"Total cost: "+totalCost} &euro;</div>
		</div>
	{/* events */}
		{(events.length > 0) ? 
			events.map( (v,i) =>
				<EventItem show={(v.name.indexOf(state.filter) >= 0) ? "block" : "none"} 
				event={v} open={(e)=>clickEvent(e, i)} del={()=>delEvent(i)} key={i} />
		) : <div className="none">There are not any events yet</div> }
	{/* add new */}
		<div className="addItem" onClick={createEvent}><i className="fa fa-plus"></i></div>
	</div>
)

export default Main