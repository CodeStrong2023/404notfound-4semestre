import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js"

const router = Router();

router.get("/tareas", listarTareas);

router.get("/tareas/:id", listarTarea);

router.post("/tareas", crearTarea);

router.put("/tareas/:id", actualizarTarea);

router.delete("/tareas/:id", eliminarTarea);

export default router;