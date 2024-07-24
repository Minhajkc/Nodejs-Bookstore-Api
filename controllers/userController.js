const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ msg: 'Please provide name, email, and password.' });
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists.' });
        }
        user = new User({
            username,
            email,
            password: await bcrypt.hash(password, 12)
        });

        await user.save();
        const payload = { user: { id: user.id } };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '10h' },
            (err, token) => {
                if (err) throw err;
                res.json( 'User Created Successfully' );
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
            return res.status(400).json({ msg: 'Password incorrect.' });
        }
        const payload = { user: { id: user.id } };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '10h' },
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token, {
                    httpOnly: true,  
                });
                res.json({ msg: 'Login successful' });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json({username:user.username,email:user.email});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const logout = (req, res) => {
    try {
        res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
        res.status(200).json({ msg: 'Logout successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
module.exports = { 
    register,
    login,
    getProfile,
    logout
};
