import styles from "../Diligencias/Diligencias.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Diligencias(){
    return(

    <>
      <Header/>
      <Container>
      <section className={styles.homeBack}>
        <main className={styles.home}>
            <p>TESTE DILIGÊNCIAS</p>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Diligencias
