
import styles from "./Navigation.module.css";
import "./Navigation.css";
const Navigation = () => {
  
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo"> 
      <img src="/images/logo.png" alt="do some coding logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navigation;