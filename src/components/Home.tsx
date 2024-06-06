import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Button, Grid } from '@mui/material';
import { Carros } from '../models/Carros';
import CarrosService from '../services/CarrosService';
import CarrosAtualizar from './CarrosAtualizar';

const Home: React.FC = () => {
    const [listCarros, setListCarros] = useState<Carros[]>([]);
    const [open, setOpen] = useState(false);
    const [carroSelecionado, setCarroSelecionado] = useState<Carros | null>(null);

    // Inicialização dos estados com base no carro selecionado
    const [modelo, setModelo] = useState(carroSelecionado?.modelo || '');
    const [kilometragem, setKilometragem] = useState(carroSelecionado?.kilometragem || 0);
    const [cor, setCor] = useState(carroSelecionado?.cor || '');
    const [combustivel, setCombustivel] = useState(carroSelecionado?.combustivel || '');
    const [ano, setAno] = useState(carroSelecionado?.ano || 0);
    const [placa, setPlaca] = useState(carroSelecionado?.placa || '');
    const [telefone, setTelefone] = useState(carroSelecionado?.telefone || 0);
    const [portas, setPortas] = useState(carroSelecionado?.portas || 0);
    const [site, setSite] = useState(carroSelecionado?.site || '');
    const [valor, setValor] = useState(carroSelecionado?.valor || 0);
    const [id, setId] =useState(carroSelecionado?.id || 0);

    useEffect(() => {
        fetchCarros();
    }, []);

    const abrirPopup = (carro: Carros) => {
        setCarroSelecionado(carro);
        setOpen(true);
        // Atualizar os estados com base no carro selecionado
        setModelo(carro.modelo);
        setKilometragem(carro.kilometragem);
        setCor(carro.cor);
        setCombustivel(carro.combustivel);
        setAno(carro.ano);
        setPlaca(carro.placa);
        setTelefone(carro.telefone);
        setPortas(carro.portas);
        setSite(carro.site);
        setValor(carro.valor);
        setId(carro.id);
    };

    const fecharPopup = () => {
        setOpen(false);

    };

    const fetchCarros = async () => {
        try {
            const carros = await CarrosService.getCarros();
            setListCarros(carros);
        } catch (error) {
            console.error('Erro ao buscar carros:', error);
        }
    };

    const handleDeleteCarro = async (id: number) => {
        try {
            await CarrosService.deleteCarro(id);
            fetchCarros();
        } catch (error) {
            console.error('Erro ao deletar carro:', error);
        }
    };

    return (
        <Container>
            {listCarros.map((carro) => (
                <Paper key={carro.placa} elevation={3} sx={{ padding: 2, marginBottom: 2, marginTop: 2 }}>
                    <Grid container spacing={2} justifyContent={'space-between'}>
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6" color={'blue'}>Modelo:</Typography>
                            <Typography color={'black'}>{carro.modelo}</Typography>
                            <Typography variant="h6" color={'blue'}>Kilometragem:</Typography>
                            <Typography color={'black'}>{carro.kilometragem}</Typography>
                            <Typography variant="h6" color={'blue'}>Cor:</Typography>
                            <Typography color={'black'}>{carro.cor}</Typography>
                            <Typography variant="h6" color={'blue'}>Combustível: </Typography>
                            <Typography color={'black'}>{carro.combustivel}</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography variant="h6" color={'blue'}>Ano: </Typography>
                            <Typography color={'black'}>{carro.ano}</Typography>
                            <Typography variant="h6" color={'blue'}>Placa: </Typography>
                            <Typography color={'black'}>{carro.placa}</Typography>
                            <Typography variant="h6" color={'blue'}>Telefone: </Typography>
                            <Typography color={'black'}>{carro.telefone}</Typography>
                            <Typography variant="h6" color={'blue'}>Portas:</Typography>
                            <Typography color={'black'}> {carro.portas}</Typography>
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <Typography variant="h6" color={'blue'}>Site: </Typography>
                            <Typography color={'black'}>{carro.site}</Typography>
                            <Typography variant="h6" color={'blue'}>Valor: </Typography>
                            <Typography color={'black'}>R$: {carro.valor}</Typography>
                        </Grid>
                        <Grid item xs={12} container justifyContent="space-between">
                            <Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => abrirPopup(carro)}
                                >
                                    Atualizar
                                </Button>
                            </Grid>
                            <Grid>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDeleteCarro(carro.id)}
                                >
                                    Deletar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            ))}

            <CarrosAtualizar
                open={open}
                handleClose={fecharPopup}
                modelo={modelo}
                setModelo={setModelo} // Passar a função setModelo diretamente
                kilometragem={kilometragem}
                setKilometragem={setKilometragem} // Passar a função setKilometragem diretamente
                cor={cor}
                setCor={setCor} // Passar a função setCor diretamente
                combustivel={combustivel}
                setCombustivel={setCombustivel} // Passar a função setCombustivel diretamente
                ano={ano}
                setAno={setAno} // Passar a função setAno diretamente
                placa={placa}
                setPlaca={setPlaca} // Passar a função setPlaca diretamente
                telefone={telefone}
                setTelefone={setTelefone} // Passar a função setTelefone diretamente
                portas={portas}
                setPortas={setPortas} // Passar a função setPortas diretamente
                site={site}
                setSite={setSite} // Passar a função setSite diretamente
                valor={valor}
                setValor={setValor} // Passar a função setValor diretamente
                id={id}
                setId={setId}
            />

        </Container>
    );
};

export default Home;
