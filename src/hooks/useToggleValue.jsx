import { useState } from "react";

function useToggleValue(initialValue = false) {
	const [value, setValue] = useState(initialValue);
	const handleToggleValue = () => {
		setValue(!value);
	};
	return {
		value,
		handleToggleValue,
	};
}

export default useToggleValue;
