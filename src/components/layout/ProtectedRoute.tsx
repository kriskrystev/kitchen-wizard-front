import { Navigate } from "react-router-dom"
import { useAppSelector } from '../../app/hooks';
import { selectAuthenticatedUser } from '../../app/auth/authSelectors';


function ProtectedRoute({ children }: any) {
	const { accessToken } = useAppSelector(selectAuthenticatedUser);

	if (!accessToken) {
		return <Navigate to="/auth/sign-in"/>;
	}

	return { ...children };
}

export default ProtectedRoute;
