import React from "react";
import PropsTypes from "prop-types";

function Button({ type, children }) {
	return <button type={type}>{children}</button>;
}
Button.propTypes = {
	type: PropsTypes.string.isRequired,
	children: PropsTypes.node,
};
export default Button;
