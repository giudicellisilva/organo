import "./listaSuspensa.css";

interface ListaSuspensaProps{
    label: string;
    obrigatorio?: boolean;
    valor: string;
    itens: string[];
    aoAlterado: (evento: string) =>  void
}

const ListaSuspensa = ({label, valor, itens, aoAlterado, obrigatorio = false}: ListaSuspensaProps) =>{

    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value) }>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item} >{item}</option>
                })}
            </select>
        </div>

    )
}

export default ListaSuspensa;