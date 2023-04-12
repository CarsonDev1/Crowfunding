import React from "react";
import { Link } from "react-router-dom";

function LayoutAuthentication(props) {
	const { children } = props;
	return (
		<div className="w-full min-h-screen bg-lite p-10">
			<Link to="/">
				<img src="/Logo.png" alt="Logo" />
			</Link>
		</div>
	);
}

export default LayoutAuthentication;
