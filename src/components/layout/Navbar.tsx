import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAuthenticatedUser } from "../../app/auth/authSelectors";
import { Login as LoginIcon } from "@mui/icons-material";
import AccountMenu from "../shared/AccountMenu";

function Navbar() {
	const { accessToken } = useAppSelector(selectAuthenticatedUser);

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
							<AccountMenu/>
					}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
