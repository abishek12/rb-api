import Express from "express";
import TeamController from "../controller/TeamController.js";

const teamRoutes = Express.Router();

teamRoutes.get("/", TeamController.fetchTeamMembers);
teamRoutes.get("/:teamId", TeamController.fetchTeamMember);
teamRoutes.post('/', TeamController.createTeamMember);

export default teamRoutes;