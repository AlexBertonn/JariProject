import styles from "../Codigos/Codigos.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Codigos(){
    return(

        <>
      <Header/>
      <Container>
      <section className={styles.homeBack}>
        <main className={styles.home}>
            <p>TESTE CODIGOS</p>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Codigos