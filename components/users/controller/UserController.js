import UserModel from "../model/UserModel.js";

const fetchUsers = async (req, res) => {
  await UserModel.findAll()
    .then((value) =>
      res.status(200).json({
        status: 200,
        items: value,
      })
    )
    .catch((error) =>
      res.status(500).json({
        status: 500,
        message: error,
      })
    );
};
const fetchUser = async (req, res) => {
  let userId = req.params.userId;

  return res.status(200).json({
    status: 200,
    message: userId,
  });
};

const searchUser = async (req, res) => {
  let email = req.query.user;

  await UserModel.findOne({
    where: {
      email: email,
    },
  })
    .then((value) => {
      return res.status(200).json({
        status: 200,
        fullName: `${value["firstName"]} ${value["middleName"]} ${value["lastNamme"]}`,
        email: `${value["email"]}`,
        contactNo: `${value["contact"]}`,
        gender: `${value["gender"]}`,
        role: `${value["role"]}`,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        status: 400,
        message: "User not found",
      });
    });
};

const deleteUser = async (req, res) => {
  let userId = req.query.userId;

  await UserModel.destroy({
    where: {
      id: userId,
    },
  })
    .then((value) => {})
    .catch((error) => {
      return res.status(400).json({
        status: 400,
        message: "User not found",
      });
    });
};

export default { fetchUsers, fetchUser, deleteUser, searchUser };
