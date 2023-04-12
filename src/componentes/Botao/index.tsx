import { ReactElement } from "react";

import "./botao.css";

interface BotaoProps {
    children: ReactElement | string;
}

const Botao = ({children}: BotaoProps) =>{

    return(
        <button className="botao" >{children}</button>
    )
}

export default Botao;