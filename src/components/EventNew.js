import React, { PropTypes } from 'react'

const Event = ( { state } ) => (
	<div className="event">
	{/*left side - name fee etc.*/}
		<div className="left">
		{/*general info*/}
			<div className="general">
				<div className="head">General info</div>
				<div className="row">
					<div className="label">Name</div>
					<div className="val"><input value={state.name} placeholder="Name of event"/></div>
				</div>
				<div className="row">
					<div className="label">Type</div>
					<div className="val">
						<select defaultValue={state.type}>
							<option value="default">Choose type</option>
							<option value="meeting">Meeting</option>
							<option value="birthday">Birthday</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="label">Participation fee</div>
					<div className="val"><input value={state.fee} placeholder="Min. 1"/></div>
				</div>
				<div className="row">
					<div className="label">Max participants</div>
					<div className="val"><input value={state.max} placeholder="Min. 1"/></div>
				</div>
			</div>
		{/*review*/}
			<div className="total">
				<div className="head">Preview</div>
				<div className="row">
					<div className="block">
						<div className="top">Participants</div>
						<div className="bot">{state.participants.length}</div>
					</div>
					<div className="block">
						<div className="top">Total cost</div>
						<div className="bot">{state.total}</div>
					</div>
				</div>
			</div>
		</div>
	{/*right side - participants list*/}
		<div className="right">
			<div className="list">
				<div className="head">Participants</div>
				{(state.participants.length > 0) ? state.participants.map( (v,i) =>
					<div className="row" key={i}>
						<div className="name"><input value={v.name} /></div>
						<div className="guests"><input value={v.guests} /></div>
						<div className="total">{v.total}</div>
						<div className="delete"><i className="fa fa-trash"></i></div>
					</div>
				) : <div className="row">No participants yet</div>}
				<div className="row"><button>Add participant</button></div>
			</div>
		</div>
	</div>
)

export default Event