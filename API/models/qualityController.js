// const mongoose = require("mongoose");

// const qualityControllerSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   ambassador: {
//     type: String,
//     required: true,
//   },
//   brand: {
//     type: String,
//     required: true,
//   },
//   // email: {
//   //   type: String,
//   //   trim: true,
//   //   lowercase: true,
//   //   unique: true,
//   //   required: "Email address is required",
//   //   validate: [validateEmail, "Please fill a valid email address"],
//   //   match: [
//   //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//   //     "Please fill a valid email address",
//   //   ],
//   // },
//   country: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   package: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("qualityController", qualityControllerSchema);

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const qualityControllerSchema = mongoose.Schema({
	yourName: {
		type: String,
		required: [true, 'Your name is required'],
	},
	yourEmail: {
		type: String,
		// required: [true, 'Email is required'],
		unique: true,
		match: [
			/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
			'Invalid email address',
		],
	},
	experianceStatus: {
		type: String,
		// required: [true, 'Experience status is required'],
	},
	servicePost: {
		type: String,
		// required: [true, 'Service post is required'],
	},
	selectGender: String,
	chooseProfile: {
		type: String,
		// required: [true, 'Profile is required'],
	},
	yourPhone: {
		type: String,
		// required: [true, 'Your phone is required'],
	},
	youtubeVideoLink: {
		type: String,
		// required: [true, 'Youtube video link is required'],
	},
	selectPackage: {
		type: String,
		// required: [true, 'Select package is required'],
	},
	enterOfficalAddress: {
		type: String,
		// required: [true, 'Official address is required'],
	},
	heighestQualification: {
		type: String,
		// required: [true, 'Highest qualification is required'],
	},
	generalSkills: {
		type: String,
		// required: [true, 'General skills is required'],
	},
	previousExperience: {
		type: String,
		// required: [true, 'Previous experience is required'],
	},
	uploadCnicImageFront: {
		type: String,
		// required: [true, 'CNIC image is required'],
	},
	uploadCv: {
		type: String,
		// required: [true, 'CV is required'],
	},
	bankAccount: {
		type: String,
		// required: [true, 'Bank account is required'],
	},
	branceCode: {
		type: String,
		// required: [true, 'Branch code is required'],
	},
	mobileAccount: {
		type: String,
		// required: [true, 'Mobile account is required'],
	},
	registeration: {
		type: String,
		// required: [true, 'Registration is required'],
	},
	bussinessLogo: {
		type: String,
		// required: [true, 'Business logo is required'],
	},
	joiningAs: {
		type: String,
		// required: [true, 'Joining as is required'],
	},
	specialSkills: {
		type: String,
		// required: [true, 'Special skills is required'],
	},
	selectCountry: String,
	selectRegion: String,
	uploadCnicImageBack: {
		type: String,
		// required: [true, 'CNIC image is required'],
	},
	bankAccountTittle: {
		type: String,
		// required: [true, 'Bank account title is required'],
	},
	bankName: {
		type: String,
		// required: [true, 'Bank name is required'],
	},
	mobileAccountTittle: {
		type: String,
		// required: [true, 'Mobile account title is required'],
	},
	describeYourSelf: {
		type: String,
		// required: [true, 'Description is required'],
	},
	industryInstituteRegisteration: {
		type: String,
		// required: [true, 'Registration is required'],
	},
	password: {
		type: String,
		// required: [true, 'Password is required'],
	},
	confirmPassword: {
		type: String,
		// required: [true, 'Confirm password is required'],
		validate: {
			validator: function (v) {
				return this.password === v;
			},
			message: 'Passwords must match',
		},
	},
});

qualityControllerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('qualityController', qualityControllerSchema);
