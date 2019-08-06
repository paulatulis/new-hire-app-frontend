import React from 'react'

export default function ErrorCode (props) {
	return (
		<div id="error-code">
			<h1>{props.code}</h1>
			{ props.messages && props.messages.map( (msg, index) => <p key={index}>{msg}</p> ) }
		</div>
	)
}