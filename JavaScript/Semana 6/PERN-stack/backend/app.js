import e from "express";
import express from "express";
import tareasRoutes from "./router/tareas.routes.js"
import authRoutes from "./router/auth.routes.js"
import cookiePacser from "cookie-parser";
import cors from "cors";
import {Pool } from "./db.js";
import {ORIGIN} from "./config.js";
const app = express();
//Middlewars
app.use(morgan("dev"));
app.use(cors(
    {
        origin: ORIGIN,
        Credential: true
    }
))
app.use(cookiePacser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({messaje: "Bienvenidos a mi proyecto"}));
app.get("/api/ping", async (req, res) =>{
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
});
app.use('/api', tareasRoutes);
app.use('/api', authRoutes)

//manejando errores
app.use((req, res, next) => {
    res.status(500).json({
        status: 'error',
        messaje: err.messaje
});
});

export default app;
