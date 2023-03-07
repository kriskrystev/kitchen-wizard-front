import { RecipeType } from "../../enums/recipe-type.enum";

export interface RecipeBase<T> {
	title: string;
	description: string;
	type: RecipeType;
	ingredients: T[];
	price: number;
	time?: Date;
}
