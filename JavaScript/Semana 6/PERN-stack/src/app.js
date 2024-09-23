import e from "express";
import express from "express";
import tareasRoutes from "./router/tareas.routes.js"
import authRoutes from "./router/auth.routes.js"
const app = express();
//Middlewars
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({messaje: "Bienbenidos a mi proyecto"}));
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
