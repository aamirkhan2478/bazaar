const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: '/uploads' });
const cors = require('cors');

const app = express();

const sellerRoute = require('./API/routes/sellers');
const qualityControllerRoute = require('./API/routes/qualityControllers');
const adminRoute = require('./API/routes/admins');

mongoose
	.connect(
		// 'mongodb+srv://developer:qwert123@cluster0.jmlpgli.mongodb.net/Baazzaar?retryWrites=true&w=majority&appName=Cluster0'
		'mongodb+srv://abid2330:abid2330@cluster0.88ah5xg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
	)
	.then(() => {
		console.log('Connected to database');
	})
	.catch((err) => {
		console.log(err);
		
		// res.status(500).json({
		// 	error: err,
		// });
	});

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow_Origin', '*');
//     res.setHeader('Access-Control-Allow_Origin',
//     'Origin,X-Requested_With,Content-Type, Accept, Authorization');
//     res.setHeader('Access-Control-Allow_Origin',
//     'GET, POST, PATCH, DELETE');
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors((origin = '*')));

//Seller Routers
app.use('/sellers', sellerRoute);

//QualityController Route
// app.use('/qualityControllers', qualityControllerRoute);
app.use('/qualityControllers', qualityControllerRoute);

//Admin Route
app.use('/admins', adminRoute);

module.exports = app;
