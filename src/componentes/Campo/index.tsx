import "./campo.css";

interface CampoProps{
    aoAlterado: (valor: string) => void;
    type?: string;
    label: string;
    placeholder: string;
    valor: string;
    obrigatorio?: boolean;
}

const Campo = ({aoAlterado, type = "text", placeholder, label, valor, obrigatorio = false} : CampoProps) =>{

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) =>{
        aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default Campo;