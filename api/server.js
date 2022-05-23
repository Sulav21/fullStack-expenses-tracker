import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// setups middleware
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// bd connection
import { dbConnection } from "./src/config/db.js";
dbConnection();

//middleware
import { useAuth } from "./src/middlewares/authMiddleware.js";

// apis
import userRouter from "./src/routers/userRouter.js";
import expensesRouter from "./src/routers/expensesRouter.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/expenses", useAuth, expensesRouter);

app.get("*", (req, res) => {
	res.status(404).send("<h1>404 Not found</h1>");
});

app.listen(PORT, error => {
	error && console.log(error);

	console.log(`Server is running on port ${PORT}`);
});
