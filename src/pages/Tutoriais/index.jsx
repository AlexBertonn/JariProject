import styles from "../Tutoriais/Tutoriais.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

import { Link } from 'react-router-dom';

function Tutoriais(){
    return(

    <>
      <header className={styles.header2}>
            <nav className={styles.navegation2}>
            <div className={styles.nav2}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
            <h1>TUTORIAIS</h1>
            </nav>
          </header>




      {/* <Header/> */}
      <Container>
      <section className={styles.containerTutoriais}>
        <main className={styles.tutoriais}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
            {/* <h1> TUTORIAIS</h1> */}
            <br />
            <br />
              <p> Explore nossa coleção de tutoriais interativos para maximizar sua experiência com nossos serviços. Aqui, você encontrará guias passo a passo que abrangem desde as funcionalidades básicas até dicas avançadas, tudo para ajudá-lo a aproveitar ao máximo nossas ferramentas.
              </p>
              <br />
              <p>Ainda não ta rolando os materiais, mas serão gravados esta semana e upados em breve.
              </p>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Tutoriais


