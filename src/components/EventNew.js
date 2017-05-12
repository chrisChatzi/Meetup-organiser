import React, { PropTypes } from 'react'

const Event = ( { state, goBack, save, general, add,
					partName, partGuests, partDel } ) => (
	<div className="event">
	{/*header*/}
		<div className="header">
			<div className="num item">
				<button onClick={goBack}>Back</button>
			</div>
			<div className="new item">
				&nbsp;
			</div>
			<div className="total item">
				<button onClick={save}>Save</button>
			</div>
		</div>
	{/*left side - name fee etc.*/}
		<div className="left">
		{/*review*/}
			<div id="total" className="total">
				<div className="head">Preview</div>
				<div className="row">
					<div className="block">
						<div className="top">Participants</div>
						<div className="bot">{state.participants.length}</div>
					</div>
					<div className="block">
						<div className="top">Total cost</div>
						<div className="bot">{state.total} &euro;</div>
					</div>
				</div>
			</div>
		{/*general info*/}
			<div className="general">
				<div className="head">General info</div>
				<div className="row">
					<div className="label">Name</div>
					<div className="val">
						<input className={(state.nameCheck) ? "error" : ""}
							value={state.name} placeholder="Name of event"
							onChange={(e)=>general(e, "name")} />
					</div>
				</div>
				<div className="row">
					<div className="label">Type</div>
					<div className="val">
						<select className={(state.typeCheck) ? "error" : ""}
							defaultValue={state.type}  onChange={(e)=>general(e, "type")}>
							<option value="default">-- Choose type</option>
							<option value="meeting">Meeting</option>
							<option value="birthday">Birthday</option>
							<option value="seminar">Seminar</option>
							<option value="trade">Trade show</option>
							<option value="awars">Awards</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="label">Participation fee</div>
					<div className="val">
						<input className={(state.feeCheck) ? "error" : ""}
							value={state.fee} placeholder="Min. 1" onChange={(e)=>general(e, "fee")}/>
					</div>
				</div>
				<div className="row">
					<div className="label">Max participants</div>
					<div className="val">
						<input className={(state.maxCheck) ? "error" : ""}
							value={state.max} placeholder="Min. 1" onChange={(e)=>general(e, "max")}/>
					</div>
				</div>
			</div>
		</div>
	{/*right side - participants list*/}
		<div className="right">
			<div className="list">
				<div className="head">Participants</div>
			{/*table head*/}
				<div className="row rowHead">
					<div className="index">#</div>
					<div className="name">Name</div>
					<div className="guests">Guests</div>
					<div className="total">Total</div>
					<div className="delete">Del</div>
				</div>
			{/*table rows*/}
				{(state.participants.length > 0) ? state.participants.map( (v,i) =>
					<div className="row" key={i}>
						<div className="index">{(i+1)}</div>
						<div className="name">
							<input className={(state.partNameChecks[i]) ? "error" : ""}
								value={v.name} placeholder="Name" onChange={(e)=>partName(e, i)} />
						</div>
						<div className="guests">
							<input className={(state.partGuestsChecks[i]) ? "error" : ""}
								value={v.guests} placeholder="Guests" onChange={(e)=>partGuests(e, i)} />
						</div>
						<div className="total">{v.total} &euro;</div>
						<div className="delete" onClick={()=>partDel(i)}>
							<i className="fa fa-trash"></i>
						</div>
					</div>
				) : <div className="row">No participants added yet</div>}
			{/*table add new row*/}
				<div className="row">
					<button onClick={add}>Add participant</button>
				</div>
			</div>
		</div>
	</div>
)

export default Event