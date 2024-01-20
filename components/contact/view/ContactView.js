import Express from "express";
import ContactController from "../controller/ContactController.js";

let contactRoutes = Express.Router();

contactRoutes.get("/", ContactController.listContacts);
contactRoutes.get("/:teamId", ContactController.listContact);
contactRoutes.post("/", ContactController.contact);
contactRoutes.delete("/:id", ContactController.deleteContact);
contactRoutes.put("/:id", ContactController.updateContactStatus);

export default contactRoutes;
