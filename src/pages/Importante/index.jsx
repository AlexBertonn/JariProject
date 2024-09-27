import styles from "../Importante/Importante.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Links(){
    return(

        <>
      <Header/>
      <Container>
      <section className={styles.containerLinks}>
        <main className={styles.links}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              <h1> LINKS ÚTEIS</h1>
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