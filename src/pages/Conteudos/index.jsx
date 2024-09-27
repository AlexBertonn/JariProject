import Container from "../../components/Container";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "../Conteudos/Conteudos.module.css"
import logo from '../../images/testeJari.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useState} from 'react'; //IMPORT PARA O useEffect QUE O AMIGO GPT FEZ.

function Conteudos(){

    // const [isLargeScreen, setIsLargeScreen] = useState(
    //     window.innerWidth >= 1280 && window.innerHeight >= 720
    // );

    // useEffect(() => {
    //     const handleResize = () => {
    //         const isLarge = window.innerWidth >= 1280 && window.innerHeight >= 720;
    //         setIsLargeScreen(isLarge);

    //         // Adiciona ou remove a classe 'no-scroll' com base no tamanho da tela
    //         if (isLarge) {
    //             document.body.classList.add('no-scroll');
    //         } else {
    //             document.body.classList.remove('no-scroll');
    //         }
    //     };

    //     // Adiciona o listener para redimensionamento
    //     window.addEventListener('resize', handleResize);

    //     // Executa a lógica de redimensionamento inicialmente
    //     handleResize();

    //     // Limpeza do listener
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return(
        <>
        <Header/> 
        <Container>
        <main className={styles.mainConteudos}>
            <div className={styles.containerConteudos}>
                <div className={styles.boxConteudos}>
                    <Link to='/jari' className={styles.btnTest}> 
                    <h1 className={styles.h1Conteudos}>O QUE É A JARI?</h1>
                    {/* <p><img src={logo} alt="Jari" style={{width:'150px', height:'150px'}}/></p> */}
                    </Link>
                </div>
                <div className={styles.boxConteudos}>
                    <Link to='/material' className={styles.btnTest}> 
                    <h1 className={styles.h1Conteudos}>PRIMEIROS PASSOS ANÁLISE</h1>
                    </Link>
                </div>
                <div className={styles.boxConteudos}>
                    <Link to='/codigos' className={styles.btnTest}> 
                    <h1 className={styles.h1Conteudos}>CÓDIGOS</h1>
                    </Link>
                </div>
                <div className={styles.boxConteudos}>
                    <Link to='/diligencias' className={styles.btnTest}> 
                    <h1 className={styles.h1Conteudos}>DILIGÊNCIAS</h1>
                    </Link>
                </div>
                <div className={styles.boxConteudos}>
                    <Link to='/tutoriais' className={styles.btnTest}> 
                    <h1 className={styles.h1Conteudos}>TUTORIAIS</h1>
                    </Link>
                </div>
                <div className={styles.boxConteudos}>
                    <Link to='/importante' className={styles.btnTest}> 
                    <h1 className={styles.h1Conteudos}>LINKS IMPORTANTES</h1>
                    </Link>
                </div>
            </div>
        </main>
        </Container>
        <Footer/>
        </>
    )
}
export default Conteudos