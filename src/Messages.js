import { Avatar } from '@material-ui/core';
import React from 'react';
import './Messages.css';

function Messages() {
	return (
		<div className="messages">
			<Avatar />
			<div className="messages__info">
				<h4>
					Avinash
					<span className="message__timestamp">this is a timestamp</span>
				</h4>
				<p>This is message</p>
			</div>
		</div>
	);
}

export default Messages;
