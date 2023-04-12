import React from "react";
import { Link } from "react-router-dom";

function LayoutAuthentication(props) {
	const { children } = props;
	return (
		<div className="w-full min-h-screen bg-lite p-10">
			<Link to="/" className="block mb-5 lg:mb-16">
				<img src="/Logo.png" alt="Logo" />
			</Link>
		</div>
	);
}

export default LayoutAuthentication;
