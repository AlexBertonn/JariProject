import styles from "../Material/Material.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

import { Link } from 'react-router-dom';

function Material(){
    return(

    <>
      <header className={styles.header2}>
            <nav className={styles.navegation2}>
            <div className={styles.nav2}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
            <h1>PRIMEIROS PASSOS PARA ANÁLISE</h1>
            </nav>
          </header>




      {/* <Header/> */}
      <Container>
      <section className={styles.containerPasso}>
        <main className={styles.passo}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              {/* <h1> Primeiros passos para análise</h1> */}
              <br />
              <br />
              <h2> 1º Conferencia de montagem </h2>
              <p> A conferência de montagem é o primeiro passo para que o analista identifique se há junto ao recurso todos os dados 
                necessários para análise do mesmo. É de suma importância que o analista cheque: capa, recurso, documentação, Auto de Infração de Trânsito e possíveis imagens anexas pelo recorrente.
                Vale lembra que dentre os documentos citados o mais importante para que a análise seja realizada é o Auto de Infração de Trânsito, pois ele é o documento que dá início ao processo de imposição de penalidade, em decorrência da multa.
                Dito isto, o analista deverá conferir se o auto foi corretamente preenchido, e atende aos requisitos mínimos definidos pelo Artigo 280 do CTB e se a infração encontra-se devidamente caracterizada.             
                São exemplos de caracterização: preenchimento de campo observações com descritivo da conduta assinalada, dados referentes a limites de velocidade ultrapassados (medida realizada, regulamentada e considerada), dados referentes a excesso de pesagem (PBT, PBTC e CMT).
              </p>

              <br />
              
              <h2>2º Conferência de legitimidade</h2>
              <p> O termo "legitimidade" refere-se à conformidade com normas, leis ou princípios que conferem aceitação, validade ou autoridade a algo.
                  No contexto de recursos infracionais, o proprietário do veículo tem o direito de recorrer de qualquer infração. O condutor pode recorrer nos casos em que a infração for de sua responsabilidade e nos quais tenha sido devidamente identificado.
              </p>

              <p>Conforme a Resolução 900/2022 do CONTRAN, o recorrente deve apresentar os seguintes documentos:</p>
              
              <br />
              <p className={styles.marcador}>Cópia da Carteira Nacional de Habilitação (CNH) ou outro documento de identificação que comprove a assinatura do requerente.</p>
              <p className={styles.marcador}>No caso de pessoa jurídica, deve ser apresentado um documento que comprove a representação legal.</p>
              <p className={styles.marcador}>Cópia do Certificado de Registro e Licenciamento de Veículo (CRLV) para identificação do proprietário.</p>
              <p className={styles.marcador}>Procuração, quando aplicável.</p>

              <br />
              <p>Se o proprietário for representado por um procurador, e este for advogado, basta apresentar o número da OAB, não sendo necessário o documento pessoal para conferência da assinatura. Caso o procurador seja uma pessoa física, será necessário apresentar um documento de identificação pessoal.</p>
              
              <br />
              <h3>Outras situações de legitimidade:</h3>
              <p className={styles.marcador}>Verificar a conformidade da assinatura com a do documento apresentado.</p>
              <p className={styles.marcador}>Confirmar a apresentação do documento de identificação pessoal.</p>
              <p className={styles.marcador}>Certificar-se de que foi apresentado o contrato social, nos casos em que o recorrente seja uma pessoa jurídica.</p>
              <p className={styles.marcador}>Verificar a apresentação do Certificado de Condição de Microempreendedor Individual.</p>
              <p className={styles.marcador}>Assegurar que há procuração devidamente constituída no processo, caso um advogado ou outra pessoa assine o recurso em nome do recorrente.</p>
              <p className={styles.marcador}>Determinar se a infração é de responsabilidade do condutor ou se é atribuída exclusivamente ao proprietário.</p>

              <br />

              <h2>3º Conferência de tempestividade </h2>
              <p>A tempestividade de um documento refere-se à apresentação ou submissão desse documento dentro do prazo estipulado por normas legais, regulatórias ou administrativas. É um conceito fundamental no contexto jurídico e administrativo, pois o não cumprimento dos prazos pode resultar em consequências, como a rejeição de pedidos, recursos ou a perda de direitos.</p>
              <p> Diante disso, o recurso deve ser apresentado dentro do prazo estabelecido. Ao realizar o processo de análise é essencial não se basear unicamente nas informações contidas na capa do recurso. Recomenda-se que se verifique as folhas impressas da Pesquisa Histórico de Infrações ou se consulte o sistema GRAL, na seção de Histórico da Autuação.
                  A data do documento ou do recurso será considerada a do carimbo postal presente no envelope enviado pelo recorrente ou a data do registro no Sistema de Protocolo (SIPRO), caso o recurso seja protocolado diretamente no local apropriado.</p>
              
              <br />
              <h3>Importante</h3>
              <p>É imperativo realizar a verificação no sistema de forma consistente, evitando a confiança excessiva nas informações contidas na capa do recurso. Recomenda-se, ainda, que se confirme a data por meio do carimbo do correio no envelope ou pela data anotada na primeira folha do recurso.</p>
              <br />

              <h2>4º Consistência da autuação, bem como da penalidade</h2>
              <p>A notificação da autuação será considerada inconsistente nos seguintes casos: quando houver erro ou omissão em seus dados, quando for emitida com informações incompletas ou incorretas, e quando não for expedida de acordo com as disposições previstas no Código de Trânsito Brasileiro (CTB), ou seja, dentro do prazo de 30 dias após a ocorrência da infração.</p>
              <p>Adicionalmente, a notificação da penalidade será igualmente considerada inconsistente se houver erro ou omissão, se os dados estiverem incompletos ou divergirem daqueles constantes no Auto de Infração de Trânsito (AIT), bem como se não for devidamente expedida.</p>
              <br />

              <h2>5º Mérito</h2>
              <p>A análise do mérito do recurso dependerá sempre das alegações apresentadas pelo recorrente, que devem ser devidamente fundamentadas. O julgamento será realizado com base na legislação vigente, assegurando a conformidade com os dispositivos legais aplicáveis. Neste contexto, destaca-se o que está disposto no Decreto 44.779/2008, de 16 de abril de 2008, Art. 30, §1º, que estabelece diretrizes relevantes para a avaliação do recurso. Assim, é imprescindível que o recorrente apresente suas razões de forma clara e substancial, a fim de que o mérito do recurso possa ser analisado de maneira adequada e justa.</p>
              
              <br />
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Material