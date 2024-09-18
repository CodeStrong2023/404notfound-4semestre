import e from "express";
import express from "express";

const app = express();
app.use(morgan("dev"))
app.get("/", (req, res) => res.json({messaje: "Bienbenidos a mi proyecto"}));

export default app;
