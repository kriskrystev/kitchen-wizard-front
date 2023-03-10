import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
	return (
		<>
			<CssBaseline/>

			<Navbar/>

			<Container component="main" sx={{mt: 12}}>
				<Outlet/>
			</Container>
		</>
	)
}

export default App;
