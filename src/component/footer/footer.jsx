import styles from './footer.module.css'

function Footer(){
    return(
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerContaint}>

                <div>
                    <input type="email" name="" id="" placeholder='Enter Your Email'/>
                </div>
                <div>pti</div>
                <div style={{display: 'flex'}}>
                    <div style={{paddingRight: '5%'}}>Copyright©Tripp.All Right Reserved</div>
                    <div>icon</div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer