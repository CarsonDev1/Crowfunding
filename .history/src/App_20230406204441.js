import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
	return (
		<Routes>
			<Route path="/sign-up"></Route>
		</Routes>
	);
}

export default App;
