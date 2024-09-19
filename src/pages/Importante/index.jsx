import styles from "../Importante/Importante.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Links(){
    return(

        <>
      <Header/>
      <Container>
      <section className={styles.homeBack}>
        <main className={styles.home}>
            <p>TESTE LINKS IMPORTANTES</p>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Links