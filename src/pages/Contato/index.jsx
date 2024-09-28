import Container from "../../components/Container";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "../Contato/Contato.module.css"

function Contato(){
    return(
        <>
        <Header/>
        <Container>
            <main className={styles.testeContato}>
                <h1>(31) 3501-3000</h1>
            </main>
        
        </Container>
        <Footer/>
        </>
    )
}
export default Contato
