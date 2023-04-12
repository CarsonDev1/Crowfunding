import { useState } from "react";

function useToggleValue(initialValue = false) {
	const [value, setValue] = useState(initialValue);
}

export default useToggleValue;
