import { Router } from "express";

const router = Router ();

router.post("/signin", (req, res)=> res.send("Ingresando"));

router.post("/signin", (req, res)=> res.send("Registrando"));

router.post("/sigout", (req, res)=> res.send("Cerrando sesion"));

router.get("/profile", (req, res)=> res.send("Perfil de usuario"));

export default router;