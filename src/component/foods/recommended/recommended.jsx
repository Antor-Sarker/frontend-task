import styles from './recommended.module.css'

function Recommended({data, count}){
    return(
        <>
            <div className={styles.recommended}>
                {
                    (data.slice(count[2],count[3])).map(item=>{
                        
                        return(
                            <div>
                                <img src={item.ImageUrl} alt="" className={styles.recommendedImage}/>
                                <p className={styles.recommendedName}>{item.Name}</p>
                            </div>
                        )
                    
                    })
                }
            </div>
        </>
    )
}

export default Recommended