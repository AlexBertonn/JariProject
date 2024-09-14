import Container from "../../components/Container";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "../Conteudos/Conteudos.module.css"

import React, { useEffect } from 'react'; //IMPORT PARA O useEffect QUE O AMIGO GPT FEZ.

function Conteudos(){

    // useEffect(() => {
    //     // Adiciona a classe para remover o scroll vertical
    //     document.body.classList.add('no-scroll');
    
    //     // Remove a classe quando o componente é desmontado
    //     return () => document.body.classList.remove('no-scroll');
    //   }, []);

    return(
        <>
        <Header/> 
        <Container>
        <main className={styles.mainConteudos}>
            <div className={styles.containerConteudos}>
                <div className={styles.boxConteudos}>O QUE É A JARI?</div>
                <div className={styles.boxConteudos}>MATERIAL DIDÁTICO</div>
                <div className={styles.boxConteudos}>CÓDIGOS</div>
                <div className={styles.boxConteudos}>DILIGÊNCIAS</div>
                <div className={styles.boxConteudos}>TUTORIAIS</div>
                <div className={styles.boxConteudos}>LINKS IMPORTANTES</div>
            </div>
        </main>
        </Container>
        <Footer/>
        </>
    )
}
export default Conteudos