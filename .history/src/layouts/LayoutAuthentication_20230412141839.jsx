import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

function LayoutAuthentication(props) {
	const { children, heading = "" } = props;
	return (
		<div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate">
			<img
				src="/ellipse.png"
				alt="back-ground"
				className="hidden lg:absolute pointer-events-none bottom-0 left-0 right-0 z-[-1]"
			/>
			<Link to="/" className="inline-block mb-5 lg:mb-16">
				<img src="/Logo.png" alt="Logo" />
			</Link>
			<div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
				<h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
					{heading}
				</h1>
				{children}
			</div>
		</div>
	);
}
LayoutAuthentication.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
	FallbackComponent: ErrorComponent,
});
