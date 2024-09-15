const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require ("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "<ACCESS_TOKEN>",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use (express.static(path.join(_dirname, "../client")));
app.use(cors());
app.get("/", function () {
	path.resolve(_dirname, "..", "client", "index.html");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080/",
			"failure": "http://localhost:8080/",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});

import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({
  accessToken: "", //agregar el token
});


const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
res.send("Soy el server");
});

app.post("/create_preference", async (req, res) => {
try {
const body = {
	items: [
	{
		title: req.body.description,
		unit_price: Number(req.body.price),
		quantity: Number(req.body.quantity),
		currency_id: "ARS",
	},
	],
	back_urls: {
	success: "http://127.0.0.1:5500/E-COMMERCE2024/client/media/index.html",
	failure: "http://127.0.0.1:5500/E-COMMERCE2024/client/media/index.html",
	pending: "http://127.0.0.1:5500/E-COMMERCE2024/client/media/index.html",
	},
	auto_return: "approved",
};

const preference = new Preference(client);
const result = await preference.create({ body });
res.json({
	id: result.id,
});
} catch (error) {
console.log(error);
res.status(500).json({
	error: "Error al crear la preferencia",
});
}
});

app.listen(port, () => {
console.log(The server is now running on Port ${port});
});