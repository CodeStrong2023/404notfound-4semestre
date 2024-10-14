import Router from "express-promise-router";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js"
import {isAuth} from "../middlewares/auth.middlewares.js"

const router = Router();

router.get("/tareas", isAuth, listarTareas);

<<<<<<< HEAD
router.get("/tareas/:id",isAuth,  listarTarea);

router.post("/tareas",isAuth, crearTarea);

router.put("/tareas/:id", isAuth, actualizarTarea);

router.delete("/tareas/:id",isAuth, eliminarTarea);
=======
router.get("/tareas/:id", isAuth, listarTarea);

router.post("/tareas", isAuth, crearTarea);

router.put("/tareas/:id", isAuth, actualizarTarea);

router.delete("/tareas/:id", isAuth, eliminarTarea);
>>>>>>> a9b44ff8b19b1fbf155ebfa11732c95821dfe643

export default router;