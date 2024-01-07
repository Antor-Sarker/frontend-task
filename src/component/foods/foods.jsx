import { useEffect } from "react"
import { useState } from "react"
import {ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import styles from './foods.module.css'
import Popular from "./popular/popular"
import Recommended from "./recommended/recommended"
import Form from "./form/form"
function Foods(){

    const [popularData, setPopularData] = useState([])
    const [recommendedData, setRecommendedData] = useState([])
    const [remainCount, setRemainCount] = useState([])
    const [count, setCount] = useState(0)

    const [isOpenPopularForm, setOpenPopularForm]= useState(false)
    const [isOpenRecomendForm, setOpenRecomendForm]= useState(false)

    useEffect(()=>{
        
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
        .then(res=>res.json())
        .then(data=>{
            setPopularData(data?.Items.filter(item=> item.IsPopular==true))
            setRecommendedData(data?.Items.filter(item=> item.IsRecommended==true))
            
            if(window.innerWidth >=350 &&  window.innerWidth <= 768){
                setRemainCount([0,3,0,3])
                setCount(3)
            }
            
            else if(window.innerWidth >768 &&  window.innerWidth <= 992){
                setRemainCount([0,4,0,4])
                setCount(4)
            }
            else if(window.innerWidth > 992){
                setRemainCount([0,5,0,5])
                setCount(5)
            }
        })

    },[])
    

    const handelPopularNext=()=>{
        setRemainCount((prev)=>{
            const p = [...prev]

            if((popularData.length) >= p[1]) p[0] = p[1]
            
            if((popularData.length) - p[1] > 0){
                if((popularData.length) - p[1] > (count -1)) p[1] = p[1] + count
                else p[1] = p[1] + ((popularData.length) - p[1])
            }

            return p
        })
    }

    const handelPopularPrev=()=>{
        setRemainCount((prev)=>{
            const p = [...prev]

            if(p[0]>0){
                p[1] = p[0]
                p[0] = p[1]- count
            }
            return p
        })
    }
    const handelRecommendedNext=()=>{
        setRemainCount((prev)=>{
            const p = [...prev]

            if((recommendedData.length) >= p[3]) p[2] = p[3]
            if((recommendedData.length) - p[3] > 0){
                if((recommendedData.length) - p[3] > (count-1)) p[3] = p[3] + count
                else p[3] = p[3] + ((recommendedData.length) - p[3])
            }
            return p
        })
    }

    const handelRecommendedPrev=()=>{
        setRemainCount((prev)=>{
            const p = [...prev]

            if(p[2]>0){
                p[3] = p[2]
                p[2] = p[3]-count
            }
            return p
        })
    }

    const handelAddPopuler=()=>{
        setOpenPopularForm(!isOpenPopularForm)
    }

    const handelAddRecommended=()=>{
        setOpenRecomendForm(!isOpenRecomendForm)
    }

    return (
        <>
        <div className={styles.foodContainer} style={{position: 'relative'}}>

            <div style={{position: 'absolute', width: '100%'}}>
                
            {
                isOpenPopularForm && <Form toggleForm={setOpenPopularForm} setPopularData={setPopularData} setRecommendedData={setRecommendedData}/>
            }
            </div>
            
            <div className={styles.popularContainer}>
                <div className={styles.popular}>
                    <div>Popular</div>
                    <div className={styles.popularButton}>
                        <button className={styles.popularAddMore} onClick={handelAddPopuler}>AddMore</button>
                        {
                            (remainCount[0]==0)?
                            <button
                                className={styles.prev}
                                onClick={handelPopularPrev}
                                disabled>
                                    <ChevronLeftIcon
                                        style={{width:'1.1rem', height:'1.1rem', color: 'rgb(204, 197, 241)'}}/>
                            </button>:

                            <button
                                className={styles.prev}
                                onClick={handelPopularPrev}>
                                <ChevronLeftIcon
                                    style={{width:'1.1rem', height:'1.1rem' }}/>
                            </button>                        
                        }


                        {
                            (remainCount[1]==popularData.length)?
                            <button
                                className={styles.next}
                                onClick={handelPopularNext}
                                disabled>
                                    <ChevronRightIcon style={{width:'1.1rem', height:'1.1rem', color: 'rgb(204, 197, 241)'}}/>
                            </button>
                            :
                            <button
                                className={styles.next}
                                onClick={handelPopularNext}>
                                    <ChevronRightIcon
                                        style={{width:'1.1rem', height:'1.1rem' }}/>
                            </button>
                        }
                        
                    </div>
                </div>
                <Popular
                    data={popularData}
                    count={remainCount}
                />
            </div>
            
            <div style={{position: 'absolute', width: '100%'}}> 
                {
                    isOpenRecomendForm && <Form toggleForm={setOpenRecomendForm} setPopularData={setPopularData} setRecommendedData={setRecommendedData}/>
                }
            </div>
            <div className={styles.recommendedContainer}>
            
                <div className={styles.recommended}>

                    <div>Recommended</div>

                    <div style={{display: 'flex', paddingRight: '3%'}}>
                            <button style={{paddingRight: '1%'}} className={styles.popularAddMore} onClick={handelAddRecommended}>AddMore</button>
                            
                            {
                            (remainCount[2]==0)?
                            <button
                                className={styles.prev}
                                onClick={handelRecommendedPrev}
                                disabled>
                                    <ChevronLeftIcon
                                        style={{width:'1.1rem', height:'1.1rem', color: 'rgb(204, 197, 241)'}}/>
                            </button>:

                            <button
                                className={styles.prev}
                                onClick={handelRecommendedPrev}>
                                <ChevronLeftIcon
                                    style={{width:'1.1rem', height:'1.1rem' }}/>
                            </button>                        
                        }


                        {
                            (remainCount[3]==recommendedData.length)?
                            <button
                                className={styles.next}
                                onClick={handelRecommendedNext}
                                disabled>
                                    <ChevronRightIcon style={{width:'1.1rem', height:'1.1rem', color: 'rgb(204, 197, 241)'}}/>
                            </button>
                            :
                            <button
                                className={styles.next}
                                onClick={handelRecommendedNext}>
                                    <ChevronRightIcon
                                        style={{width:'1.1rem', height:'1.1rem' }}/>
                            </button>
                        }
                    </div>
                </div>
                <Recommended data={recommendedData} count={remainCount}/>
            </div>
            
        </div>

        </>
    )
}

export default Foods