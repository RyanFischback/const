const User = require('../models/userModel')

const loginUser = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await user.password === password) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

}


  
module.exports = {
    loginUser
}
