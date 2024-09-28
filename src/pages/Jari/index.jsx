import styles from "../Jari/Jari.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

import { Link } from 'react-router-dom';

function Jari(){
    return(

        <>
          <header className={styles.header2}>
            <nav className={styles.navegation2}>
            <div className={styles.nav2}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
            <h1>O QUE É A JARI?</h1>
            </nav>
          </header>




      {/* <Header/> */}
      <Container>
      <section className={styles.containerJari}>
        <main className={styles.jari}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              {/* <h1> O que é a Jari?</h1> */}
              <br />
              <br />
              <p> A JARI (Junta Administrativa de Recursos de Infrações) é um órgão do Sistema Nacional de Trânsito (SNT) que analisa recursos de infrações de trânsito. A JARI é responsável por julgar os recursos interpostos por motoristas que foram multados, sendo que a maioria dos recursos são em relação a multas de trânsito. 
                  A JARI foi instituída pela Lei Federal nº 9.503, de 23 de setembro de 1997, no artigo 16 do Código de Trânsito Brasileiro (CTB). 
                  A JARI tem as seguintes competências:
                  Julgar os recursos interpostos pelos infratores.
                  Solicitar informações complementares aos órgãos e entidades de trânsito e rodoviários, para uma melhor análise da situação.
              </p>

              <br />
              
              <h1>Estrutura e funcionamento</h1>
              <p>Composição: A JARI é composta por membros designados, que podem incluir servidores públicos, especialistas em direito tributário e representantes da sociedade civil. A composição varia de acordo com a legislação de cada município ou estado.</p>
              <p>Instância de Recurso: A JARI atua como uma instância revisora. Após a decisão de um órgão fiscalizador, o contribuinte pode interpor um recurso à JARI, que avaliará a legalidade e a justiça da decisão original.</p>
              <p>Prazos: Geralmente, existem prazos específicos para a apresentação de recursos e para a decisão da JARI. O contribuinte deve ficar atento a essas datas para garantir seu direito de defesa.</p>
              <p>Processo: O processo na JARI é menos formal que o judicial, permitindo que o contribuinte apresente suas razões de forma clara e direta. A JARI analisa a documentação apresentada e pode realizar audiências para ouvir as partes envolvidas.</p>

              <br />

              <h1>Importância </h1>
              <p>Acesso à Justiça: A JARI é uma ferramenta importante para garantir o direito de defesa dos contribuintes, promovendo um sistema mais justo e transparente.</p>
              <p>Desburocratização: A análise dos recursos na JARI costuma ser mais rápida do que a judicial, facilitando a resolução de conflitos.</p>
              <p>Controle Social: Com a presença de representantes da sociedade civil, a JARI também contribui para a democratização do processo administrativo.</p>

              <br />

              <h1>Conclusão</h1>
              <p>Em resumo, a JARI desempenha um papel fundamental na relação entre o contribuinte e a administração pública, assegurando que decisões fiscais sejam revisadas de forma justa e transparente. Essa estrutura é essencial para a proteção dos direitos dos cidadãos e para a manutenção de um sistema tributário equitativo. Se você estiver lidando com questões fiscais, entender o funcionamento da JARI pode ser muito útil!</p>
              
              <br />
              
              <br />
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Jari