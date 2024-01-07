import styles from './popular.module.css'

function Popular({data,count}){
    return(
        <>
            <div className={styles.popular}>
                {
                    (data.slice(count[0],count[1])).map(item=>{
                        
                        return(
                            <div>
                                <img src={item.ImageUrl} alt="" className={styles.popularImage}/>
                                <p className={styles.popularName}>{item.Name}</p>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Popular