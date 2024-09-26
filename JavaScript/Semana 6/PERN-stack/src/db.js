import pg from "pg";

export const pool = new pg.Pool ({
    port: 5472,
    host: "localhost",
    user: "admin",
    password: "admin",

});

pool.on("connect", () => {
    console.log("conectado a la base de datos");
});
