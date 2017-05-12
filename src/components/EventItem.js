import React, { PropTypes } from 'react'

const EventItem = ( { show, event, open, del } ) => (
	<div className="eventItem" onClick={open} style={{display:show}}>
		<div className="row name">{event.name}</div>
		<div className="row type">{event.type.charAt(0).toUpperCase()+event.type.slice(1)}</div>
		<div className="row part">{event.participants.length+"/"+event.max} participants</div>
		<div className="row total">Total: {event.total} &euro;</div>
		<div className="row delete" onClick={del}><i className="fa fa-trash delete"></i></div>
	</div>
)

export default EventItem