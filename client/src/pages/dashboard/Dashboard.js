import React, { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../components/custome-table/CustomTable";
import { ExpensesForm } from "../../components/expenses-form/ExpensesForm";
import { MainLayout } from "../../components/layout/MainLayout"; 

export const Dashboard = () => {
	const navigate = useNavigate();
	  
	
	const { isLoading, res} = useSelector(state => state.dashboard)

	useEffect(() => {
		const user = JSON.parse(sessionStorage.getItem("user"));
		if (!user?._id) {
			navigate("/");
		}
		// fetchExpenses();
	}, [navigate]);

	
	

	

 
	return (
		<MainLayout>
			<div>Dashboard</div>
			<hr />
			<Row className="mb-5">
				<Col>
					{isLoading && <Spinner variant="primary" animation="border" />}

					{res?.message && (
						<Alert variant={res.status === "success" ? "success" : "danger"}>
							{res?.message}
						</Alert>
					)}
				</Col>
			</Row>
			<ExpensesForm />

			<CustomTable   />
		</MainLayout>
	);
};
