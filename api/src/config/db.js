import mongoose from "mongoose";

export const dbConnection = () => {
	try {
		const conSting = "mongodb://localhost:27017/expenses_tracker";
		const con = mongoose.connect(conSting);

		con && console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
};
