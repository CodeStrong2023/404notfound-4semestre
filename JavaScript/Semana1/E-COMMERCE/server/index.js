
import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';

// Agrega credenciales de MercadoPago
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-6586352800003978-091810-055f7e8fb93f8c7b6cf6682f256d8d68-1987997416' });

const app = express();
const port  = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Soy el server: )");
});


app.post("/create_preference", async (req, res) => {
  try {
    const { id, productName, price, quanty } = req.body;
    
    const preferenceData = {
      items: [
        {
          id: id,
          title: productName,  
          unit_price: Number(price),  
          quantity: Number(quanty),  
          currency_id: "ARS",  
        },
      ],
      back_urls: {
        success: "https://www.mercadopago.com.ar/",
        failure: "https://www.mercadopago.com.ar/",
        pending: "https://www.mercadopago.com.ar/",
      },
      auto_return: "approved",
    };

 
    const preference = new Preference(client);
    const result = await preference.create({ body: preferenceData });

    res.json({ id: result.id }); 
  } catch (error) {
    console.error("Error al crear la preferencia: ", error);
    res.status(500).json({
      error: "Error al crear la preferencia",
    });
  }
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});