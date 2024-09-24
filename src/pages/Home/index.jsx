import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from '../Home/Home.module.css'

import React, { useEffect, useState} from 'react'; //IMPORT PARA O useEffect QUE O AMIGO GPT FEZ.
import Container from '../../components/Container';


function Home() {

//   const [isLargeScreen, setIsLargeScreen] = useState(
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


  return (
    <>
      <Header/>
      <Container>
      <section className={styles.homeBack}>
        <main className={styles.home}>
            <div className={styles.titulo}>
              <div className={styles.logo}></div>
              <h1>BEM-VINDO</h1>
              <h1 className={styles.textColor}> <span>AO</span> MANUAL JARI.</h1>
              <p>Tudo o que você precisa saber para desenvolver recursos a partir de um conteúdo informativo e didático.</p>
            </div>
            <div className={styles.saibaMais}>
              <Link to='/conteudos' className={styles.btnSaiba}> Saiba mais <span className={styles.seta}>→</span></Link>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>
  )
}

export default Home
