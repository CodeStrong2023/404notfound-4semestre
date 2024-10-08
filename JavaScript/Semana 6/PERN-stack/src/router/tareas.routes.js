import Router from "express-promise-router";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js"
import {isAuth} from "../middlewares/auth.middlewares.js"

const router = Router();

router.get("/tareas", isAuth, listarTareas);

router.get("/tareas/:id", listarTarea);

router.post("/tareas", crearTarea);

router.put("/tareas/:id", actualizarTarea);

router.delete("/tareas/:id", eliminarTarea);

export default router;