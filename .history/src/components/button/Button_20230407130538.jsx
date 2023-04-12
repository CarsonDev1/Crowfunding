import React from "react";
import PropTypes from "prop-types";

function Button({ type = "button", children, className = "", isLoading = false, ...rest }) {
	const child = !!isLoading ? (
		<div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin border-b-transparent"></div>
	) : (
		children
	);
	return (
		<button
			className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px] text-white ${className}`}
			type={type}
			{...rest}
		>
			{child}
		</button>
	);
}
Button.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.node,
	isLoading: PropTypes.bool,
};
export default Button;
