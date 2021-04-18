const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
	const token = req.headers['x-access-token'] || req.body.token || req.query.token

	if(token){
        const API_SECRET_KEY = process.env.API_SECRET_KEY;
		jwt.verify(token, API_SECRET_KEY, (err, decoded) => {
			if (err){
				res.status(401).json({
					status: false,
					message: 'Failed to authenticate token.',
                    code : '0988'
				})
			}else{
				req.decode = decoded;
				next();
			}
		});
	}else{
        res.status(401).json({
            status: false,
            message: 'No token provided.',
            code : '0987'
        })
	}
};