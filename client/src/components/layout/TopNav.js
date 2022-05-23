import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const TopNav = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({});

	useEffect(() => {
		const userInfo = JSON.parse(sessionStorage.getItem("user"));
		setUser(userInfo);
	}, []);

	const handleOnLogout = () => {
		sessionStorage.removeItem("user");
		navigate("/login");
	};

	return (
		<Navbar bg="info" expand="md">
			<Container>
				<Navbar.Brand href="/">ET</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{user?._id ? (
							<>
								Welcome {user.name}{" "}
								<Button variant="primary" onClick={handleOnLogout}>
									Logout
								</Button>
							</>
						) : (
							<>
								<LinkContainer to="/">
									<Nav.Link>Login</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/register">
									<Nav.Link>Register</Nav.Link>
								</LinkContainer>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
