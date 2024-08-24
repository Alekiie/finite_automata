const authorizeInstructor = (req, res, next) => {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: "Forbidden: Only instructors can perform this action" });
    }
    next();
  };
  
  module.exports = authorizeInstructor;
  