import styles from "../Importante/Importante.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

import { Link } from 'react-router-dom';

function Links(){
    return(

        <>
      <header className={styles.header2}>
            <nav className={styles.navegation2}>
            <div className={styles.nav2}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
            <h1>LINKS ÚTEIS</h1>
            </nav>
          </header>




      {/* <Header/> */}
      <Container>
      <section className={styles.containerLinks}>
        <main className={styles.links}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              {/* <h1> LINKS ÚTEIS</h1> */}
              <br />
              <br />
              <p> Esta tela reúne uma seleção de links que podem ajudá-lo a acessar rapidamente informações e recursos relevantes. Aqui você encontrará ferramentas, guias e plataformas que facilitarão sua jornada conosco.
              </p>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Links