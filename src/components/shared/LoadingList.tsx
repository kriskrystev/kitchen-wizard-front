import { CircularProgress, Grid, Typography } from "@mui/material";

interface LoadingListProps {
	listName: string;
}

const LoadingList = ({ listName }: LoadingListProps) => {
	return (
		<Grid item container flexDirection="column" justifyContent="center" alignItems="center">
			<Grid item mb={2}>
				<Typography>Fetching list of {listName}</Typography>
			</Grid>

			<Grid item>
				<CircularProgress color="inherit"/>
			</Grid>
		</Grid>
	);
};

export default LoadingList;
