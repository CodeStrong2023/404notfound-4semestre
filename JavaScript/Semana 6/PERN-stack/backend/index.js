import app from "./app";
import {pool} from "./db.js";
import {PORT} from "./config.js";

app.listen(PORT);
console.log("Servidor corriendo en el puerto ", PORT);