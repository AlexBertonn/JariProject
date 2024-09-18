import Container from "../../components/Container";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "../Contato/Contato.module.css"

function Contato(){
    return(
        <>
        <Header/>
        <Container>
            <main className={styles.testSobre}>
                <h1>Contato Aqui!</h1>
                <p> Paragfrafo</p>
            </main>
        
        </Container>
        <Footer/>
        </>
    )
}
export default Contato
