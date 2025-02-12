const z = require('zod');

const signUpSchema = z.object({
    name : z.string({required_error : "Name is required"}).trim().min(3, {message : "Name must be of atleast 3 characters"}),
    email : z.string({required_error : "Email is required"}).trim().email({ message : "Invalid email address"}),
    phone : z.string({required_error : "Phone number is required"}).trim().min(10, "Phone must be of atleast 10 digits").max(12, "Phone must of exactly 10 digits"),
    password : z.string({required_error : "Password is required"}).min(7, {message : "Password must be of atleast 7 characters"})
})

module.exports = signUpSchema