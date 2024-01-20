import ContactModel from "../model/ContactModel.js";

let contact = async (req, res) => {
  await TeamModel.create(req.body)
    .then((value) => {})
    .catch((error) => {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    });
};

let listContacts = async (req, res) => {
  await ContactModel.findAll()
    .then((value) =>
      res.status(200).json({
        status: 200,
        count: value.length,
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

let listContact = async (req, res) => {
  let id = req.params.id;

  await ContactModel.findByPk(id)
    .then((value) => {
      return value === null
        ? res.status(400).json({
            status: 400,
            message: "Message not found",
          })
        : res.status(200).json({
            status: 200,
            items: value,
          });
    })
    .catch((error) => {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    });
};

let deleteContact = async (req, res) => {
  let id = req.params.id;
  await TeamModel.destroy({
    where: {
      id: id,
    },
  })
    .then((value) => {})
    .catch((error) => {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    });
};

let updateContactStatus = async (req, res) => {};

export default {
  contact,
  listContacts,
  listContact,
  deleteContact,
  updateContactStatus,
};
