import jwt from "jsonwebtoken";

export default function authenticate(req, res, next) {
	const token = req.header("Authorization");
	if (!token) return res.status(401).send("Access denied. You have not provided the token.");

	const bearerToken = token.split(" ")[1];

	try {
		const decoded = jwt.verify(bearerToken, "my_temporary_secret");
		req.user = decoded;
		next();
	} catch (ex) {
		res.status(400).send("Token is Invalid.");
	}
}