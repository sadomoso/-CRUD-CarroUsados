
export interface CarrosDialogProps {
    id?: number,
    setId?: (id: number) => void,
    open: boolean;
    handleClose: () => void;
    modelo: string;
    setModelo: (modelo: string) => void;
    kilometragem: number;
    setKilometragem: (kilometragem: number) => void;
    cor: string;
    setCor: (cor: string) => void;
    combustivel: string;
    setCombustivel: (combustivel: string) => void;
    ano: number;
    setAno: (ano: number) => void;
    placa: string;
    setPlaca: (placa: string) => void;
    telefone: number;
    setTelefone: (telefone: number) => void;
    portas: number;
    setPortas: (portas: number) => void;
    site: string;
    setSite: (site: string) => void;
    valor: number;
    setValor: (valor: number) => void;
}
