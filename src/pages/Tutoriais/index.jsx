import styles from "../Tutoriais/Tutoriais.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Tutoriais(){
    return(

    <>
      <Header/>
      <Container>
      <section className={styles.containerTutoriais}>
        <main className={styles.tutoriais}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
            <h1> TUTORIAIS</h1>
              <p> Explore nossa coleção de tutoriais interativos para maximizar sua experiência com nossos serviços. Aqui, você encontrará guias passo a passo que abrangem desde as funcionalidades básicas até dicas avançadas, tudo para ajudá-lo a aproveitar ao máximo nossas ferramentas.
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


