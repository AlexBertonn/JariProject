import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <div className={styles.logoFooter}>
                <div className={styles.logoBlack}></div>
            </div>
            <div className={styles.infoFooter}>
                <div><h1>PORTAL INFORMATIVO DE RECURSOS DE INFRAÇÕES DE TRÂNSITO</h1></div>
                <div><p>Coordenador Marcio Martins</p></div>
            </div>
        </footer>
    )
}

export default Footer