import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";

const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
	return (
		<Routes>
			<Route path="/sign-up" element={<SignUp />}></Route>
			<Route path="/sign-in" element={<SignIn />}></Route>
		</Routes>
	);
}

export default App;
