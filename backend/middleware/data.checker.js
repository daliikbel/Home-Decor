const {body} = require('express-validator')
exports.validationData = [
    body('email','Please enter a valid email').isEmail(),
    body('password',"Password should be at least 8 characters").isLength({min:8})
]