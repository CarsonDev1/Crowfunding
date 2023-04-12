import React from "react";
import PropsTypes from "prop-types";

function Button({ type = "button", children, className = "" }) {
	return (
		<button
			className={`flex items-center justify-center py-4 text-base font-semibold rounded-xl text-white ${className}`}
			type={type}
		>
			{children}
		</button>
	);
}
Button.propTypes = {
	type: PropsTypes.string.isRequired,
	className: PropsTypes.string,
	children: PropsTypes.node,
};
export default Button;
