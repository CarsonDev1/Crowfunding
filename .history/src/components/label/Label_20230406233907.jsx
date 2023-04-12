import React from "react";
import PropTypes from "prop-types";

function Label(props) {
	const { children } = props;
	return <label className="inline-block text-sm font-medium cursor-pointer text-text2">{children}</label>;
}
Label.propTypes = {
	children: PropTypes.node,
	htmlFor: PropTypes.string,
};
export default Label;
