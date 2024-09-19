import styles from "../Material/Material.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Material(){
    return(

    <>
      <Header/>
      <Container>
      <section className={styles.homeBack}>
        <main className={styles.home}>
            <p>TESTE MATERIAIS DIDÁTICOS</p>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Material