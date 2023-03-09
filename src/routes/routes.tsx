import { Navigate, Outlet, RouteObject } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/pages/LandingPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import SignIn from "../components/features/auth/login/SignInForm";
import SignUp from "../components/features/auth/register/SignUpForm";
import NonAuthProtectedRoute from "../components/layout/NonAuthProtectedRoute";
import RecipesList from "../components/features/recipes/RecipesList";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { Container } from "@mui/material";
import CreateRecipeForm from "../components/features/recipes/CreateRecipeForm";

const authRoutes: RouteObject[] = [
	{
		path: '/auth',
		element: (
			<Container maxWidth="xs">
				<Outlet/>
			</Container>
		),
		children: [
			{
				index: true,
				element: (
					<Navigate to="/auth/sign-in" replace/>
				)
			},
			{
				path: 'sign-in',
				element: (
					<NonAuthProtectedRoute>
						<SignIn/>
					</NonAuthProtectedRoute>
				)
			},
			{
				path: 'sign-up',
				element: <SignUp/>
			}
		]
	},
];

export const routes: RouteObject[] = [
	{
		path: "/",
		element: (
			<App/>
		),
		children: [
			...authRoutes,
			{
				path: "/recipes",
				element: (
					<ProtectedRoute>
						<Outlet/>
					</ProtectedRoute>
				),
				children: [
					{
						index: true,
						element: <RecipesList/>
					},
					{
						path: "new",
						element: <CreateRecipeForm/>
					},
					{
						path: "edit/:id",
						element: <CreateRecipeForm/>
					}
				]
			}
		]
	},
	{
		index: true,
		element: <LandingPage/>
	},
	{
		path: '*',
		element: <NotFoundPage/>
	}
];
