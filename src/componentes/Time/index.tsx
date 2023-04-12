import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

import "./time.css";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";

interface TimeProps{
    cor: string;
    nome: string;
    colaboradores: IColaborador[];
    id: string;
    mudarCor: (cor: string, id: string) => void;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
    


}

const Time = ({id, cor, nome, colaboradores, mudarCor, aoDeletar, aoFavoritar} : TimeProps) =>{

    return(
        colaboradores.length > 0 ? <section className="time" style={{backgroundColor: hexToRgba(cor, 0.6) }}>
            <input value={cor} onChange={ (evento) => mudarCor(evento.target.value, id)} type="color" className="input-cor"/>
            <h3 style={{borderColor: cor}}>{nome}</h3>
           <div className="colaboradores">
                {colaboradores.map( colaborador => {
                    return <Colaborador corDeFundo={cor} key={colaborador.id} id={colaborador.id} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} data={colaborador.data} favorito={colaborador.favorito || false} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar}/>
                })}
           </div>
        </section> : <></> 
    )
}

export default Time;