import { Router } from "express";
import RoleController from "../controllers/role.controller.js";
import { roleService } from "../services/index.js";
import validate from "../middlewares/validate.js";
import { RoleSchema } from "../validationSchema/role.schema.js";

const roleRouter = Router();

const roleController = new RoleController(roleService);

roleRouter.post("/", validate(RoleSchema), roleController.createRole);
roleRouter.get("/", roleController.getRoles);
roleRouter.get("/:roleId", roleController.getRole);

export default roleRouter;
