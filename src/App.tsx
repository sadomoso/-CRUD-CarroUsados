// src/App.tsx
import React, { useState } from 'react';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import Home from './components/Home';
import CarrosDialog from './components/CarrosDialog';

const App: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modelo, setModelo] = useState('');
  const [kilometragem, setKilometragem] = useState(0);
  const [cor, setCor] = useState('');
  const [combustivel, setCombustivel] = useState('');
  const [ano, setAno] = useState(0);
  const [placa, setPlaca] = useState('');
  const [telefone, setTelefone] = useState(0);
  const [portas, setPortas] = useState(0);
  const [site, setSite] = useState('');
  const [valor, setValor] = useState(0);

  const handleDialogClose = () => {
    setDialogOpen(false);
    setModelo('');
    setKilometragem(0);
    setCor('');
    setCombustivel('');
    setAno(0);
    setPlaca('');
    setTelefone(0);
    setPortas(0);
    setSite('');
    setValor(0);
  };



  return (
    <Container sx={{ backgroundColor: 'grey', minWidth: '100%', minHeight: '100vh'}}>
      <AppBar position='static' sx={{width: '100%'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Typography variant='h6' style={{ color: 'white' }}>Carros Usados Online (CRUD)</Typography>
          <Button onClick={() => setDialogOpen(true)} style={{ color: 'black', display: 'inline-flex' }}>Adicionar</Button>
        </Toolbar>
      </AppBar>
      <Home />
      <CarrosDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        modelo={modelo} setModelo={setModelo}
        kilometragem={kilometragem} setKilometragem={setKilometragem}
        cor={cor} setCor={setCor}
        combustivel={combustivel} setCombustivel={setCombustivel}
        ano={ano} setAno={setAno}
        placa={placa} setPlaca={setPlaca}
        telefone={telefone} setTelefone={setTelefone}
        portas={portas} setPortas={setPortas}
        site={site} setSite={setSite}
        valor={valor} setValor={setValor}
      />
    </Container>
  );
};

export default App;
