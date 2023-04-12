import React from "react";
import { Link } from "react-router-dom";

function LayoutAuthentication(props) {
	const { children } = props;
	return (
		<div className="w-full min-h-screen bg-lite p-10">
			<Link to="/" className="inline-block mb-5 lg:mb-16">
				<img src="/Logo.png" alt="Logo" />
			</Link>
			<div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati, similique quia odit, at
				dolorem veritatis ex odio dignissimos in molestias eligendi architecto quas illum eveniet sed. Ab, qui
				quae.
			</div>
		</div>
	);
}

export default LayoutAuthentication;
