import jwt from 'jsonwebtoken';

export default {
  verifyToken(req, res, next) {
    const { token } = req.body;
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized Access'});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid Token' });
      }
      req.decoded = decoded;
      next();
    });
  },

};
