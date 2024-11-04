import { z } from 'zod';

export const createTareasSchema = z.object({
    titulo: z.string({
        required_error: "El título es requerido",
        invalid_type_error: "El título debe ser un string"
    }).min(1,{
        message: "El título debe tener al menos 1 caracter"
    }).max(255,{
        message: "El título dene tener como máximo 255 caracteres"
    }),
    descripcion: z.string({
        required_error: "La descripción es requerida",
        invalid_type_error: "La descripción debe ser un string",
    }).min(0,{
        message: "La descripción debe tener al menos 1 caracter"
    }).max(255,{
        message: "La descripción debe tener como máximo 255 caracteres"
    }).optional(),
});


export const updateTareasSchema = z.object({
    titulo: z.string({
        required_error: "El título es requerido",
        invalid_type_error: "El título debe ser un string"
    }).min(1,{
        message: "El título debe tener al menos 1 caracter"
    }).max(255,{
        message: "El título dene tener como máximo 255 caracteres"
    }).optional(),
    descripcion: z.string({
        required_error: "La descripción es requerida",
        invalid_type_error: "La descripción debe ser un string",
    }).min(0,{
        message: "La descripción debe tener al menos 1 caracter"
    }).max(255,{
        message: "La descripción debe tener como máximo 255 caracteres"
    }).optional(),
});