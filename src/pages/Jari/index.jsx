import styles from "../Jari/Jari.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Jari(){
    return(

        <>
      <Header/>
      <Container>
      <section className={styles.containerJari}>
        <main className={styles.jari}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              <h1> O que é a Jari?</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente beatae officia sunt accusamus! 
                Pariatur ex excepturi recusandae assumenda fuga veniam consequuntur quod nobis. Totam assumenda, praesentium, 
                illum ullam saepe ea tempora explicabo, quaerat expedita esse nulla fuga! Quam recusandae deleniti animi, accusantium 
                optio possimus rem officia libero accusamus voluptatibus repellendus ducimus est iure perferendis soluta eos facilis eius. Eveniet.</p>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Jari