import { Router } from "express";

const router = Router();

router.get("/tareas",(req, res) => res.send("obteniendo tareas"));

router.get("/tareas/:id",(req, res) => res.send("obteniendo tarea unica"));

router.post("/tareas",(req, res) => res.send("creando tarea"));

router.put("/tareas/:id",(req, res) => res.send("actualizando tarea unica"));

router.delete("/tareas/:id",(req, res) => res.send("eliminando tarea unica"));

export default router;