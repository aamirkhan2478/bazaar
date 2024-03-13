const admin = require("../models/admin");
const bcrypt = require("bcrypt");

//

const createAdmin = async (req, res, next) => {
    // let admins
  // try{

  //     findAdmin = await admin.findOne({ email: email})
  // } catch(err){
  //     console.log(
  //         'Signing Up Failed, Please try again later.', 500
  //     );
  //     // const error = new HttpError(
  //     //     'Signing Up Failed, Please try again later.', 500
  //     // );
  //     return next ();
  // }
  // if(findAdmin){
  //     console.log(
  //         'User exsits, Please try again later.', 500
  //     );
  //     // const error = new HttpError(
  //     //     'User exsits, Please login Again.', 422
  //     // );
  //     return next ();
  // }
//   const hashedPassword = await bcrypt.hash(req.body.password, 10)
  admin
    .find({ email: req.body.email })
    .exec()
    .then((admin) => {
      if (admin.length >= 1) {
        return res.status(409).json({
          message: "Email exsits",
        });
      } else {
        // let admin
         bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
                const admins =  new admin({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword,
                });
                admins
                .save()
                .then((results) => {
                    console.log(results);
                    res.status(201).json({
                    message: "Admin Created",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({
                    error: err,
                    });
                    // return next();
                });
            }
        });
      }
    })
    .catch();

  // res.status(201).json({admin: createAdmin.toObject({ getters: true})});
};

const getAdmin = async (req, res, next) => {
  let admins;
  try {
    const admins = await admin.find({}, "-password");
    // const admins = await admin.find({},'email name');
    // res.json(admins);
  } catch (err) {
    console.log("Login Failed, Please try againn later.", 500);
    return next(err);
  }
  res.json({
    // error: error.message
    admins: admins.map((user) => user.toObject({ getters: true })),
  });
};

module.exports = {
  createAdmin,
  getAdmin,
};
