import styles from "../Diligencias/Diligencias.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

import { Link } from 'react-router-dom';
function Diligencias(){
    return(

    <>
      <header className={styles.header2}>
            <nav className={styles.navegation2}>
            <div className={styles.nav2}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
            <h1>DILIGÊNCIAS</h1>
            </nav>
          </header>




      {/* <Header/> */}
      <Container>
      <section className={styles.containerDiligencia}>
        <main className={styles.diligencia}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              <br />
              <br />
              <h2> O que é uma diligência?</h2>
              <p> Uma diligência de recursos é um procedimento realizado para investigar ou coletar informações adicionais sobre um recurso interposto em um processo. Esse tipo de diligência geralmente ocorre em contextos jurídicos, como em tribunais ou em processos administrativos.
              </p>
              <br />
              <h2>Objetivo</h2>
              <p>O principal objetivo da diligência de recursos é esclarecer questões que possam influenciar a decisão sobre o recurso apresentado, como a revisão de provas, a coleta de documentos ou a realização de audiências.</p>
              <br />
              <h2>Quando é Realizada</h2>
              <p>É comum que a diligência de recursos seja solicitada quando a parte interessada acredita que há informações relevantes que não foram consideradas no julgamento anterior.</p>
              <br />
              <h2>Processo</h2>
              <p>A diligência pode incluir a notificação de partes envolvidas, a busca por documentos ou a realização de atos que ajudem a elucidar os fatos do caso.</p>
              <br />
              <h2>Resultado</h2>
              <p>O resultado da diligência pode impactar a decisão final sobre o recurso, permitindo que o tribunal ou autoridade competente tome uma decisão mais informada e justa.</p>
              <br />
              <h3>Exemplo</h3>
              <p>Se uma parte recorre de uma decisão judicial, pode ser realizada uma diligência para ouvir testemunhas que não foram ouvidas anteriormente ou para obter documentos que possam comprovar a argumentação do recorrente.</p>
              <p>Em resumo, a diligência de recursos é uma etapa importante para garantir que todos os aspectos relevantes de um caso sejam considerados antes que uma decisão final seja tomada.</p>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Diligencias
