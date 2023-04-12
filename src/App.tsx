import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { IColaborador } from './compartilhado/interfaces/IColaborador';
import { ITime } from './compartilhado/interfaces/ITime';

function App() {

  const [times, setTimes] = useState([
    {id: uuidv4(), nome: "Programação", cor: "#57C278"},
    {id: uuidv4(), nome: "Front-End", cor: "#82CFFA"},
    {id: uuidv4(), nome: "Data Science", cor: "#A6D157"},
    {id: uuidv4(), nome: "Devops", cor: "#E06B69"},
    {id: uuidv4(), nome: "UX e Design", cor: "#DB6EBF"},
    {id: uuidv4(), nome: "Mobile", cor: "#FFBA05"},
    {id: uuidv4(), nome: "Inovação e Gestão", cor: "#FF8A29"},
  ])

  const colaboradoresIniciais = [
  {
    id: uuidv4(),
    nome: "Giudicelli Elias",
    cargo: "Desenvolvedor",
    imagem: "https://github.com/giudicellisilva.png",
    time: "Front-End",
    favorito: false
  },
  {
    id: uuidv4(),
    nome: "Giudicelli Elias",
    cargo: "Desenvolvedor",
    imagem: "https://github.com/giudicellisilva.png",
    time: "Programação",
    favorito: false
  },
  {
    id: uuidv4(),
    nome: "Dayane Miranda",
    cargo: "Professora",
    imagem: "https://giudicellisilva.github.io/GiudicelliElias.Dev/imagens/user.png",
    time: "Inovação e Gestão",
    favorito: false
  },
  {
    id: uuidv4(),
    nome: "Adenilson Ramos",
    cargo: "Desenvolvedor",
    imagem: "https://github.com/AdnRamos.png",
    time: "Front-End",
    favorito: false
  },
  {
    id: uuidv4(),
    nome: "Esdras Gomes",
    cargo: "Desenvolvedor",
    imagem: "https://media.licdn.com/dms/image/C5603AQGYmz6PMBSa0Q/profile-displayphoto-shrink_800_800/0/1635606364071?e=1685577600&v=beta&t=27MAQqqWtc2Uj-xkU1Z_9oj91iYJm_N2a5OpKWLm_7I",
    time: "Programação",
    favorito: false
  }
  ]
  

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(colaboradoresIniciais);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) =>{
    // debugger
    setColaboradores([...colaboradores, colaborador]);
  }

  function cadastrarTime(novoTime: ITime){
      setTimes([...times, { ...novoTime }])
  }

  function deletarColaborador(id: string){
    setColaboradores(colaboradores.filter( (colaborador) => colaborador.id != id))
  }

  function mudarCorDoTime(cor: string, id: string){
    setTimes(times.map( time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }

  function favoritar(id: string){
    setColaboradores(colaboradores.map(colaborador =>{
        if(colaborador.id === id){
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
    }))
  }
  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' textAlternativo='O banner principal da página do Organo'/>
      <Formulario times={times.map( (time) => time.nome)} 
                  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
                  cadastrarTime={cadastrarTime}/>
      {times.map( (time) => <Time 
                                key={time.id} id={time.id} nome={time.nome} cor={time.cor} 
                                mudarCor={mudarCorDoTime} 
                                aoDeletar={deletarColaborador}
                                aoFavoritar={favoritar} 
                                colaboradores={colaboradores.filter( (colaborador) => colaborador.time === time.nome )}
                            /> 
      )}
      <Rodape />
    </div>
  );
}

export default App;
