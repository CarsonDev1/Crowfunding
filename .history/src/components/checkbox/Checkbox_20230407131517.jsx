import React from "react";

function Checkbox() {
	return (
		<label className="inline-block w-5 h-5 border rounded cursor-pointer border-strock">
			<input type="check" className="hidden" />
		</label>
	);
}

export default Checkbox;
