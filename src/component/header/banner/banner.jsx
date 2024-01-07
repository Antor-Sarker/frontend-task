import styles from './banner.module.css'
import cover from '../../../assets/Image1.png' 

function Banner(){
    return (
        <>
            <div style={{position: 'relative'}}>
                <div className={styles.text}>
                <h2>Deliver Food To Your Door</h2>
                    <h2>Steepl</h2>
                    <div className={styles.details}>Authentic Foods,Quick Service,Fast Delivery</div>
                </div>
                <div className={styles.bigScreen}>
                    <h1>Deliver Food To Your</h1>
                    <h1>Door Steep</h1>
                    <p>Authentic Foods, Quick Service, Fast Delivery</p>
                </div>
                <div className={styles.coverContainer}>
                    <img src={cover} className={styles.coverImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner