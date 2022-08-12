import { useState } from "react";
import '../styles/home.css';
import iconpng  from '../../public/assets/icon.png';
import casa from '../../public/assets/images/imagem casa.jpg';
import { Home_Search } from '../components/HomeSearch.js';

const menu = [{
    nome: 'BUSCAR LOCAIS' 
},
{
    nome: 'BUSCAR PREÇOS'
},{
    nome: 'ANUNCIAR'
}];

export const Home= ()=>{
    return(
        <div className="root">
           <header className="cabecalho">
                <nav className="menu">
                    <div className="container_title">
                        <h2 className="title">ALUGAR.ME</h2>
                        <img className="icon" src={iconpng} ></img>
                    </div>
                    <div className="container_menu">
                        <ul className="navigation">
                            <li><a href="">{menu[0].nome}</a></li>
                            <li><a href="">{menu[1].nome}</a></li>
                            <li><a href="">{menu[2].nome}</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="conteudo_publi">
                    <div className="container_publi">
                        <div className="painel">
                            <h2 className="title_publi">TÁ ESPERANDO <br></br> OQUE?!</h2>
                            <h2 className="title_publi2">ALUGUE JÁ <br></br>
                            OU<br></br>
                            ANUNCIE!
                            </h2>
                        </div>
                        <img className="imagem_casa" src={casa} ></img>
                    </div>
                </div>
           </header>
           <Home_Search />
        </div>
    )
}