import styles from "../Codigos/Codigos.module.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container';

import { Link } from 'react-router-dom';

function Codigos(){
    return(

        <>
      <header className={styles.header2}>
            <nav className={styles.navegation2}>
            <div className={styles.nav2}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
            <h1>CÓDIGOS</h1>
            </nav>
          </header>




      {/* <Header/> */}
      <Container>
      <section className={styles.containerCodigo}>
        <main className={styles.codigo}>
            <div className={styles.imgCard}></div>
            <div className={styles.textContainer}>
              <div className={styles.direcionador}>
                <h1>*Aqui vai entrar uma lógica para mandar direto para os códigos indicados*</h1>
              </div>
              {/* <h1> CÓDIGOS</h1> */}
              <p>Ainda estou desenvolvendo um método de texto para adicionar os códigos aqui de uma forma mais pratica de visualização.
              </p>
              <div className={styles.tipificacao}>
                <div className={styles.cod}>
                  <h2>010</h2>
                  <p>Auto inconsistente, visto que houve erro na tipificação da infração.</p>
                </div>
                <div className={styles.cod}>
                  <h2>011</h2>
                  <p>Código de enquadramento incorreto no auto de infração. </p>
                </div>
                <div className={styles.cod}>
                  <h2>012</h2>
                  <p>Descrição da infração não condiz com o respectivo código. </p>
                </div>
                <div className={styles.cod}>
                  <h2>018</h2>
                  <p>Auto inconsistente devido a rasura na tipificação da infração. </p>
                </div>
                <div className={styles.cod}>
                  <h2>019</h2>
                  <p>Erro na digitação do código da infração. </p>
                </div>
              </div>

              <div className={styles.local}>
                <div className={styles.cod}>
                  <h2>020</h2>
                  <p>Auto inconsistente, visto que houve erro na identificação do local da infração.</p>
                </div>
                <div className={styles.cod}>
                  <h2>021</h2>
                  <p>Local assinalado no AIT não existe.</p>
                </div>
                <div className={styles.cod}>
                  <h2>022</h2>
                  <p>Omissão no AIT de elementos identificadores do local de cometimento da infração.</p>
                </div>
                <div className={styles.cod}>
                  <h2>023</h2>
                  <p>Local assinalado no AIT não é de gerenciamento do DER/MG. </p>
                </div>
                <div className={styles.cod}>
                  <h2>024</h2>
                  <p>Local descrito no AIT não corresponde ao Município citado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>028</h2>
                  <p>Rasura na identificação do local da infração.</p>
                </div>
                <div className={styles.cod}>
                  <h2>029</h2>
                  <p>Erro na digitação do local da infração.</p>
                </div>
              </div>

              <div className={styles.hora}>
                <div className={styles.cod}>
                  <h2>030</h2>
                  <p>Auto inconsistente, visto que a hora da infração não foi devidamente identificada.</p>
                </div>
                <div className={styles.cod}>
                  <h2>031</h2>
                  <p>Erro/omissão no AIT do horário de cometimento da infração. </p>
                </div>
                <div className={styles.cod}>
                  <h2>038</h2>
                  <p>Auto de infração inconsistente devido a rasura no campo "hora". </p>
                </div>
                <div className={styles.cod}>
                  <h2>039</h2>
                  <p>Erro na digitação da hora da infração. </p>
                </div>
              </div>

              <div className={styles.data}>
                <div className={styles.cod}>
                  <h2>040</h2>
                  <p>Auto inconsistente, visto que a data da autuação não foi devidamente identificada.</p>
                </div>
                <div className={styles.cod}>
                  <h2>048</h2>
                  <p>Auto de infração inconsistente devido a rasura no campo "data".</p>
                </div>
                <div className={styles.cod}>
                  <h2>049</h2>
                  <p>Erro na digitação da data da infração.</p>
                </div>
              </div>

              <div className={styles.identCond}>
                <div className={styles.cod}>
                  <h2>050</h2>
                  <p>Auto inconsistente, visto que houve erro na identificação do condutor.</p>
                </div>
                <div className={styles.cod}>
                  <h2>051</h2>
                  <p>Nome do condutor do veículo está incorreto.</p>
                </div>
                <div className={styles.cod}>
                  <h2>052</h2>
                  <p>CPF indicado no AIT não corresponde ao nome citado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>053</h2>
                  <p>Número da CNH indicada no AIT não corresponde ao nome citado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>054</h2>
                  <p>Falta de assinatura do condutor ou justificativa para sua ausência.</p>
                </div>
                <div className={styles.cod}>
                  <h2>058</h2>
                  <p>Rasura na identificação do condutor.</p>
                </div>
                <div className={styles.cod}>
                  <h2>059</h2>
                  <p>Erro na digitação de dados de identificação do condutor.</p>
                </div>
              </div>

              <div className={styles.placa}>
                <div className={styles.cod}>
                  <h2>060</h2>
                  <p>Auto inconsistente, visto que houve erro na identificação da placa do veículo.</p>
                </div>
                <div className={styles.cod}>
                  <h2>068</h2>
                  <p>Rasura na identificação da placa do veículo infrator.</p>
                </div>
                <div className={styles.cod}>
                  <h2>069</h2>
                  <p>Erro na digitação da placa do veículo infrator. </p>
                </div>
              </div>

              <div className={styles.identVeic}>
                <div className={styles.cod}>
                  <h2>070</h2>
                  <p>Auto inconsistente, visto que houve erro/omissão na identificação do veículo.</p>
                </div>
                <div className={styles.cod}>
                  <h2>071</h2>
                  <p>Erro na identificação da marca/modelo do veículo infrator.</p>
                </div>
                <div className={styles.cod}>
                  <h2>072</h2>
                  <p>Erro/omissão na identificação da espécie do veículo infrator..</p>
                </div>
                <div className={styles.cod}>
                  <h2>073</h2>
                  <p>Erro na identificação do Chassi/RENAVAM do veículo infrator.</p>
                </div>
                <div className={styles.cod}>
                  <h2>078</h2>
                  <p>Rasura na identificação do veículo infrator.</p>
                </div>
                <div className={styles.cod}>
                  <h2>079</h2>
                  <p>Erro na digitação dos dados de identificação do veículo infrator.</p>
                </div>
              </div>

              <div className={styles.identAutuador}>
                <div className={styles.cod}>
                  <h2>080</h2>
                  <p>Auto inconsistente, visto que houve erro na identificação do autuador.</p>
                </div>
                <div className={styles.cod}>
                  <h2>081</h2>
                  <p>O agente de trânsito não foi devidamente credenciado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>082</h2>
                  <p>O agente de trânsito não foi devidamente identificado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>083</h2>
                  <p>Ausência de assinatura por parte do agente de trânsito no AIT.</p>
                </div>
                <div className={styles.cod}>
                  <h2>089</h2>
                  <p>Erro na digitação da identificação do agente autuador.</p>
                </div>
              </div>

              <div className={styles.excludente}>
                <div className={styles.cod}>
                  <h2>090</h2>
                  <p>O recorrente comprova que a infração foi em decorrência de situações anomalas.</p>
                </div>
                <div className={styles.cod}>
                  <h2>091</h2>
                  <p>Veículo roubado/furtado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>092</h2>
                  <p>Prestação de socorro médico em situação de urgência/emergência.</p>
                </div>
                <div className={styles.cod}>
                  <h2>093</h2>
                  <p>O recorrente comprova situação de coação irresistível.</p>
                </div>
                <div className={styles.cod}>
                  <h2>094</h2>
                  <p>O recorrente comprova motivo de força maior na ocorrência da infração.</p>
                </div>
              </div>

              <div className={styles.bisInIdem}>
                <div className={styles.cod}>
                  <h2>100</h2>
                  <p>Infração caracterizada como "bis in idem".</p>
                </div>
                <div className={styles.cod}>
                  <h2>101</h2>
                  <p>Infração decorrente: por ex.: ser autuado, no mesmo evento, por
                  não ser habilitado (5010) e por não portar CNH (6912).</p>
                </div>
                <div className={styles.cod}>
                  <h2>102</h2>
                  <p>Infração concorrente. por ex.: o mesmo veículo ser autuado duas
                  vezes no mesmo dia e horário em municípios diferentes. </p>
                </div>
                <div className={styles.cod}>
                  <h2>103</h2>
                  <p>O veículo foi autuado no mesmo código mais de uma vez no mesmo
                  evento.</p>
                </div>
              </div>

              <div className={styles.inconAdministrativa}>
                <div className={styles.cod}>
                  <h2>110</h2>
                  <p>Inconsistência administrativa.</p>
                </div>
                <div className={styles.cod}>
                  <h2>111</h2>
                  <p>Decurso de prazo. </p>
                </div>
                <div className={styles.cod}>
                  <h2>112</h2>
                  <p>Auto de infração extraviado. </p>
                </div>
                <div className={styles.cod}>
                  <h2>113</h2>
                  <p>Auto lavrado por informação de terceiros. </p>
                </div>
              </div>

              <div className={styles.revRadar}>
                <div className={styles.cod}>
                  <h2>120</h2>
                  <p>Irregularidades verificadas em equipamentos de medição de velocidade.</p>
                </div>
                <div className={styles.cod}>
                  <h2>121</h2>
                  <p>O equipamento medidor de velocidade não estava devidamente
                  aferido.</p>
                </div>
                <div className={styles.cod}>
                  <h2>122</h2>
                  <p>O equipamento medidor de velocidade não foi devidamente
                  homologado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>123</h2>
                  <p>O equipamento medidor de velocidade apresentava-se defeituoso.</p>
                </div>
                <div className={styles.cod}>
                  <h2>124</h2>
                  <p>O equipamento medidor de velocidade não registrou os dados
                  legalmente exigidos.</p>
                </div>
                <div className={styles.cod}>
                  <h2>125</h2>
                  <p>O equipamento medidor de velocidade não foi devidamente
                  identificado. </p>
                </div>
              </div>

              <div className={styles.balanca}>
                <div className={styles.cod}>
                  <h2>130</h2>
                  <p>Irregularidades verificadas em equipamentos de medição de peso.</p>
                </div>
                <div className={styles.cod}>
                  <h2>131</h2>
                  <p>O equipamento de medição de peso não foi devidamente
                  homologado. </p>
                </div>
                <div className={styles.cod}>
                  <h2>132</h2>
                  <p>O equipamento de medição de peso não estava devidamente aferido.</p>
                </div>
                <div className={styles.cod}>
                  <h2>133</h2>
                  <p>O equipamento de medição de peso encontrava-se viciado ou
                  defeituoso.</p>
                </div>
                <div className={styles.cod}>
                  <h2>134</h2>
                  <p>O equipamento de medição de peso não foi devidamente
                  identificado.</p>
                </div>
              </div>

              <div className={styles.indentInfrator}>
                <div className={styles.cod}>
                  <h2>140</h2>
                  <p>Ausência de identificação do infrator, quando obrigatório.</p>
                </div>
                <div className={styles.cod}>
                  <h2>141</h2>
                  <p>Não consta no AIT a identificação do infrator, podendo fazê-lo.</p>
                </div>
                <div className={styles.cod}>
                  <h2>148</h2>
                  <p>Rasura nos dados do infrator prejudicando sua identificação.</p>
                </div>
                <div className={styles.cod}>
                  <h2>149</h2>
                  <p>Erro na identificação do infrator.</p>
                </div>
              </div>

              <div className={styles.sinalizacao}>
                <div className={styles.cod}>
                  <h2>150</h2>
                  <p>Penalidade aplicada indevidamente, visto que a sinalização estava insuficiente e/ou irregular.</p>
                </div>
                <div className={styles.cod}>
                  <h2>151</h2>
                  <p>A sinalização no dia e local da infração estava inadequada/inexistente.</p>
                </div>
                <div className={styles.cod}>
                  <h2>152</h2>
                  <p>A sinalização no dia e local da infração estava insuficiente/irregular.</p>
                </div>
                <div className={styles.cod}>
                  <h2>153</h2>
                  <p>A placa de sinalização estava pichada.</p>
                </div>
                <div className={styles.cod}>
                  <h2>154</h2>
                  <p>A placa de sinalização estava encoberta pela vegetação.</p>
                </div>
              </div>

              <div className={styles.caracteInfra}>
                <div className={styles.cod}>
                  <h2>160</h2>
                  <p>A infração não foi devidamente caracterizada.</p>
                </div>
                <div className={styles.cod}>
                  <h2>161</h2>
                  <p>Falta de "BO" ou relatório circunstanciado descrevendo a
                  ocorrência da infração.</p>
                </div>
                <div className={styles.cod}>
                  <h2>162</h2>
                  <p>Não identificação no AIT do elemento definidor da infração
                  cometida.</p>
                </div>
                <div className={styles.cod}>
                  <h2>163</h2>
                  <p>Não foi constatada a ocorrência da infração autuada - infração
                  inexistente.</p>
                </div>
              </div>

              <div className={styles.comprovaAlega}>
                <div className={styles.cod}>
                  <h2>230</h2>
                  <p>O recorrente comprova suas alegações.</p>
                </div>
                <div className={styles.cod}>
                  <h2>231</h2>
                  <p>O recorrente comprova que o condutor estava devidamente
                  habilitado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>232</h2>
                  <p>O recorrente comprova que o veiculo estava devidamente licenciado. </p>
                </div>
                <div className={styles.cod}>
                  <h2>234</h2>
                  <p>O recorrente comprova a clonagem da placa do seu veículo. </p>
                </div>
              </div>

              <div className={styles.notAutuacao}>
                <div className={styles.cod}>
                  <h2>250</h2>
                  <p>Notificação da autuação inconsistente.</p>
                </div>
                <div className={styles.cod}>
                  <h2>251</h2>
                  <p>Notificação da autuação emitida com dados incompletos. </p>
                </div>
                <div className={styles.cod}>
                  <h2>252</h2>
                  <p>Notificação da autuação emitida com dados incorretos. </p>
                </div>
                <div className={styles.cod}>
                  <h2>253</h2>
                  <p>Notificação da autuação não foi expedida de acordo com o previsto
                  no CTB. </p>
                </div>
                <div className={styles.cod}>
                  <h2>255</h2>
                  <p>FICI inconsistente face inadequação dos procedimentos
                  indispensáveis previstos na Resolução 149/03. </p>
                </div>
              </div>

              <div className={styles.notPenalidade}>
                <div className={styles.cod}>
                  <h2>260</h2>
                  <p>Notificação da penalidade inconsistente.
                  </p>
                </div>
                <div className={styles.cod}>
                  <h2>261</h2>
                  <p>Notificação da penalidade emitida com dados incompletos.</p>
                </div>
                <div className={styles.cod}>
                  <h2>262</h2>
                  <p>Divergência entre os dados da Notificação da Penalidade e os dados
                  do AIT.</p>
                </div>
                <div className={styles.cod}>
                  <h2>263</h2>
                  <p>Notificação da penalidade não foi devidamente expedida.</p>
                </div>
              </div>

              <div className={styles.deferidoEstado}>
                <div className={styles.cod}>
                  <h2>400</h2>
                  <p>Processo DEFERIDO, julgado por JARI de outro Estado.</p>
              </div>

              <div className={styles.intemp}>
                <div className={styles.cod}>
                  <h2>500</h2>
                  <p>Recurso intempestivo.</p>
                </div>
                <div className={styles.cod}>
                  <h2>501</h2>
                  <p>Prescrição do prazo recursal (5 anos). Recurso EXTEMPORÂNEO.
                     Decreto Federal 20910/32 e legislação aplicada ao expurgo dedocumentos.</p>
                </div>
              </div>

              <div className={styles.faltaLegit}>
                <div className={styles.cod}>
                  <h2>510</h2>
                  <p>O recorrente não comprova ser parte legítima.</p>
                </div>
                <div className={styles.cod}>
                  <h2>511</h2>
                  <p>Falta procuração devidamente constituída no processo. </p>
                </div>
                <div className={styles.cod}>
                  <h2>512</h2>
                  <p>Procurador não é devidamente inscrito na OAB, contrariando a
                  deliberação nº 30 do CETRAN. </p>
                </div>
                <div className={styles.cod}>
                  <h2>513</h2>
                  <p>O recorrente não apresentou contrato social ou não é parte
                  integrante do mesmo - pessoa jurídica. </p>
                </div>
                <div className={styles.cod}>
                  <h2>514</h2>
                  <p>Assinatura divergente.</p>
                </div>
                <div className={styles.cod}>
                  <h2>515</h2>
                  <p>O recorrente não comprova ser parte legítima, visto que não assinou
                  o recurso. </p>
                </div>
                <div className={styles.cod}>
                  <h2>516</h2>
                  <p>O recorrente não comprova ser parte legítima, uma vez que não
                  apresenta documento de identificação pessoal. </p>
                </div>
                <div className={styles.cod}>
                  <h2>517</h2>
                  <p>O recorrente não comprova ser o proprietário nem o condutor do
                  veículo.</p>
                </div>
                <div className={styles.cod}>
                  <h2>518</h2>
                  <p>O recorrente não comprova legítimidade, visto que a infração não é
                  de sua responsabilidade.</p>
                </div>
              </div>

              <div className={styles.naoComprovaAlega}>
                <div className={styles.cod}>
                  <h2>520</h2>
                  <p>O recorrente não comprova suas alegações.</p>
                </div>
                <div className={styles.cod}>
                  <h2>521</h2>
                  <p>O recorrente não comprova que o condutor estava habilitado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>522</h2>
                  <p>O recorrente não comprova que o veículo estava devidamente
                  licenciado à época da infração.</p>
                </div>
                <div className={styles.cod}>
                  <h2>523</h2>
                  <p>O recorrente não comprova a clonagem da placa do veículo.</p>
                </div>
                <div className={styles.cod}>
                  <h2>524</h2>
                  <p>O recorrente não comprova que o condutor infrator foi devidamente
                  identificado (pessoa jurídica), código de infração 500-2.</p>
                </div>
                <div className={styles.cod}>
                  <h2>525</h2>
                  <p>O recorrente não comprova o roubo/furto do veículo.</p>
                </div>
              </div>

              <div className={styles.alegaDiversa}>
                <div className={styles.cod}>
                  <h2>530</h2>
                  <p>Recurso diverso do motivo da autuação.</p>
                </div>
                <div className={styles.cod}>
                  <h2>531</h2>
                  <p>Os motivos alegados no recurso não tem relação com a infração
                  cometida.</p>
                </div>
                <div className={styles.cod}>
                  <h2>532</h2>
                  <p>O recorrente solicita transferência de pontuação.</p>
                </div>
                <div className={styles.cod}>
                  <h2>533</h2>
                  <p>O recorrente alega que vendeu o veículo.</p>
                </div>
                <div className={styles.cod}>
                  <h2>534</h2>
                  <p>Recurso desprovido de argumentação.</p>
                </div>
              </div>

              <div className={styles.alegaImproced}>
                <div className={styles.cod}>
                  <h2>560</h2>
                  <p>Alegação improcedente, motivo alegado não é suficiente para justificar o
                     cancelamento da infração.</p>
                </div>
                <div className={styles.cod}>
                  <h2>561</h2>
                  <p>O recorrente confirma o cometimento da infração e a alegação apresentada não justifica o cancelamento da multa.</p>
                </div>
                <div className={styles.cod}>
                  <h2>562</h2>
                  <p>A infração será mantida isentando o autuado proprietário de responsabilidade em face do art. 134 do CTB. </p>
                </div>
                <div className={styles.cod}>
                  <h2>563</h2>
                  <p>O auto de infração foi corretamente lavrado.</p>
                </div>
                <div className={styles.cod}>
                  <h2>564</h2>
                  <p>A notificação da autuação foi devidamente expedida nos termos do
                  art. 281 do CTB. </p>
                </div>
                <div className={styles.cod}>
                  <h2>565</h2>
                  <p>A notificação da penalidade foi devidamente expedida nos termos do
                  art. 282 do CTB. </p>
                </div>
                <div className={styles.cod}>
                  <h2>566</h2>
                  <p>A infração está devidamente caracterizada.</p>
                </div>
              </div>

              <div className={styles.sinaliCorreta}>
                <div className={styles.cod}>
                  <h2>610</h2>
                  <p>A sinalização no local e data da infração atendia a legislação vigente.</p>
                </div>
                <div className={styles.cod}>
                  <h2>611</h2>
                  <p>A sinalização na data e local estava em perfeitas condições de
                  legibilidade/visibilidade.</p>
                </div>
                <div className={styles.cod}>
                  <h2>612</h2>
                  <p>A sinalização do redutor eletrônico de velocidade atendia a
                  legislação vigente à época da infração.</p>
                </div>
              </div>

              <div className={styles.indefEstado}>
                <div className={styles.cod}>
                  <h2>800</h2>
                  <p>Processo INDEFERIDO, julgado por JARI de outro Estado.</p>
                </div>
              </div>

              <div className={styles.dilig}>
                <div className={styles.cod}>
                  <h2>900</h2>
                  <p>Processo retirado de pauta para diligência.</p>
                </div>
                <div className={styles.cod}>
                  <h2>901</h2>
                  <p>Diligencia a PMMG.</p>
                </div>
                <div className={styles.cod}>
                  <h2>902</h2>
                  <p>Diligência ao DETRAN-MG.</p>
                </div>
                <div className={styles.cod}>
                  <h2>903</h2>
                  <p>Diligência à Coordenadoria Regional do DER/MG. </p>
                </div>
                <div className={styles.cod}>
                  <h2>904</h2>
                  <p>Diligência à Procuradoria Jurídica do DER/MG. </p>
                </div>
                <div className={styles.cod}>
                  <h2>905</h2>
                  <p>Diligência à Diretoria de Operação da Via - Serviço de Controle
                  Operacional - DER/MG.</p>
                </div>
              </div>

              <div className={styles.pedidoVisita}>
                <div className={styles.cod}>
                  <h2>950</h2>
                  <p>Pedido de visitas.</p>
                </div>
                <div className={styles.cod}>
                  <h2>951</h2>
                  <p>Pedido de visitas solicitado pelo Presidente.</p>
                </div>
                <div className={styles.cod}>
                  <h2>952</h2>
                  <p>Pedido de visitas solicitado pelo representante do DER-MG.</p>
                </div>
                <div className={styles.cod}>
                  <h2>953</h2>
                  <p>Pedido de visitas solicitado pelo representante da sociedade.</p>
                </div>
              </div>

              <div className={styles.processPausado}>
                <div className={styles.cod}>
                  <h2>990</h2>
                  <p>Pedido de visitas.</p>
                </div>
                <div className={styles.cod}>
                  <h2>991</h2>
                  <p>Processo distribuído anteriormente para outra Junta. </p>
                </div>
                <div className={styles.cod}>
                  <h2>992</h2>
                  <p>Falta de tempo para concluir a pauta. </p>
                </div>
                <div className={styles.cod}>
                  <h2>993</h2>
                  <p>Qualquer membro da junta se sentir impediudo de participar do julgamento. </p>
                </div>
                <div className={styles.cod}>
                  <h2>999</h2>
                  <p>Processo excluído de pauta. </p>
                </div>
              </div>

            </div>
            </div>
        </main>
      </section>
      </Container>
      <Footer/>
    </>

    )
}

export default Codigos