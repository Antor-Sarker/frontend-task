import styles from './navbar.module.css'
import { UserIcon } from '@heroicons/react/24/outline'

function Navbar(){
    
    return(
        <>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.title}>pti.</li>
                    <li style={{display: 'flex'}}>
                        <input type="search" name="" id="" className={styles.search} placeholder='Search Audiobook'/>
                        <select name="MENU" id="" className={styles.menu}>
                            <option value="details"style={{display: 'none'}}>MENU</option>
                            <option value="home">Home</option>
                            <option value="details">Details</option>
                            <option value="category">Category</option>
                            <option value="favourites">My Favorites</option>
                            <option value="profile">Profile</option>
                            <option value="auth">Login/Sign Up</option>
                        </select>
                    </li>
                    <li>
                        <UserIcon className={styles.navIcon}/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar