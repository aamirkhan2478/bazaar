const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Quality = require('../models/qualityController');

const createQualityController = async (req, res, next) => {
	try {
		// Check if a user with the given email already exists
		const existingUser = await Quality.findOne({
			yourEmail: req.body.yourEmail,
		});

		if (existingUser) {
			console.log('Signing up failed, user with this email already exists.');
			return res
				.status(409)
				.json({ message: 'User with this email already exists' });
		}

		// Create a new Quality instance with the provided data
		const newQuality = new Quality({
			yourName: req.body.yourName,
			yourEmail: req.body.yourEmail,
		});

		// Save the newQuality instance to the database
		await newQuality.save();
		const savedQuality = await newQuality.save();

		console.log('Data Saved');

		// Generate a JWT token
		const token = jwt.sign(
			{ sellerId: newQuality._id },
			'supersecret_confidential',
			{
				expiresIn: '1h',
			}
		);

		// Respond with the user details and token
		res.status(201).json({
			sellerId: newQuality._id,
			email: newQuality.yourEmail,
			token: token,
		});
	} catch (err) {
		console.log('Error occurred:', err);
		return res.status(500).json({ message: 'Sign up failed' });
	}
};

const getQualityController = async (req, res, next) => {
	try {
		// Use the find method to retrieve all Quality instances
		const qualityData = await Quality.find();

		// Check if there is any data
		if (qualityData.length === 0) {
			return res.status(404).json({ message: 'No Quality data found' });
		}

		// Respond with the retrieved Quality data
		res.status(200).json({ qualityData });
	} catch (err) {
		console.log('Error occurred:', err);
		return res.status(500).json({ message: 'Failed to fetch Quality data' });
	}
};

module.exports = { createQualityController, getQualityController };
