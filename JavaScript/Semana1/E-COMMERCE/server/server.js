import express from "express";
import cors from "cors";
import {MercadoPagoConfig,Preference} from "mercadopago";

const client=new MercadoPagoConfig({
	ACCESS_TOKEN: 'APP_USR-8613343266784446-091800-23b5f21cdd40417c642e026e58a88702-1994482607'
})

const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
	res.send("servidor corriendo")
})

app.post("/create_preference", async (req, res) => {
    console.log(req.body);
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "http://localhost:3000/success",
                failure: "http://localhost:3000/failure",
                pending: "http://localhost:3000/pending",
            },
            auto_return: "approved",
        };
		
        res.status(200).json({ id: "preference_id" }); 
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Invalid request parameters" });
    }
});

app.listen(port,()=>{
	console.log(`servidor corriendo en el puerto ${port}`);
})