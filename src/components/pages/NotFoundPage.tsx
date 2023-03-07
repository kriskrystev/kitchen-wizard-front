import { NavLink } from "react-router-dom";

function NotFoundPage() {
	return (
		<>
			<h1>404 not found</h1>
			<p>Nothing to see here, <NavLink to="/">Go Back</NavLink> to landing page</p>
		</>
	)
}

export default NotFoundPage;
