import React, { useState } from "react";
import { v4 as uuidv4} from "uuid";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";

import "./formulario.css";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import { ITime } from "../../compartilhado/interfaces/ITime";
import Campo from "../Campo";

interface FormularioProps{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void;
    cadastrarTime: (novoTime: ITime) => void;
    times: string[];
    
}

const Formulario = ({aoColaboradorCadastrado, cadastrarTime, times} : FormularioProps) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const [nomeTime, setNomeTime] = useState("");
    const [cor, setCor] = useState("");

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem: imagem === "" ? "https://giudicellisilva.github.io/GiudicelliElias.Dev/imagens/user.png" : imagem ,
            time
        })
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    const aoSalvarTime = (evento: React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault();
        cadastrarTime({id: uuidv4(), nome: nomeTime, cor: cor});
        setNomeTime("");
        setCor("");
    }


    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo obrigatorio label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <Campo  label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <Campo label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio label="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo obrigatorio label="Nome" placeholder="Digite seu nome" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} />
                <Campo obrigatorio type="color" label="Cor" placeholder="Digite sua cor" valor={cor} aoAlterado={valor => setCor(valor)} />
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}

export default Formulario;