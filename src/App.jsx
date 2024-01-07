import Header from "./component/header/header"
import styles from "./App.module.css"
import Footer from "./component/footer/footer"
import Foods from "./component/foods/foods"
function App(){
  return(
    <>
      <div className={styles.app}>
        <Header/>
        <Foods/>
        <Footer/>
        
      </div>
    </>
  )
}

export default App