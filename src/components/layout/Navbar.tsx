import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar(props: any) {
	return (
		<Box>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Button color="inherit" component={Link} to="/">Kitchen Wizard</Button>
					</Typography>
					{/* {
						!props.accessToken ?
							<Button color="inherit" component={Link} to="/login">
								<LoginIcon/>
								<Typography variant="subtitle2" ml={1}>Login</Typography>
							</Button> :
							<Button color="inherit" onClick={props.onUserLogout}>
								<Typography variant="subtitle2" mr={1}>Logout</Typography>
								<LogoutIcon/>
							</Button>
					} */}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
