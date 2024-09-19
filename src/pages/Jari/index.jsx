import styles from "../Jari/Jari.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Jari(){
    return(

        <>
      <Header/>
      <Container>
      <section className={styles.homeBack}>
        <main className={styles.home}>
            <p>TESTE JARI</p>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Jari