import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import "./colaborador.css";

interface ColaboradorProps{
    id : string;
    nome: string;
    cargo: string;
    imagem: string;
    corDeFundo: string;
    data: string;
    favorito: boolean;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
}

const Colaborador = ({id, nome, cargo, imagem, corDeFundo, data, favorito, aoDeletar, aoFavoritar}: ColaboradorProps) =>{

    function favoritar(){
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 23,
        onClick: favoritar
    }

    return(
        <div className="colaborador">
            <AiFillCloseCircle className="deletar" onClick={() => aoDeletar(id)} size={25}/>
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}> 
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h6>{new Date(data).toLocaleDateString()}</h6>
                <div className="favoritar">
                    {favorito ? <AiFillHeart {...propsFavorito} color="#E21818" /> : <AiOutlineHeart {...propsFavorito} />}
                </div>
            </div>
        </div>

    )
}
export default Colaborador;