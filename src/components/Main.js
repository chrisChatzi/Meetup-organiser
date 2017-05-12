import React, { PropTypes } from 'react'
import EventItem from './EventItem.js'

const Main = ( { state, events, totalCost, createEvent, clickEvent, delEvent } ) => (
	<div className="main">
	{/* header */}
		<div className="header">
			<div className="num item">{"Events: "+events.length}</div>
			<div className="new item">
				<button onClick={createEvent}>Create event</button>
			</div>
			<div className="total item">{"Total cost: "+totalCost} &euro;</div>
		</div>
	{/* events */}
		{(events.length > 0) ? 
			events.map( (v,i) =>
			<EventItem event={v} open={(e)=>clickEvent(e, i)} del={()=>delEvent(i)} key={i} />
		) : <div className="none">There are not any events yet</div> }
	</div>
)

export default Main