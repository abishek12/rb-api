import TeamModel from "../model/TeamModel.js";

const createTeamMember = async (req, res) => {
  await TeamModel.create(req.body)
    .then((value) => {})
    .catch((error) => {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    });
};

const fetchTeamMembers = async (req, res) => {
  await TeamModel.findAll()
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

const fetchTeamMember = async (req, res) => {
  let teamId = req.params.teamId;

  await TeamModel.findByPk(teamId)
    .then((value) => {
      return value === null
        ? res.status(400).json({
            status: 400,
            message: "Team Member not found",
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

const deleteTeamMember = async (req, res) => {
  let teamId = req.params.teamId;
  await TeamModel.destroy({
    where: {
      id: teamId,
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

export default {
  createTeamMember,
  fetchTeamMembers,
  fetchTeamMember,
  deleteTeamMember,
};
