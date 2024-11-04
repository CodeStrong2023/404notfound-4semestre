import pg from "pg";
import { PG_DATABASE , PG_HOST, PG_PASSWORD, PG_PORT, PG_USER } from "./config";

export const pool = new pg.Pool ({
   port : PG_PORT,
   host : PG_HOST,
   database : PG_DATABASE,
   user : PG_USER,
   password : PG_PASSWORD,

});

pool.on("connect", () => {
    console.log("conectado a la base de datos");
});
