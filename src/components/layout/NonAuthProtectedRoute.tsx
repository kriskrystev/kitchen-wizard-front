import { useAppSelector } from "../../app/hooks";
import { selectAuthenticatedUser } from "../../app/auth/authSelectors";
import { Navigate } from "react-router-dom";

function NonAuthProtectedRoute({children}: any): any {
	const { accessToken } = useAppSelector(selectAuthenticatedUser);

	if (accessToken) {
		return (
			<Navigate to="/recipes"/>
		)
	}

	return {...children};
}

export default NonAuthProtectedRoute;
