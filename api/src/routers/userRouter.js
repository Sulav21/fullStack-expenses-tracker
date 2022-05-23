import express from "express";
import { insertUser, findUser } from "../models/userModel/User.model.js";
const router = express.Router();

//get user
router.get("/", (req, res) => {
	res.send("get user");
});

//register a user
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const result = await insertUser(req.body);

		result?._id
			? res.json({
					status: "success",
					message: "User registered successfully. You may login now.",
			  })
			: res.json({
					status: "error",
					message: "User registered failed, please try again later",
			  });
	} catch (error) {
		console.log(error.email);
		let message = error.message;
		if (error.message.includes("duplicate key error collection")) {
			message = "User already exists using this email";
		}

		res.json({
			status: "error",
			message,
		});
	}
});

//login user
router.post("/login", async (req, res) => {
	try {
		const user = await findUser(req.body);

		user?._id
			? res.json({
					status: "success",
					user,
			  })
			: res.json({
					status: "error",
					message: "Invalid login credentials",
			  });
	} catch (error) {
		console.log(error);
		res.json({
			status: "error",
			message: error.message,
		});
	}
});

export default router;
