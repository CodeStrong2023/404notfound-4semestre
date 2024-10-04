import pg from "pg";

export const pool = new pg.Pool ({
    port: 5472,
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "PERN",

});

pool.on("connect", () => {
    console.log("conectado a la base de datos");
});
