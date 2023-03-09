import { Button, Container, Grid, Typography } from "@mui/material";
import { useGetRecipesQuery } from "../../../app/recipes/recipeApi";
import RecipeCard from "./RecipeCard";
import * as React from 'react';
import Search from "../../shared/Search";
import LoadingList from "../../shared/LoadingList";
import AddIcon from '@mui/icons-material/Add';

function RecipesList() {
	const { data, isLoading, error } = useGetRecipesQuery();

	if (error) {
		return <p>There was an error fetching your recipes</p>;
	}

	const gridData = () => {
		const recipeCards = data.map((a: any, index: number) => (
			<Grid item xs={4} sm={4} md={4} key={index}>
				<RecipeCard title={a.title} description={a.description} time={a.time}/>
			</Grid>
		));

		if (!recipeCards.length) {
			return (
				<Grid item xs={4} sm={4} md={4}>
					You don't have any recipes yet.
				</Grid>
			)
		}

		return recipeCards;
	}

	const renderListView = () => {
		return (
			<Grid item container flexDirection="column" alignItems="center">
				<Typography variant="h5">Recipes</Typography>

				<Grid item container flexDirection="row" justifyContent="space-between" alignItems="center" mb={4}>
					<Grid item>
						<Search placeholder="Search Recipes"/>
					</Grid>
					<Grid item>
						<Button variant="outlined" startIcon={<AddIcon/>}>
							New
						</Button>
					</Grid>
				</Grid>

				{
					<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
						{isLoading ? <LoadingList listName="recipes"/> : (gridData())}
					</Grid>
				}
			</Grid>
		);
	};

	return (
		<Container maxWidth="lg" sx={{ mt: 1 }}>
			<Grid container justifyContent={isLoading ? "center" : ''}>
				{renderListView()}
			</Grid>
		</Container>
	)
}

export default RecipesList;
