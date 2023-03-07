import { Box, Button, Container, Divider, Typography } from "@mui/material";
import VideoBg from '../../assets/cookingvideo.mp4';
import { Link } from "react-router-dom";

function LandingPage() {
	return (
		<Box sx={wrapperBox}>
			<video loop autoPlay muted style={{ "filter": "brightness(50%)" }}>
				<source src={VideoBg} type="video/mp4"/>
			</video>

			<Container sx={container}>
				<Box sx={{ textAlign: 'center', marginBottom: '300px' }}>
					<Typography sx={recipesManagerText} variant="h2" component="div">
						Upgrade your cooking
					</Typography>
					<Divider variant="middle" sx={dividerStyles}/>
					<Typography sx={manageRecipesText}>Manage your recipes and create shopping lists</Typography>
					<Button variant="contained" component={Link} to="/auth/sign-up">Join now</Button>
				</Box>
			</Container>
		</Box>
	);
}

const wrapperBox = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%'
}

const container = {
	justifyContent: 'center',
	alignItems: 'center',
	display: 'flex',
	position: 'absolute',
	left: '0',
	right: '0',
	top: '300px',
	color: 'white'
}

const recipesManagerText = {
	fontFamily: 'Roboto Condensed, sans-serif',
	fontWeight: '700',
	fontSize: '48px',
	lineHeight: '1.2',
	textTransform: 'uppercase',
	textAlign: 'center'
}

const dividerStyles = {
	width: '25%',
	marginTop: '20px',
	marginBottom: '67px',
	borderBottomWidth: 'thick',
	marginLeft: 'auto',
	marginRight: 'auto',
	background: 'white'
}

const manageRecipesText = {
	fontFamily: 'Work Sans, sans-serif',
	fontWeight: '300',
	fontSize: '20px',
	lineHeight: '1.334',
	marginBottom: '32px'
}

export default LandingPage;
