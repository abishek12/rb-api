import UserModel from "../../users/model/UserModel.js";
import uniqueNumber from "../../middleware/RandonNumMiddleware.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let salt = bcrypt.genSaltSync(10);
let jwtSecretKey = process.env.JWT_SECRET_KEY;

const signUp = async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    contactNo,
    password,
    gender,
    role,
  } = req.body;

  var hashPassword = bcrypt.hashSync(password, salt);

  const body = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    email: email,
    user_id: uniqueNumber,
    contact_no: contactNo,
    password: hashPassword,
    gender: gender,
    role: role,
  };

  UserModel.create(body)
    .then((value) => {
      console.log(value);
      return res.status(201).json({
        staus: 201,
        message: "User has been created",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  await UserModel.findOne({
    where: {
      email: email,
    },
  })
    .then((value) => {
      bcrypt.compare(password, value["password"], (err, result) => {
        if (result == true) {
          const token = jwt.sign({ data: value }, jwtSecretKey, {
            expiresIn: "1h",
          });
          return res.status(201).json({
            status: 201,
            message: "User logged in",
            token: token,
          });
        }
        return res.json({
          status: 400,
          message: "Password didn't matched",
        });
      });
    })
    .catch((error) => {
      res.json({
        status: 400,
        message: "User not found",
      });
    });
};

const passwordReset = async (req, res) => {
  let email = req.query.email;

  let password = req.body;
  var hashPassword = bcrypt.hashSync(password, salt);

  await UserModel.update(
    {
      password: hashPassword,
    },
    {
      where: {
        email: email,
      },
    }
  )
    .then((value) => {})
    .catch((error) => {
      return res.status(400).json({
        status: 400,
        message: "Email is not registered in out database",
      });
    });
};

export default { signIn, signUp, passwordReset };
