const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'keep it secret, keep it safe!'

module.exports = (req, res, next) => {
	const { authorization } = req.headers;

	if (authorization) {
		jwt.verify(authorization, secret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'invalid token' })
			} else {
				req.token = decodedToken;
				next();
			}
		})
	} else {
		res.status(401).json({ you: 'shall not pass!' });
	}
};