import e from "express";
import express from "express";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({messaje: "Bienbenidos a mi proyecto"}));

app.use((req, res, next) => {
    res.status(500).json({
        status: 'error',
        messaje: err.messaje
});
});

export default app;
