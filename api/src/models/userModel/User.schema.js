import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			index: 1,
		},
		password: {
			type: String,
			required: true,
			minLength: [6, "Password must be at least 6 characters"],
		}
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", UserSchema);
