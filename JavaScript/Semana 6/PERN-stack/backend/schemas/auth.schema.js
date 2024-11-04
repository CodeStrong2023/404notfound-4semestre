import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser un string"
    }).min(1,{
        message: "El nombre debe tener al menos 1 caracter"
    }).max(255,{
        message: "El nombre dene tener como máximo 255 caracteres"
    }),
    email: z.string({
        required_error: "El email es requerido",
        invalid_type_error: "El email debe ser un string",
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
        invalid_type_error: "La contraseña debe ser un string",
    }).min(6, {
        message: "La descripción debe tener al menos 6 caracteres"
    }).max(255,{
        message: "La contraseña debe tener como máximo 255 caracteres"
    })
});

export const signinSchema = z.object({
    email: z.string({
        required_error: "El email es requerido",
        invalid_type_error: "El email debe ser un string",
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
        invalid_type_error: "La contraseña debe ser un string",
    }).min(6, {
        message: "La descripción debe tener al menos 6 caracteres"
    }).max(255,{
        message: "La contraseña debe tener como máximo 255 caracteres"
    }),
});


