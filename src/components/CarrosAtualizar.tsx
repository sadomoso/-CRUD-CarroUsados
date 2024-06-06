import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import CarrosService from "../services/CarrosService";
import { CarrosDialogProps } from "../models/CarrosDialogProps";

const CarrosAtualizar: React.FC<CarrosDialogProps> = ({
    id, setId,
    open, handleClose,
    modelo, setModelo, kilometragem, setKilometragem,
    cor, setCor, combustivel, setCombustivel,
    ano, setAno, placa, setPlaca, telefone, setTelefone,
    portas, setPortas, site, setSite, valor, setValor
}) => {
    const handleSubmit = async () => {
        try {
            
            if (id !== undefined) {
                const carro = {
                    id,
                    modelo,
                    kilometragem,
                    cor,
                    combustivel,
                    ano,
                    placa,
                    telefone,
                    portas,
                    site,
                    valor
                };
                await CarrosService.updateCarro(carro.id, carro);
                window.location.reload();
            } else {
                console.error('O id do carro não existe.');
            }
        } catch (error) {
            console.error('Erro ao salvar o carro:', error);
        }
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Atualizar informações do carro</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Modelo"
                    type="text"
                    fullWidth
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Kilometragem"
                    type="number"
                    fullWidth
                    value={kilometragem}
                    onChange={(e) => setKilometragem(Number(e.target.value))}
                />
                <TextField
                    margin="dense"
                    label="Cor"
                    type="text"
                    fullWidth
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Combustível"
                    type="text"
                    fullWidth
                    value={combustivel}
                    onChange={(e) => setCombustivel(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Ano"
                    type="number"
                    fullWidth
                    value={ano}
                    onChange={(e) => setAno(Number(e.target.value))}
                />
                <TextField
                    margin="dense"
                    label="Placa"
                    type="text"
                    fullWidth
                    value={placa}
                    onChange={(e) => setPlaca(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Telefone"
                    type="number"
                    fullWidth
                    value={telefone}
                    onChange={(e) => setTelefone(Number(e.target.value))}
                />
                <TextField
                    margin="dense"
                    label="Portas"
                    type="number"
                    fullWidth
                    value={portas}
                    onChange={(e) => setPortas(Number(e.target.value))}
                />
                <TextField
                    margin="dense"
                    label="Site"
                    type="text"
                    fullWidth
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Valor"
                    type="number"
                    fullWidth
                    value={valor}
                    onChange={(e) => setValor(Number(e.target.value))}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">Cancelar</Button>
                <Button onClick={handleSubmit} color="primary">Atualizar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CarrosAtualizar;
