import { Avatar, Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { emailRules, passwordRules, requiredRule } from "../../../../constants/form-rules";

export default function SignUp() {

	const { control, handleSubmit } = useForm({ mode: "all" });

	const onSubmit = (data: any) => console.log(data);

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
					Sign up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Controller
								name="firstName"
								control={control}
								defaultValue=""
								rules={requiredRule}
								render={({
													 field,
													 fieldState
												 }) => (
									<TextField
										autoComplete="given-name"
										fullWidth
										id="firstName"
										label="First Name"
										error={fieldState.invalid}
										helperText={fieldState.error?.message}
										autoFocus

										value={field.value}
										onChange={field.onChange} // send value to hook form
										onBlur={field.onBlur} // notify when input is touched
										inputRef={field.ref}

									/>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name="lastName"
								control={control}
								defaultValue=""
								rules={requiredRule}
								render={(
									{
										field,
										fieldState
									}
								) => (
									<TextField
										required
										fullWidth
										id="lastName"
										label="Last Name"
										autoComplete="family-name"
										error={fieldState.invalid}
										helperText={fieldState.error?.message}

										value={field.value}
										onChange={field.onChange} // send value to hook form
										onBlur={field.onBlur} // notify when input is touched
										inputRef={field.ref}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								rules={emailRules}
								render={(
									{
										field,
										fieldState
									}
								) => (
									<TextField
										required
										fullWidth
										id="email"
										label="Email Address"
										autoComplete="email"
										error={fieldState.invalid}
										helperText={fieldState.error?.message}

										value={field.value}
										onChange={field.onChange} // send value to hook form
										onBlur={field.onBlur} // notify when input is touched
										inputRef={field.ref}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="password"
								control={control}
								defaultValue=""
								rules={passwordRules}
								render={(
									{
										field,
										fieldState
									}
								) => (
									<TextField
										required
										fullWidth
										label="Password"
										type="password"
										id="password"
										autoComplete="new-password"
										error={fieldState.invalid}
										helperText={fieldState.error?.message}

										value={field.value}
										onChange={field.onChange} // send value to hook form
										onBlur={field.onBlur} // notify when input is touched
										inputRef={field.ref}
									/>
								)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="center">
						<Grid item>
							<Link component={RouterLink} to="/auth/sign-in">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
