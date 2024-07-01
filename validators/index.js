const { query, validationResult } = require("express-validator");

const validateVisitorName = [
  query("visitor_name").notEmpty().withMessage("visitor_name is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateVisitorName };
