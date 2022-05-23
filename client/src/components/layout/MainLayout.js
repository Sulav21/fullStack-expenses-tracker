import React from "react";
import { Container } from "react-bootstrap";
import { TopNav } from "./TopNav";

export const MainLayout = ({ children }) => {
	return (
		<div>
			{/* header */}
			<TopNav />

			{/* dynamic content */}
			<main className="main">
				<Container>{children}</Container>
			</main>

			{/* footer */}
			<footer className="footer bg-dark text-light p-5 text-center">
				&copy; right all rights reserved. Build with 💖 by Me.
			</footer>
		</div>
	);
};
