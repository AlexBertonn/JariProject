import styles from "../Codigos/Codigos.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

function Codigos(){
    return(

        <>
      <Header/>
      <Container>
      <section className={styles.containerCodigo}>
        <main className={styles.codigo}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              <div className={styles.direcionador}>
                <h1>teste</h1>
              </div>
              <h1> CÓDIGOS</h1>
              <p> A JARI (Junta Administrativa de Recursos de Infrações) é um órgão do Sistema Nacional de Trânsito (SNT) que analisa recursos de infrações de trânsito. A JARI é responsável por julgar os recursos interpostos por motoristas que foram multados, sendo que a maioria dos recursos são em relação a multas de trânsito. 
                  A JARI foi instituída pela Lei Federal nº 9.503, de 23 de setembro de 1997, no artigo 16 do Código de Trânsito Brasileiro (CTB). 
                  A JARI tem as seguintes competências:
                  Julgar os recursos interpostos pelos infratores.
                  Solicitar informações complementares aos órgãos e entidades de trânsito e rodoviários, para uma melhor análise da situação.
                  A JARI da Cidade de São Paulo é composta por 27 juntas, que se reúnem semanalmente. Cada junta é composta por seis membros, organizados em duas turmas de três membros.
              </p>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Codigos