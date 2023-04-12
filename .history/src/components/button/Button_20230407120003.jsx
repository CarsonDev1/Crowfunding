import React from "react";
import PropTypes from "prop-types";

function Button({ type = "button", children, className = "", isLoading = false, ...rest }) {
	return (
		<button
			className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px] text-white ${className}`}
			type={type}
			{...rest}
		>
			{children}
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
