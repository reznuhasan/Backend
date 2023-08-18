// import jwt from 'jsonwebtoken';

// export const isVerified =
//   async (req, res, next) => {
//     try {
//       // ================ Authentication ==================
//       const token = req.headers.authorization?.split(' ')[1]
//       if (!token) {
//         return res.status(404).json({
//             message: "token not found"
//         })
//       }

//       const decoded = jwt.verify(token, "thisisarandomstring");

//       if (!decoded) {
//         throw new Error('Unauthorized User');
//       }

//     //   req.body.isAuthorized = decoded;
//       next();
//     } catch (error) {
//       return next(error);
//     }
//   };