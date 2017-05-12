import React, { PropTypes } from 'react'

const EventItem = ( {event} ) => (
	<div className="eventItem">
		<div className="row name">{event.name}</div>
		<div className="row type">{event.type}</div>
		<div className="row part">{event.part+"/"+event.max}</div>
		<div className="row total">{event.total}</div>
	</div>
)

export default EventItem