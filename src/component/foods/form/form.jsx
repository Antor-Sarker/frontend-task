import styles from './form.module.css'

function Form({toggleForm,setPopularData,setRecommendedData}){
    console.log(setPopularData,setRecommendedData)
    const handelSubmit=(e)=>{
        e.preventDefault()
        toggleForm((prev)=>!prev)
        
        const itemName = e.target.name.value
        const itemPrice = e.target.price.value
        const imageUrl = e.target.imgUrl.value
        const popular = e.target.popular.checked
        const recommended = e.target.recommended.checked
        const itemId = crypto.randomUUID()

        const formData = {
            Id: itemId,
            ImageUrl: imageUrl,
            IsPopular: popular,
            IsRecommended: recommended,
            Name:itemName,
            Price: itemPrice,
        }

        if(formData.IsPopular) setPopularData((prev)=> [...prev, formData])
        if(formData.IsRecommended) setRecommendedData((prev)=> [...prev, formData])

        console.log(id)
        console.log(popular)
        console.log(recommended)


        e.target.name.value=''
        e.target.price.value=''
        e.target.imgUrl.value=''
        e.target.popular.checked = false
        e.target.recommended.checked = false

    }
    return(
        <>
            <div className={styles.formContainer}>

            <form onSubmit={handelSubmit} className={styles.form}>
                <input type="text" name="name" id="name" placeholder='Name' className={styles.textInput} required/><br />
                <input type="number" name="price" id="price" placeholder='price' className={styles.textInput} required/><br />
                <input type="url" name="imgUrl" id="imgUrl" placeholder='Image Url' className={styles.textInput} required/><br />
                
                <input type="checkbox" name="popular" id="popular" value="popular" required/>
                <label htmlFor="popular">Popular</label><br/>
                
                <input type="checkbox" name="recommended" id="recommended" value="recommended"/>
                <label htmlFor="recommended">Recommended</label><br />

                <button type="submit" className={styles.addButton}>Add</button>
                <button onClick={()=>toggleForm((prev)=>!prev)} className={styles.cancelButton}>Cancel</button>
            </form>
            </div>
        </>
    )
}

export default Form