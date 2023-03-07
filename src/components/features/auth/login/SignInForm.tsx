import { Alert, AlertTitle, Avatar, Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from "react-router-dom";
import { useUserLoginMutation } from "../../../../app/auth/authApi";
import { Controller, useForm } from "react-hook-form";
import { emailRules, requiredRule } from "../../../../constants/form-rules";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

export default function SignIn() {
	const [login, { isLoading, error, reset }] = useUserLoginMutation();
	const { control, handleSubmit } = useForm({ mode: "all" });

	const onSubmit = (data: any) => login(data);

	return (
		<>
			{error && (
				<Alert
					severity="error"
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={reset}
						>
							<CloseIcon fontSize="inherit"/>
						</IconButton>
					}
				>
					<AlertTitle>Error</AlertTitle>
					{error.data.message}
				</Alert>
			)}

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
				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
					<Controller
						name="email"
						control={control}
						defaultValue=""
						rules={emailRules}
						render={
							({
								 field,
								 fieldState
							 }) => (
								<TextField
									margin="normal"
									fullWidth
									id="email"
									label="Email Address"
									autoComplete="email"

									error={fieldState.invalid}
									helperText={fieldState.error?.message}

									value={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
									inputRef={field.ref}
								/>
							)}
					/>

					<Controller
						name="password"
						control={control}
						defaultValue=""
						rules={requiredRule}
						render={
							({
								 field,
								 fieldState
							 }) => (
								<TextField
									margin="normal"
									fullWidth
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"

									error={fieldState.invalid}
									helperText={fieldState.error?.message}

									value={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
									inputRef={field.ref}
								/>
							)}
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
