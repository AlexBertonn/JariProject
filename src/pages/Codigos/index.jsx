import styles from "../Codigos/Codigos.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

import { Link } from 'react-router-dom';

function Codigos(){
    return(

        <>
      <header className={styles.header2}>
            <nav className={styles.navegation2}>
            <div className={styles.nav2}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
            <h1>CÓDIGOS</h1>
            </nav>
          </header>




      {/* <Header/> */}
      <Container>
      <section className={styles.containerCodigo}>
        <main className={styles.codigo}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              <div className={styles.direcionador}>
                <h1>*Aqui vai entrar uma lógica para mandar direto para os códigos indicados*</h1>
              </div>
              {/* <h1> CÓDIGOS</h1> */}
              <p>Ainda estou desenvolvendo um método de texto para adicionar os códigos aqui de uma forma mais pratica de visualização.
              </p>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Codigos