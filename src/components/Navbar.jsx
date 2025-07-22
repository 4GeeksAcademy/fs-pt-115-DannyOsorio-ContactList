import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<h1 className="navbar-brand mb-0">CONTACT LIST</h1>
				</Link>
			</div>
		</nav>
	);
};