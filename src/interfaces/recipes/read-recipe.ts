import { RecipeBase } from "./recipe-base";
import { ReadIngredient } from "../ingredients/read-ingredient";

export interface ReadRecipe extends RecipeBase<ReadIngredient> {
	id: string;
}
