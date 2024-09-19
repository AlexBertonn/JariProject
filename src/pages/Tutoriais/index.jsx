import styles from "../Tutoriais/Tutoriais.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Tutoriais(){
    return(

    <>
      <Header/>
      <Container>
      <section className={styles.homeBack}>
        <main className={styles.home}>
            <p>TESTE TUTORIAIS</p>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Tutoriais


