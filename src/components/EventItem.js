import React, { PropTypes } from 'react'

const EventItem = ( { event, open } ) => (
	<div className="eventItem" onClick={open} >
		<div className="row name">{event.name}</div>
		<div className="row type">{event.type}</div>
		<div className="row part">{event.participants.length+"/"+event.max}</div>
		<div className="row total">{event.total} &euro;</div>
	</div>
)

export default EventItem