const validate  = (schema) => async (req, res, next) => {
    try {
        console.log("Raw request body before validation:", req.body);  // Debug log

        const parseBody = await schema.parseAsync(req.body);

        console.log("Parsed request body after validation:", parseBody);  // Debug log

        req.body = parseBody;
        next();
    } 
    catch (error) {
        console.error("Validation error:", error.errors);  // Debug log for errors
        const msg = error.errors[0].message;
        res.status(400).json({ message: msg });    
    }
};

module.exports = validate;
