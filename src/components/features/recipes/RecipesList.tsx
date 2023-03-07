import { Container, Grid } from "@mui/material";
import { useGetRecipesQuery } from "../../../app/recipes/recipeApi";
import RecipeCard from "./RecipeCard";

function RecipesList() {
	const { data, isLoading, error } = useGetRecipesQuery();
	console.log(data);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>There was an error fetching your recipes</p>;
	}

	return (
		<Container maxWidth="lg" sx={{ mt: 1 }}>
			<h1>My Recipes</h1>

			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

				{
					data.map((a: any, index: number) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
							<RecipeCard title={a.title} description={a.description} time={a.time}/>
						</Grid>
					))
				}
			</Grid>
		</Container>
	)
}

export default RecipesList;
