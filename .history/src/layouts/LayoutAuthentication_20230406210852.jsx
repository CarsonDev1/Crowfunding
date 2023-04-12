import React from "react";
import { Link } from "react-router-dom";

function LayoutAuthentication(props) {
	const { children, heading = "" } = props;
	return (
		<div className="w-full min-h-screen bg-lite p-10 relative">
			<img src="/ellipse.png" alt="" />
			<Link to="/" className="inline-block mb-5 lg:mb-16">
				<img src="/Logo.png" alt="Logo" />
			</Link>
			<div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
				<h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 text-center">{heading}</h1>
				{children}
			</div>
		</div>
	);
}

export default LayoutAuthentication;
