const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const seller = require('../models/seller');

//

const createSeller = async (req, res, next) => {
	// const { name, email, password } = req.body;

	let existingUser;
	try {
		existingUser = await User.findOne({ email: email });
	} catch (err) {
		console.log('Signing up failed user, please try again later.', 500);
		//   return next(error);
	}

	if (existingUser) {
		console.log('Signing up failed, please try again later.', 500);
		return next(error);
	}

	const createSeller = new seller({
		yourName: req.body.yourName,
		brandName: req.body.brandName,
		yourEmail: req.body.yourEmail,
		selectCountry: req.body.selectCountry,
		selectRegion: req.body.selectRegion,
		officialAddress: req.body.officialAddress,
		productCategory: req.body.productCategory,
		yourPhone: req.body.yourPhone,
		selectQualityController: req.body.selectQualityController,
		createPassword: req.body.selectQualityController,
		confirmPassword: req.body.selectQualityController,
	});
	await createSeller
		.save()
		.then((result) => {
			console.log('Data Saved');
		})
		.catch((err) => {
			console.log(err);
		});

	let token;
	try {
		token = jwt.sign(
			{
				sellerId: createSeller.id,
			},
			'supersecret_confidential',
			{ expiresIn: '1h' }
		);
	} catch (err) {
		console.log('signUP failed', 500);
		// error: err;
	}
	res.status(201).json({
		sellerId: createSeller.id,
		email: createSeller.yourEmail,
		token: token,
	});
};
// const getSeller = async(req,res,next)=>{

//     let sellers;
//     try{
//         // seller.find()
//         // .exec()
//         // .then(docs=>{
//         //     res.status(200).json(docs)
//         // })
//         const sellers = await seller.find({},'-password');
//         const admins = await admin.find({},'email name');
//         res.json(admins);
//     }
//     catch(err){
//         // res.status(500).json({
//         //     error: err
//         // })
//         console.log('Login Failed')
//     };

//     res.json({
//         // error: error.message
//         sellers: sellers.map(user=> user.toObject({ getters: true}))
//     });

// }

const getSeller = async (req, res) => {
	let existingUser;
	try {
		existingUser = await User.findOne({ email: email });
	} catch (err) {
		console.log('Signing up failed, please try again later.', 500);
		//   return next(error);
	}

	if (existingUser) {
		console.log('Signing up failed, please try again later.', 500);
		return next(error);
	}
	try {
		const sellers = await seller.find();
		res.status(200).json(sellers);
	} catch (err) {
		console.error('Error token:', err);
		res.status(500).json({
			error: err.message,
		});
		res.status(201).json({
			sellerId: createSeller.id,
			email: createSeller.email,
			token: token,
		});
	}
};

module.exports = {
	createSeller,
	getSeller,
};
