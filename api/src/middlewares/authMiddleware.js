import { getUser } from "../models/userModel/User.model.js";
export const useAuth = async (req, res, next) => {
	try {
		const { authorization } = req.headers;

		if (authorization) {
			const user = await getUser(authorization);
			return user?._id
				? next()
				: res.status(403).json({
						status: "error",
						message: "You are not authorized to access this resource",
				  });
		}

		res.status(403).json({
			status: "error",
			message: "You are not authorized to access this resource",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "error",
			message: "You are not authorized to access this resource",
		});
	}
};
