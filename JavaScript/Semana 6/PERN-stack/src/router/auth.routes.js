import  Router  from "express-promise-router";
import { signin, signup, signout, profile } from "../controllers/auth.controller.js";
<<<<<<< HEAD
import {isAuth} from "../middlewares/auth.middlewares.js";
=======
import { isAuth } from "../middlewares/auth.middlewares.js";

>>>>>>> a9b44ff8b19b1fbf155ebfa11732c95821dfe643
const router = Router ();

router.post("/signin", signin );

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", isAuth, profile);

export default router;