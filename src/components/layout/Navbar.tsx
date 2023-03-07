import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAuthenticatedUser } from "../../app/auth/authSelectors";
import { Login as LoginIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { logout } from "../../app/auth/authSlice";

function Navbar() {
	const { accessToken } = useAppSelector(selectAuthenticatedUser);
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		debugger;
		dispatch(logout());
	}

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Button color="inherit" component={Link} to="/">Kitchen Wizard</Button>
					</Typography>
					{
						!accessToken ?
							<Button color="inherit" component={Link} to="/auth/sign-in">
								<LoginIcon/>
								<Typography variant="subtitle2" ml={1}>Login</Typography>
							</Button> :
							<Button color="inherit" onClick={handleLogout}>
								<Typography variant="subtitle2" mr={1}>Logout</Typography>
								<LogoutIcon/>
							</Button>
					}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
