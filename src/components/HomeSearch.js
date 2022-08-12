import '../styles/homeSearch.css';
import { Contact } from './Contact.js';
import zona_sul from '../../public/assets/images/zona sul.jpg';

export const Home_Search = ()=>{
    return(
        <div className="root">
            <section className="zonas">
                        <h1 id='tz' className='title_zona'>ESCOLHA A ZONA</h1>
                        <div className='linha'></div>
                <div className='container'>
                    <div className='conteudo'>
                        <div className='zona_sul'>
                                <h2>ZONA SUL</h2>
                                <span></span>
                        </div>
                        <div className='zona_norte'>
                                <h2>ZONA NORTE</h2>
                                <span></span>
                        </div>
                        <div className='zona_leste'>
                                <h2>ZONA LESTE</h2>
                                <span></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    
}