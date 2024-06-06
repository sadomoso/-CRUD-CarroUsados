// src/services/CarrosService.ts
import axios from "axios";
import { Carros } from "../models/Carros";

const API_DB = 'http://localhost:3000/CARROS';

const getCarros = async (): Promise<Carros[]> => {
    const response = await axios.get(API_DB);
    return response.data;
};

const createCarro = async (carro: Omit<Carros, 'id'>): Promise<void> => {
    await axios.post(API_DB, carro);
};

const updateCarro = async (id: number, carro: Carros): Promise<void> => {
    await axios.put(`${API_DB}/${id}`, carro);
};

const deleteCarro = async (id: number): Promise<void> => {
    await axios.delete(`${API_DB}/${id}`);
};

export default {
    getCarros,
    createCarro,
    updateCarro,
    deleteCarro,
};
