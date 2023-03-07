import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Link} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from "react-router-dom";
import { useUserLoginMutation } from "../../../../app/auth/authApi";

export default function SignIn() {
	const [login, {isLoading, error}] = useUserLoginMutation();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		login({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon/>
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						disabled={isLoading}
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container justifyContent="center">
						<Grid item>
								<Link component={RouterLink} to="/auth/sign-up">
									{"Don't have an account? Sign Up"}
								</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	)
}
