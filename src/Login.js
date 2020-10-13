import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
const signIn = ()=>{

}

	return (
		<div className="login">
			<h2>i am the login page</h2>
			<div className="login__logo">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4fuKEZg0iEusHY0x2myIL_xHdnAbd9sbzSA&usqp=CAU"
					alt=""
				/>
			</div>
            <Button onClick={signIn}>signIn</Button>
		</div>
	);
}

export default Login;
