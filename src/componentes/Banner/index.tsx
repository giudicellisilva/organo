import "./banner.css";

interface BannerProps{
    enderecoImagem: string;
    textAlternativo?: string;
}

const Banner = ({ enderecoImagem, textAlternativo }:BannerProps) =>{

    return(
        <header className="banner">
            <img src={enderecoImagem} alt={textAlternativo} />
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo" /> */}
        </header>
    )
}

export default Banner;